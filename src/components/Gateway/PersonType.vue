<template>
    <div style="display: flex; width: 100%; justify-content: center;align-items: center; height: 100vh">
      <div style="text-align: left; width: 400px">
        <h5><router-link to="/auth/registration">Пользователь 1 ( Я новый )</router-link></h5>
        <h5><router-link to="/auth/login">Пользователь 2 ( Меня пригласили )</router-link></h5>
        <h5><router-link to="/auth/login">Пользователь 3 ( Я зарегистрировался )</router-link></h5>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'PersonType'
  }

</script>