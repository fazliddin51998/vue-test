<template>
  <div>
    <navbar></navbar>
    <h1 style="margin-bottom: 50px; text-align: center; margin-top:30px">Опрос о компания</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from "../navbar/navbar";
  export default {
    name: 'Questions',
    components: {Navbar}
  }
</script>