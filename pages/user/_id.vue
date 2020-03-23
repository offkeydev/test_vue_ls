<template>
  <section class="container">
    <div class="user-container">
      <nuxt-link class="link" to="/">To main page</nuxt-link>
      <h1>User single edit</h1>
      <div class="current-user">

        <form action="">
          <label for="name">
            <span>Name</span>
            <input type="text" id="name" placeholder="User name" required
                   :value="currentUser.name || editName"
                   v-on:blur="editName = $event.target.value"
            >

          </label>
          <label for="surname">
            <span>Surname</span>
            <input type="text" id="surname" placeholder="User surname" required
                   :value="currentUser.surname || editSurname"
                   v-on:blur="editSurname = $event.target.value"
            >
          </label>
          <label for="phone">
            <span>Phone</span>
            <input type="text" id="phone" placeholder="User phone" required
                   :value="currentUser.phone || editPhone"
                   v-on:blur="editPhone = $event.target.value"
            >
          </label>
          <label for="email">
            <span>Email</span>
            <input type="email" id="email" placeholder="User email" required
                   :value="currentUser.email || editEmail"
                   v-on:blur="editEmail = $event.target.value"
            >
          </label>
        </form>
        <button @click.prevent="updateUser()">Save edit</button>
      </div>
    </div>

    <div class="user-container other">

      <h3>Other users</h3>

      <users-list></users-list>
    </div>

    <div class="import-data other">
      <h3>Import data</h3>
      <form action="">
        <textarea name="" id="" cols="30" rows="10" v-model="jsonData"></textarea>

      </form>
      <button @click.prevent="parseData()">Save data to JSON</button>

      <div class="data-output">
        <p>Data output:</p>
        <ul>
        <li v-for="(item,index) of GET_DATA" :key="item.id">{{ index }} - Data : {{item}}</li>
          <br>
        </ul>
      </div>
    </div>

  </section>
</template>

<script>
  import UsersList from "../../components/UsersList";
  import {mapGetters} from 'vuex'
  export default {

      data () {
        return {
          editName: '',
          editSurname: '',
          editPhone: '',
          editEmail: '',
          currentUser: {},
          currentUserId: Number(this.$router.apps[0]._route.params.id),
          jsonData: []

        }
      },
      methods: {
          openUser (user) {
              this.$router.push('/user/' + user)
          },

          updateUser () {
              const updatedUser = {
                id: this.currentUserId,
                name: this.editName || this.currentUser.name,
                surname: this.editSurname || this.currentUser.surname,
                phone: this.editPhone || this.currentUser.phone,
                email: this.editEmail || this.currentUser.email,
              }

              this.$store.dispatch('SAVE_EDIT_USER', updatedUser)
          },

          parseData() {
            if(this.jsonData.length !== 0){
                this.$store.dispatch('PARSE_DATA', this.jsonData)

            }
          }
      },
      computed: {
          ...mapGetters([
              'GET_DATA'
          ])
      },

      components: {
          UsersList
      },
      mounted() {
          this.currentUser = JSON.parse(window.localStorage.getItem('users')).find(user => user.id === this.currentUserId);

          this.GET_DATA
      }

  }
</script>

<style lang="sass">
.current-user
  margin: 24px 0
  form
    margin: 24px 0
  label
    display: block
    margin-bottom: 24px
    span
      display: block
.other > h3
  font-size: 28px
  border-bottom: 2px solid #ccc
  padding: 24px 0
  margin-bottom: 48px
</style>
