<template>
  <div class="container">
    <Header></Header>
    <Nav></Nav>

    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Nav,
    Header,
    Footer
  }
};
</script>