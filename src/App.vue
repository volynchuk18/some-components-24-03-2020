<template>
  <div id="app">
    <desktop-header />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import DesktopHeader from './components/desktop/DesktopHeader.vue';

export default {
  components: { DesktopHeader },
};
</script>
