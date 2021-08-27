<template>
  <div class="text-center">
    <main class="form-signin">
      <div>
        <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Пожалуйста, заполните информацию</h1>

        <div class="form-floating">
          <input type="email" v-model="email" class="form-control" id="floatingInput" autocomplete="off" placeholder="name@example.com" required>
          <label for="floatingInput" >Электронная почта</label>
        </div>
        <div class="form-floating">
          <input type="text" v-model="name" class="form-control" id="name" autocomplete="off" placeholder="Arthur" style="border-radius: 0" required>
          <label for="name">Имя</label>
        </div>
        <div class="form-floating">
          <input type="password" v-model="password" class="form-control" autocomplete="off" id="floatingPassword" placeholder="Password" required>
          <label for="floatingPassword">Пароль</label>
        </div>


        <button class="w-100 btn btn-lg btn-primary" type="button" v-on:click="registration()">Регистрации</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    name: 'Registration',
    data(){
      return {
        name : '',
        email: '',
        password: ''
      }
    },
    computed: {
      authUser(){
        return this.$store.getters.authUser
      },
      questions(){
        return this.$store.getters.getQuestions
      },
      users(){
        return this.$store.getters.getUsers
      },
      answers(){
        return this.$store.getters.getUserAnswers
      },
    },
    methods: {
      registration(){
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        if (this.checkInput()){
          this.$store.commit('registration',data)
          this.$router.push('/questions/list/')
        }else{
          console.log("Data not required")
        }
      },
      checkInput() {
        return !(this.email.length <= 0 || this.password.length <= 0 || this.name.length <= 0);
      }
    }
  }
</script>

