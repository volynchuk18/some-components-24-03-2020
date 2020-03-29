<template>
  <div class="mobile-header">
    <div class="mobile-header-logo">
      <icon-logo />
      <span class="font-vollkorn">
        Midas
      </span>
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
    <mobile-menu
      :logged-in="loggedIn"
      @close="closeMenu"
      :show="show"
    />
  </div>
</template>

<script>
import MobileMenu from './MobileMenu.vue';
import IconClose from '../icons/IconClose.vue';
import IconLogo from '../icons/IconLogo.vue';
import IconMobileMenu from '../icons/IconMobileMenu.vue';

export default {
  name: 'MobileHeader',
  components: {
    IconMobileMenu,
    IconLogo,
    IconClose,
    MobileMenu,
  },
  data() {
    return {
      show: false,
    };
  },
  props: {
    loggedIn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    menuIconClickHandler() {
      this.show = !this.show;
    },
    closeMenu() {
      this.show = false;
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
