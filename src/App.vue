<template>
  <div id="app">
    <desktop-header />
    <desktop-card />
    <buttons-container />
    <div class="mobile-container">
      <mobile-header />
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import DesktopHeader from './components/desktop/DesktopHeader.vue';
import DesktopCard from './components/desktop/DesktopCard.vue';
import ButtonsContainer from './components/ButtonsContainer.vue';
import MobileHeader from './components/mobile/MobileHeader.vue';

export default {
  components: {
    MobileHeader,
    ButtonsContainer,
    DesktopCard,
    DesktopHeader,
  },
};
</script>

<style>
  #app {
    background: black;
  }
  .mobile-container {
    margin-top: 100px;
    width: 320px;
    height: 640px;
    background-image: url('assets/img/background.png');
  }
</style>
