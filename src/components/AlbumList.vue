<template>
  <div class="tab-pane">
    <header class="tab-pane__header">
      <h2>{{ albums.length }} álbumes</h2>
    </header>
    <div class="tab-pane__content">
      <Album :item="item" v-for="item in albums" :key="item.id" />
    </div>
  </div>
</template>


<script>
import Album from "@/components/Album";
export default {
  name: "AlbumList",
  components: {
    Album,
  },
  props: {
    albums: {
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