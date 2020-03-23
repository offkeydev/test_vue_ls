<template>
  <section class="container">
    <div class="users-container">

      <nuxt-link class="link" to="/user">Add user</nuxt-link>

      <users-list></users-list>

    </div>
  </section>
</template>

<script>

  import UsersList from "../components/UsersList";

export default {
    data () {
      return {
      }
    },
  methods: {
      openUser (user) {
          this.$router.push('/user/' + user)
      },

  },

  components: {
      UsersList
  },


}
</script>

<style lang="sass">
body
  background-color: #f1f1f1
ul
  list-style-type: none
  padding: 0 0 0 0

.container
  max-width: 1180px
  margin: 60px auto
  padding: 24px
  .link
    margin-bottom: 48px
    text-transform: uppercase
    text-decoration: none
    border: 1px solid #ccc
    padding: 8px 16px
    color: #fff
    display: inline-block
    border-radius: 30px
    background-color: #ff9926
.user-item
  background-color: #fff
  padding: 12px 24px
  margin-bottom: 24px
  display: flex
  align-items: center
  justify-content: space-between
</style>
