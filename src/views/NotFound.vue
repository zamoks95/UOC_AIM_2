<template>
  <div class="notFound__content">
    <label class="notFound__content__error">404!</label>
    <div class="notFound__content__aside">
      <h1 class="notFound__content__title">Oops! Página no encontrada!</h1>
      <p class="notFound__content__text">
        <router-link to="/"> Volver al incio </router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",
};
</script>


<style lang="scss">
.notFound {
  &__content {
    flex-direction: column;
    align-items: center;
    display: flex;
    max-width: 512px;
    margin: 0 auto;
    &__aside {
      text-align: center;
    }
    &__error {
      font-size: 160px;
      line-height: 140px;
      font-weight: bold;
    }
    &__title {
      font-weight: bold;
    }
    &__text {
      color: blue;
    }
  }
}
</style>