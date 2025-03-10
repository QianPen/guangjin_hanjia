<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Experience />
    <Thoughts />
    <Gallery />
    <About />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Thoughts from './components/Thoughts.vue'
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Experience,
    Thoughts,
    Gallery,
    About,
    Footer
  }
}
</script>

<style lang="less">
@import './styles/global.less';
</style>
