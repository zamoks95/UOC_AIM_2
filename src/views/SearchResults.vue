<template>
  <main class="main">
    <h1 class="main__title">
      Resultados de
      <span class="main__title__highlight">{{ currentSearch }}</span>
    </h1>
    <b-tabs content-class="mt-3" class="search-result">
      <b-tab title="Todo" active
        ><TrackList :tracks="tracks" />
        <AlbumList :albums="albums" />
        <ArtistList :artists="artists" />
      </b-tab>
      <b-tab title="Canciones">
        <TrackList :tracks="tracks" />
      </b-tab>
      <b-tab title="Álbumes">
        <AlbumList :albums="albums" />
      </b-tab>
      <b-tab title="Artistas">
        <ArtistList :artists="artists" />
      </b-tab>
    </b-tabs>
  </main>
</template>

<script>
import ArtistList from "@/components/ArtistList";
import AlbumList from "@/components/AlbumList";
import TrackList from "@/components/TrackList";

import json_tracks from "@/json/tracks.json";
import json_albums from "@/json/albums.json";
import json_artists from "@/json/artists.json";

export default {
  name: "SearchResults",
  components: {
    ArtistList,
    AlbumList,
    TrackList,
  },
  data() {
    return {
      tracks: json_tracks.data,
      albums: json_albums.data,
      artists: json_artists.data,
      currentSearch: new URLSearchParams(window.location.search).get("Search"),
    };
  },
};
</script>

