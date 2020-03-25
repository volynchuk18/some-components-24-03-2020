<template>
  <div id="app">
    <desktop-header />
    <desktop-card />
    <buttons-container />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import DesktopHeader from './components/desktop/DesktopHeader.vue';
import DesktopCard from './components/desktop/DesktopCard.vue';
import ButtonsContainer from './components/ButtonsContainer.vue';

export default {
  components: { ButtonsContainer, DesktopCard, DesktopHeader },
};
</script>

<style>
  #app {
    background: black;
  }
</style>
