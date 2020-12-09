<template>
  <main class="page-register">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">
        Regístrate en uocify para disfrutar de miles de canciones.
      </p>

      <form>
        <div class="form-group">
          <label class="form-label" for="username">Email</label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            class="form-control"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button class="btn btn-primary btn-lg" v-on:click="register">
          Registrar
        </button>
      </form>

      <p class="auth-bottom">
        ¿Ya tienes cuenta?
        <router-link to="/login" class="alink"> Inicia sesión </router-link>
      </p>
    </section>
  </main>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("Nou usuari creat amb el correu: " + this.email);
          this.$notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Nou usuari creat amb el correu: " + this.email,
          });
          this.$router.push({ name: "Home" });
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

<style lang="scss" >
.page-register {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  height: 100%;
  .main-title {
    margin-bottom: 20px;
  }
  .logo {
    width: 200px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .container-thin {
    max-width: 600px;
  }
}
</style>