<template>
  <div v-if="show" class="mobile-menu">
    <div
      class="mobile-menu-item"
      v-for="item in menuItems"
      :key="item"
    >
      {{ item }}
    </div>
    <div class="background" @click="$emit('close')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuItems: [
        'Platform',
        'Profile',
        'BTC balance',
        'My profits',
        'Fline trading  bot',
        'Midas coin',
        'Sign out',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
 .mobile-menu {
   position: absolute;
   top: 68px;
   left: 0;
   width: calc(100% - 57px);
   height: calc(640px - 68px);
   color: #717F94;
   background: rgba(9, 12, 19, 0.86);
   backdrop-filter: blur(10px);
   &-item {
     height: 50px;
     display: flex;
     align-items: center;
     padding-left: 20px;
     cursor: pointer;
   }
 }
  .background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: calc(100% + 57px);
    height: 100%;
  }
</style>
