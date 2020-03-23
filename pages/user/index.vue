<template>
  <section class="container">
    <nuxt-link class="link" to="/">To main page</nuxt-link>
    <div class="user-container" >

      <h1>Add User Page</h1>

      <form action="">
        <label for="name">
          <span>Name</span>
          <input type="text" id="name" placeholder="User name" required v-model="name">
        </label>
        <label for="surname">
          <span>Surname</span>
          <input type="text" id="surname" placeholder="User surname" required v-model="surname">
        </label>
        <label for="phone">
          <span>Phone</span>
          <input type="text" id="phone" placeholder="User phone" required v-model="phone">
        </label>
        <label for="email">
          <span>Email</span>
          <input type="email" id="email" placeholder="User email" required v-model="email">
        </label>
      </form>
      <button @click="createUser()">Add user</button>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
          usersArr: [],
          name: '',
          surname: '',
          phone: '',
          email: '',
      }
    },
    computed: {

    },
    methods: {
        createUser () {
            const user = {
                id: JSON.parse(window.localStorage.getItem('users')).length + 1,
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email: this.email
            };

            this.$store.dispatch('ADD_NEW_USER', user);

            // //get users from LS
            // this.usersArr =  JSON.parse(window.localStorage.getItem('users'));
            //
            // //push new users
            // this.usersArr.push(user)
            //
            // //Set array with new User
            // window.localStorage.setItem('users', JSON.stringify(this.usersArr))

            //clear fields
            this.name = '';
            this.surname = '';
            this.phone = '';
            this.email = '';


        }
    }
  }
</script>

<style lang="sass">
  form
    margin: 24px 0
  label
    display: block
    margin-bottom: 24px
    span
      display: block
</style>
