<template>
  <!-- Tab Pane Artists - Start -->
  <div class="tab-pane">
    <header class="tab-pane__header">
      <h2>{{ artists.length }} artistas</h2>
    </header>
    <div class="tab-pane__content">
      <Artist :item="item" v-for="item in artists" :key="item.id" />
    </div>
  </div>
  <!-- Tab Pane Artists - End -->
</template>

<script>
import Artist from "@/components/Artist";

export default {
  name: "ArtistList",
  components: {
    Artist,
  },
  props: {
    artists: {
      type: Array,
    },
  },
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