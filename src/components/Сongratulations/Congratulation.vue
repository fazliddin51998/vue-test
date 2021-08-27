<template>
  <div style="text-align: center; position: fixed;height: 100vh; width: 100%; display: flex; justify-content: center;align-items: center">
    <h2>{{authUser.name}} {{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Congratulation',
    computed: {
      questions(){
        return this.$store.state.questions
      },
      users(){
        return this.$store.getters.getUsers
      },
      userAnswers(){
        return this.$store.getters.getAnswers
      },
      authUser(){
        return this.$store.getters.authUser
      },
    },
    mounted() {
      this.$nextTick(function () {
        let userData = {
          user: this.authUser,
          userAnswers: this.userAnswers.find( r=>r.user_id === this.authUser.id),
          questions: this.questions
        }

        console.log(userData)

        if (! this.authUser.id) {
          this.$router.push('/')
        }
        if (! this.authUser.done){
          this.$router.push('/questions/list/')
        }
      })
    },
    data() {
      return {
        msg: ' поздравляем и благодарим вас. за участие в нашем опросе',
      }
    },


  }
</script>