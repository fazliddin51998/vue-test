<template>
  <div class="container" style="display: flex;align-items: center;margin-top: 10px; flex-direction: column">
    <div class="card" style="width: 50%">

      <div class="questions" style="text-align: left; padding: 30px" v-for="question in questions" :key="question.id">
        <div>
          {{question.question}}
          <form style="margin-top: 10px">
              <input type="radio" name="browser" v-on:click="chooseAnswers(question.id,'a')" v-bind:id="'a' + question.id">
              <label style="margin-left: 10px"  v-bind:for="'a' + question.id">{{question.variants.a}}</label><br>
              <input type="radio" name="browser" v-on:click="chooseAnswers(question.id,'b')" v-bind:id="'b' + question.id">
              <label style="margin-left: 10px" v-bind:for="'b' + question.id">{{question.variants.b}}</label><br>
              <input type="radio" name="browser" v-on:click="chooseAnswers(question.id,'c')" v-bind:id="'c' + question.id">
              <label style="margin-left: 10px" v-bind:for="'c' + question.id">{{question.variants.c}}</label><br>
          </form>
        </div>

      </div>
      <div style="margin-top: 10px; margin-bottom: 30px; text-align: center">
        <button class="btn btn-primary" type="submit" v-on:click="sendAnswers">Отправит ответь</button>
      </div>
    </div>
  </div>
</template>

<script>
  let ans = [
    { questionId: 1, answer: '' },
    { questionId: 2, answer: '' },
    { questionId: 3, answer: '' }
  ]
  export default {
    mounted() {
      this.$nextTick(function () {
        if (! this.authUser.id) {
          this.$router.push('/')
        }
        if (this.authUser.done){
          this.$router.push('/congratulation')
        }
      })
    },

    computed: {
      questions(){
        return this.$store.state.questions
      },
      authUser(){
        return this.$store.getters.authUser
      },
    },
    methods: {
      chooseAnswers(questionId, answer){
        {
          for (let q = 0; q < ans.length; q ++){
            if (ans[q].questionId === questionId){
              ans[q].answer = answer;
            }
          }
        }
      },
      sendAnswers(){
        let data = {
          user_id: this.authUser.id,
          answers: ans
        }
        if (this.checkInputs()){
          this.$store.commit('setAnswers',data)
          this.$router.push('/congratulation')
        }
      },
      checkInputs(){
        return !ans.find(a => a.answer.length <= 0);
      }
    },
    name: 'QuestionsList'
  }

</script>