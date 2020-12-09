<template>
  <div class="media-item">
    <div class="item__media">
      <img class="item__media__image" :src="item.cover" alt="1.jpg" />
    </div>
    <div class="item-description">
      <div class="item-description__header">{{ item.title }}</div>
      <div class="item-description__text">{{ item.nb_tracks }} canciones</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    item: {},
  },
};
</script>
