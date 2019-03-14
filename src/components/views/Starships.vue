<template>
  <div class="content">
    <div class="content__title">
      Starships
    </div>

    <div class="content__search">
      <input class="content__search-input"
             @input="changeSearch"
             v-model="search">
    </div>

    <div class="list">
      <div class="list__inner" v-if="list.length && !loading">
        <div class="list__item"
             v-for="item in list">
          {{item.name}}
        </div>
      </div>

      <div class="list__loader" v-if="loading">
        Loading ..
      </div>

      <div class="list__none" v-if="!list.length && !loading">
        Starships not found
      </div>
    </div>

    <div class="pag"
         v-if="list.length < total && list.length && !loading">
      <span class="pag__prev"
            :class="{_disabled: page === 1}"
            @click="changePage(page - 1)">
        Previous
      </span>

      <span class="pag__num"
            :class="{_active: page === p}"
            v-for="p in pagPages"
            @click="changePage(p)">
        {{p}}
      </span>

      <span class="pag__next"
            :class="{_disabled: page === pagPages}"
            @click="changePage(page + 1)">
        Next
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      list: [],
      perPage: 10,
      total: 0,
      loading: true,
      page: 1,
      search: this.$route.query.search,
      searchingTimeout: null
    }
  },

  computed: {
    //* Pages of Pagination
    pagPages () {
      return Math.ceil(this.total / this.perPage)
    }
  },

  methods: {
    //* Get Starships
    getList () {
      return new Promise((resolve, reject) => {
        this.loading = true
        axios.get('https://swapi.co/api/starships', {
          params: {
            page: this.page,
            search: this.search
          }
        }).then(res => {
          console.log(res.data)
          this.list = res.data.results
          this.total = res.data.count
          this.loading = false
          resolve()
        }).catch(err => {
          reject()
        })
      })
    },

    //* Change Pagination Page
    changePage (p) {
      if (p === 0 ||
        p === this.pagPages + 1 ||
        p === this.page) {
        return false
      }

      this.page = p
      this.getList()
    },

    //* Change Search String
    changeSearch () {
      if (this.search === this.$route.query.search) return false

      // делаем задержку при вводе
      if (this.searchingTimeout) {
        clearTimeout(this.searchingTimeout)
        this.searchingTimeout = null
        this.changeSearch()
      } else {
        this.searchingTimeout = setTimeout(() => {
          this.getList().then(() => {

            // после обновления списка обновляем поисковую строку
            if (this.search) {
              this.$router.push({query: {search: this.search}})
            } else {
              this.$router.push({query: {}})
            }
          })
        }, 1000)
      }
    }
  },

  mounted () {
    this.getList()
  }
}
</script>