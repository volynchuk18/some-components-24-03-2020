<template>
  <div ref="menu" class="mobile-menu">
    <div
      class="mobile-menu-item"
      v-for="item in items"
      :key="item"
      @click="active = item"
      :class="{'active-hovered': active === item}"
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
  data() {
    return {
      active: null,
      menuItemsLoggedIn: [
        'Platform',
        'Profile',
        'BTC balance',
        'My profits',
        'Fline trading  bot',
        'Midas coin',
        'Sign out',
      ],
      menuItems: [
        'Platform',
        'Fline trading  bot',
        'Midas coin',
        'Sign in',
      ],
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    loggedIn: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show: {
      async handler(to) {
        await this.$nextTick();
        if (to) {
          this.$refs.menu.style.height = 'calc(640px - 142px)';
          // eslint-disable-next-line no-return-assign
          setTimeout(() => this.$refs.menu.style.overflow = 'visible', 100);
        } else {
          this.$refs.menu.style.height = '0';
          // eslint-disable-next-line no-return-assign
          this.$refs.menu.style.overflow = 'hidden';
        }
      },
      immediate: true,
    },
  },
  computed: {
    items() {
      return this.loggedIn ? this.menuItemsLoggedIn : this.menuItems;
    },
  },
};
</script>

<style lang="scss" scoped>
 .mobile-menu {
   position: absolute;
   top: 70px;
   left: 0;
   width: calc(100% - 57px);
   height: calc(640px - 142px);
   color: #717F94;
   background: rgba(9, 12, 19, 0.86);
   backdrop-filter: blur(10px);
   transition: 0.1s linear;
   overflow: hidden;
   &-item {
     height: 44px;
     display: flex;
     align-items: center;
     padding-left: 20px;
     cursor: pointer;
   }
 }
  .background {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: calc(100% + 57px);
    height: 100%;
  }
</style>
