<template>
  <main class="page-home">
    <div class="container container-thin">
      <img class="logo" src="@/assets/icon.svg" alt="logo" />
      <h1 class="main-title">¿En busca de música?</h1>
      <p class="lorem-textum">
        Introduce tu texto en el buscador de la cabecera o en la cajita a continuación.
      </p>
      <SearchBar />
    </div>
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar,
  },
};
</script>


<style lang="scss">
.page-home {
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  .logo {
    width: 200px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .container-thin {
    max-width: 600px;
  }
}
</style>