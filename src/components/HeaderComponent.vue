<template>
  <header
    :class="{ 'sticky-header': isSticky }"
    :style="{
      display: isSticky ? 'block' : 'none',
      fontSize: dynamic.fontSize,
    }"
  >
    <div class="container">
      <router-link style="text-decoration: none; color: inherit" to="/">
        Mi cuenta
        <img
          alt="logo"
          :style="{
            width: dynamic.logoSize,
            height: dynamic.logoSize,
          }"
          src="../assets/logo.png"
        />
      </router-link>
      <router-link style="text-decoration: none; color: inherit" to="/buy">
        Compra
      </router-link>
      <router-link style="text-decoration: none; color: inherit" to="/sale">
        Venta
      </router-link>
      <router-link style="text-decoration: none; color: inherit" to="/movement">
        Movimientos
      </router-link>
      <router-link
        style="text-decoration: none; color: inherit"
        to="/portfolio"
      >
        Portafolio
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSticky: true,
      prevScrollY: 0,
      dynamic: {
        fontSize: "3vh",
        logoSize: "5vh",
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.changeSize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.changeSize);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > this.prevScrollY) {
        this.isSticky = false;
      } else {
        this.isSticky = true;
      }
      this.prevScrollY = currentScrollY;
    },
    changeSize() {
      if (window.innerWidth <= 600) {
        this.dynamic.fontSize = "2vw"; // Tamaño para dispositivos móviles
        this.dynamic.logoSize = "3vw"; // Tamaño del logo para dispositivos móviles
      } else {
        this.dynamic.fontSize = "3vh"; // Tamaño para PCs
        this.dynamic.logoSize = "5vh"; // Tamaño del logo para PCs
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  text-align: center;
  height: 10vh;
  align-items: center;
}
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: #6439ff;
  font-weight: lighter;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding: 0vh 10vw;
}
</style>
