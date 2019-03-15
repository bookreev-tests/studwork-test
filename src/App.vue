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

      &-input {
        width: 200px;
        height: 32px;
        border: 1px solid alpha(black, 15%);
        border-radius: 2px;
        padding: 0 10px;
      }
    }

    &__back {
      margin-top: 20px;

      &-link {
        color: deepskyblue;
        cursor: pointer;

        &:hover {
          color: lighten(deepskyblue, 40%);
        }

        &:active {
          color: darken(deepskyblue, 10%);
        }
      }
    }
  }
}
</style>
