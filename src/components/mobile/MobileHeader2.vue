<template>
  <div class="mobile-header">
    <div class="mobile-header-logo">
      <icon-logo />
    </div>
    <icon-mobile-menu
      v-if="!show"
      class="mobile-header-menu-icon"
      @click="menuIconClickHandler"
    />
    <icon-close
      v-else
      class="mobile-header-menu-icon"
      @click="menuIconClickHandler"
    />
    <mobile-menu2
      :logged-in="loggedIn"
      @close="closeMenu"
      :show="show"
    />
  </div>
</template>

<script>
import MobileMenu2 from './MobileMenu2.vue';
import IconClose from '../icons/IconClose.vue';
import IconLogo from '../icons/IconLogo.vue';
import IconMobileMenu from '../icons/IconMobileMenu.vue';

export default {
  name: 'MobileHeader2',
  components: {
    IconMobileMenu,
    IconLogo,
    IconClose,
    MobileMenu2,
  },
  props: {
    loggedIn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    menuIconClickHandler() {
      this.show = !this.show;
    },
    closeMenu() {
      this.show = false;
    },
  },
  computed: {
    menuIconSrc() {
      return this.show ? '@/assets/svg/mobile-menu.svg' : '../../assets/svg/close.svg';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/fonts.scss';

  .mobile-header {
    position: absolute;
    width: 100%;
    background: #090C13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    &-logo {
      display: flex;
      flex-direction: column;
      height: 22px;
      & > {
        span {
          color: $color-white;
          margin-top: 6px;
        }
      }
    }
    &-menu-icon {
      cursor: pointer;
    }
  }
</style>
