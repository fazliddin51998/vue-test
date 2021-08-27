<template>
  <div>
    <main class="form-signin">
      <div>
        <div style="display: flex;align-items: center;flex-direction: column; text-align: center">
          <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
          <h1 class="h3 mb-3 fw-normal">Пожалуйста, заполните информацию</h1>
        </div>

        <div class="form-floating">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
          <label for="email">Электронная почта</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
          <label for="password">Пароль</label>
        </div>
        <div class="text-danger text-center">
          user2
          <p>Электронная почта: test@mail.ru , Парол: password</p>
          user3
          <p>Электронная почта: test2@mail.ru , Парол: password</p>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" v-on:click="login()">Авторизация</button>
        <div style="text-align: center"><p class="mt-5 mb-3 text-muted">© 2017–2021</p></div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    computed: {
      users(){
        return this.$store.state.users
      },
      authUser(){
        return this.$store.state.authUser
      }
    },
    data() {
      return {
          email: '',
          password: '',
      }
    },
    methods: {
      login(){
        for (let k in this.users){
          if (this.users[k].password === this.password && this.users[k].email === this.email){
            this.$store.commit('login',this.users[k])
            this.$router.push('/questions/list/')
          }else{
            console.log("Data not required")
          }
        }

      }
    }
  }
</script>

