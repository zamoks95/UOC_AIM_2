<template>
  <!-- Header - Start -->
  <header class="header">
    <!-- Go Home & Logo - Start -->
    <a class="header__go-home" href="/" title="Ir al Incio">
      <img
        class="header__go-home__image"
        src="@/assets/logo.svg"
        alt="Uocify Logo"
      />
    </a>
    <!-- Go Home & Logo - End -->

    <SearchBar />

    <div class="user">
      <div v-if="!isLoggedIn">
        <router-link class="user__link" to="/login"> Inicia sesión </router-link>
        <router-link class="user__link" to="/register"> Registrarse </router-link>
      </div>
      <div v-if="isLoggedIn">
        <div class="user__name">Sergi</div>
        <a class="user__avatar">
          <fa-icon icon="user" />
        </a>

        <fa-icon class="user__signout" icon="sign-out-alt" v-on:click="logout" />
      </div>
    </div>
  </header>
  <!-- Header - End -->
</template>


<script>
import SearchBar from "@/components/SearchBar";
import firebase from "firebase";
export default {
  name: "AppHeader",
  components: {
    SearchBar,
  },
  data: function () {
    return {
      isLoggedIn: false,
      currentUser: "",
    };
  },
  created: function () {
    var that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.isLoggedIn = true;
        that.currentUser = user.email;
      } else {
        this.isLoggedIn = false;
        this.currentUser = "";
      }
    });
  },

  methods: {
    logout: function (e) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed Out: ");
          this.$notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Signed Out: ",
          });
          location.replace("/");

          
        })
        .catch((err) => {
          this.$notify({
            group: "auth",
            type: "error",
            title: err.code,
            text: err.message,
          });
        });
      e.preventDefault();
    },
  },
};
</script>


<style lang="scss">
.header {
  background: $white;
  padding: $spacing $spacing;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 7px 1px;
  margin-bottom: $spacing;
  display: flex;
  align-items: center;
  &__go-home {
    &__image {
      height: 50px;
    }
  }
  .user {
    margin-left: auto;
  }
  .search-form {
    margin-left: $spacing;
  }
  @media (max-width: $screen-xs-max) {
    flex-wrap: wrap;
    .search-form {
      order: 3;
      width: 100%;
      margin: $spacing auto 0px auto;
    }
  }
}
</style>