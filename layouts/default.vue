<template>
  <div>

    <nuxt />

  </div>
</template>

<script>
  export default {
      data () {
        return {
          usersArr: [],
        }
      },
      computed: {

      },
      mounted() {
          // check if users array is exist
          if (window.localStorage.users === undefined){
              window.localStorage.setItem('users', JSON.stringify(this.usersArr))
          }

          this.$store.dispatch('LS_INIT')
      },

  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>

