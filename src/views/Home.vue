<template>
  <div class="home">
    <Header />
    <Features />
    <About />
    <!-- <Newsletter /> -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Features from "../components/Features.vue";
import Newsletter from "../components/Newsletter.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, About, Features, Newsletter, Footer },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background-color: #0b0547;
}
</style>