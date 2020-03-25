<template>
  <div id="app">
    <desktop-header />
    <desktop-card />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import DesktopHeader from './components/desktop/DesktopHeader.vue';
import DesktopCard from './components/desktop/DesktopCard.vue';

export default {
  components: { DesktopCard, DesktopHeader },
};
</script>

<style>
  #app {
    background: black;
  }
</style>
