<template>
  <div id="app" >
    <div id="nav" class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="route-wrap">
        <router-link to="/">Список валют</router-link> |
        <router-link to="/converter">Конвертер</router-link>
      </div>

    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    created() {
      this.$store.dispatch('loadCurrencyList')
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    background-color: lightskyblue;

    min-height: 100vh;
}

#nav {
  padding: 30px;



  a {
    font-weight: bold;
    color: #6c757d;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
