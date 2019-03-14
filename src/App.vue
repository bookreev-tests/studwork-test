<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app {
  width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto 0;

  .content {
    &__title {
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 40px;
    }

    &__search {
      margin-bottom: 20px;
    }
  }

  .list {
    //

    &__item {
      color: deepskyblue;
      cursor: pointer;
      transition: 0.2s ease;

      &:not(:last-child) {
        margin-bottom: 5px;
      }

      &:hover {
        color: lighten(deepskyblue, 40%);
      }

      &:active {
        color: darken(deepskyblue, 10%);
      }
    }
  }

  .pag {
    display: flex;
    margin-top: 30px;

    &__prev, &__next, &__num {
      cursor: pointer;

      &._disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
    &__prev {
      margin-right: 15px;
    }
    &__next {
      margin-left: 15px;
    }

    &__num {
      margin: 0 5px;

      &._active {
        font-weight: 500;
      }
    }
  }
}
</style>
