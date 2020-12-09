<template>
  <div class="tab-pane">
    <header class="tab-pane__header">
      <h2>{{ tracks.length }} canciones</h2>
    </header>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">CANCIÓN</th>
          <th scope="col">ARTISTA</th>
          <th scope="col">ÁLBUM</th>
          <th scope="col" class="duration-cell">D.</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <Track :item="item" v-for="item in tracks" :key="item.id" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Track from "@/components/Track";
export default {
  name: "TrackList",
  props: {
    tracks: {
      type: Array,
    },
  },
  components: {
    Track,
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