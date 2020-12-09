<template>
  <!-- Search Form - Start -->
  <form class="search-form" action="/search" method="get">
    <fieldset class="input-wrapper">

      <label for="Search">
        <fa-icon icon="search" />
      </label>
      <input
        name="Search"
        id="Search"
        class="input-wrapper__field"
        type="text"
        value=""
        placeholder="buscar..."
      />
    </fieldset>
  </form>
  <!-- Search End - Start -->
</template>


<script>
export default {
  name: "SearchBar",
};
</script>


<style lang="scss">
.tab-pane {
  background: $white;
  &__header {
    margin: $spacing * 2 0px (-$spacing * 1.5) $spacing * 2;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>