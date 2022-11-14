<template>
  <div class="wrapper">
    <div class="container">
      <div class="logo">
        <img class="logo__img" src="./assets/images/logo.png" alt="logo">
      </div>
      <app-form></app-form>
    </div>
  </div>
</template>

<script>
import AppForm from "@/components/form";

export default {
  name: 'App',
  components: {
    AppForm

  }
}
</script>

<style lang="scss">
@import "assets/styles/styles.scss";

.wrapper {
  background-image: url('./assets/images/bg-cover.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.container{
  display: flex;
  max-width: 1080px;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
}

.logo{
  display: flex;
  justify-content: center;
  width: 190px;
  height: 48px;
  margin-bottom: 30px;
}

</style>
