<template>
  <div id="app">
    <AppHeader />
    <main class="main">
      <router-view />
      <notifications group="auth" position="bottom right"/>
    </main>
  </div>
</template>


<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
