<template>
  <div id="app">
    <desktop-header />
    <desktop-card />
    <buttons-container />
    <div class="mobile-container-1">
      <mobile-header :logged-in="true" />
    </div>
    <div class="mobile-container-1">
      <mobile-header :logged-in="false" />
    </div>
    <div class="mobile-container">
      <mobile-header2 :logged-in="true" />
    </div>
    <div class="mobile-container">
      <mobile-header2 :logged-in="false" />
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
import MobileHeader2 from './components/mobile/MobileHeader2.vue';


export default {
  components: {
    MobileHeader2,
    MobileHeader,
    ButtonsContainer,
    DesktopCard,
    DesktopHeader,
  },
};
</script>

<style lang="scss" scoped>
  #app {
    background: black;
  }
  .mobile-container {
    margin: 100px auto;
    width: 320px;
    height: 640px;
    position: relative;
    background-repeat: no-repeat;
    &-1 {
      @extend .mobile-container;
      background-image: url('assets/img/background.png');
    }
  }
</style>
