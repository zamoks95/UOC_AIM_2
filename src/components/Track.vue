<template>
  <tr>
    <th scope="row">
      <img class="song-image" :src="item.album.cover_small" alt="1.jpg" />
    </th>
    <td>{{item.title}}</td>
    <td>{{item.artist.name}}</td>
    <td>{{item.album.title}}</td>
    <td class="duration-cell">{{item.duration}}</td>
  </tr>
</template>


<script>
export default {
  name: "Track",
  props: {
    item: {
    },
  },
};
</script>
