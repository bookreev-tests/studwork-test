<template>
  <div class="content">
    <div class="content__title" v-if="loading">
      Loading ..
    </div>
    <div class="content__title" v-else>
      {{starship.name}}
    </div>

    <div class="starship" v-if="starship">
      <div class="starship__info">

        <!-- Model -->
        <div class="starship__info-row">
          <div class="starship__info-label">Model</div>
          <div class="starship__info-value">
            {{starship.model}}
          </div>
        </div>

        <!-- Starship Class -->
        <div class="starship__info-row">
          <div class="starship__info-label">Starship Class</div>
          <div class="starship__info-value">
            {{starship.starship_class}}
          </div>
        </div>

        <!-- Manufacturer -->
        <div class="starship__info-row">
          <div class="starship__info-label">Manufacturer</div>
          <div class="starship__info-value">
            {{starship.manufacturer}}
          </div>
        </div>

        <!-- Cargo Capacity -->
        <div class="starship__info-row">
          <div class="starship__info-label">Cargo Capacity</div>
          <div class="starship__info-value">
            {{formatNumber(starship.cargo_capacity)}}
          </div>
        </div>

        <!-- Consumables -->
        <div class="starship__info-row">
          <div class="starship__info-label">Consumables</div>
          <div class="starship__info-value">
            {{formatNumber(starship.consumables)}}
          </div>
        </div>

        <!-- Cost in Credits -->
        <div class="starship__info-row">
          <div class="starship__info-label">Cost in Credits</div>
          <div class="starship__info-value">
            {{formatNumber(starship.cost_in_credits)}}
          </div>
        </div>

        <!-- Crew -->
        <div class="starship__info-row">
          <div class="starship__info-label">Crew</div>
          <div class="starship__info-value">
            {{formatNumber(starship.crew)}}
          </div>
        </div>

        <!-- Passengers -->
        <div class="starship__info-row">
          <div class="starship__info-label">Passengers</div>
          <div class="starship__info-value">
            {{formatNumber(starship.passengers)}}
          </div>
        </div>

        <!-- Hyperdrive Rating -->
        <div class="starship__info-row">
          <div class="starship__info-label">Hyperdrive Rating</div>
          <div class="starship__info-value">
            {{starship.hyperdrive_rating}}
          </div>
        </div>

        <!-- Max Atmosphering Speed -->
        <div class="starship__info-row">
          <div class="starship__info-label">Max Atmosphering Speed</div>
          <div class="starship__info-value">
            {{formatNumber(starship.max_atmosphering_speed)}}
          </div>
        </div>

        <!-- MGLT -->
        <div class="starship__info-row">
          <div class="starship__info-label">MGLT</div>
          <div class="starship__info-value">
            {{starship.MGLT}}
          </div>
        </div>

        <!-- Created -->
        <div class="starship__info-row">
          <div class="starship__info-label">Created</div>
          <div class="starship__info-value">
            {{formatDate(starship.created)}}
          </div>
        </div>
      </div>
    </div>

    <div class="content__back">
      <a class="content__back-link"
         @click="$router.go(-1)">
        Back to the starships list
      </a>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import helpers from '@/helpers'
import moment from 'moment'

export default {
  props: ['alias'],
  data () {
    return {
      loading: true,
      nameForSearching: helpers.decodeAlias(this.alias),
      starship: null
    }
  },

  methods: {
    //* Get Starship
    getItem () {
      return new Promise((resolve, reject) => {
        this.loading = true
        axios.get('https://swapi.co/api/starships', {
          params: {
            search: this.nameForSearching
          }
        }).then(res => {
          console.log(res.data)
          this.starship = res.data.results[0]
          this.loading = false
          resolve()
        }).catch(err => {
          reject()
        })
      })
    },

    //* Format Number
    formatNumber (num) {
      if (isNaN(num)) {
        return num
      } else {
        return helpers.formatNumber(num)
      }
    },

    //* Format Date
    formatDate (date) {
      return moment(date).format('DD MMMM YYYY')
    }
  },

  created () {
    this.getItem()
  }
}
</script>


<style lang="stylus">
  .starship {
    //

    &__info {
      //

      &-row {
        display: flex;
        padding: 5px;

        &:hover {
          background-color: alpha(deepskyblue, 5%);
        }

        &:not(:last-child) {
          margin-bottom: 2px;
        }
      }

      &-label {
        flex-shrink: 0;
        width: 150px;
        line-height: 1.2;

        &:after {
          content: ':'
        }
      }
      &-value {
        line-height: 1.2;
      }
    }
  }
</style>