<template>
    <div class="users-container">


    <ul v-if="GET_USERS" class="users">
      <li class="user-item" v-for="user of GET_USERS" :key="user.id">
        <div class="basic-data">
          <h3>{{user.name}}</h3>
          <h3>{{user.surname}}</h3>
        </div>
        <div class="basic-data">
          <h3>{{user.phone}}</h3>
          <h3>{{user.email}}</h3>
        </div>
        <div class="user-options">
          <button @click.prevent="openUser(user)">Edit</button>
          <button @click.prevent="deleteUser(user)">Delete</button>
        </div>
      </li>
    </ul>

    <div v-else>
      <h3>There is no users</h3>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  methods: {
      openUser (user) {
          this.$router.push('/user/' + user.id)
      },
      deleteUser(user) {
          if(confirm('Delete this user?')){
              this.$store.dispatch('DELETE_USER', user)
          }
      }
  },

  computed: {
      ...mapGetters([
          'GET_USERS',
      ])
  },

}
</script>

<style lang="sass">
  .user-item
    background-color: #fff
    padding: 12px 24px
    margin-bottom: 24px
    display: flex
    align-items: center
    justify-content: space-between
</style>
