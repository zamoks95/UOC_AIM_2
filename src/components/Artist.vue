<template>
  <div class="media-item media-item__artist">
    <div class="item__media">
      <img class="item__media__image" :src="item.picture_big" alt="empty.jpg" />
    </div>
    
    <div class="item-description">
      <div class="item-description__header">{{ item.name }}</div>
      <div class="item-description__text">{{ item.nb_fan }} fans</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ArtistList",
  props: {
    item: {},
  },
};
</script>


<style lang="scss">
.media-item {
  display: flex;
  width: 240px;
  overflow: hidden;
  padding: $spacing;
  flex-direction: column;
  transition: all 250ms ease-in-out;

  &__artist {
    text-align: center;
    .item__media {
      border-radius: 100%;
      &__image {
        border-radius: 100%;
      }
    }
  }

  .item__media {
    overflow: hidden;
    &__image {
      width: 100%;
      max-width: 210px;
      overflow: hidden;
      border: 1px solid $grey;
      transition: all 250ms ease-in-out;
    }
  }
  .item-description {
    margin-top: $spacing;
    &__header {
      font-weight: bold;
      position: relative;
    }
    &__text {
      margin-top: $spacing/2;
    }
  }
  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    .item__media {
      &__image {
        transform: scale(1.25);
      }
    }
  }
}
</style>