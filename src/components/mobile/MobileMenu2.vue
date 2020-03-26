<template>
  <div ref="menu" class="mobile-menu">
    <div
      class="mobile-menu-item"
      v-for="item in menuItems"
      :key="item"
      @click="active = item"
      :class="{'active-hovered active-hovered-background': active === item}"
    >
      {{ item }}
    </div>
    <div class="mobile-menu-line"></div>
    <template v-if="loggedIn">
      <div
        :class="{'active-hovered active-hovered-background': active === 'Profile'}"
        class="mobile-menu-item"
        @click="active = 'Profile'"
      >
        Profile
      </div>
      <div
        :class="{'active-hovered active-hovered-background': active === 'Balance'}"
        class="mobile-menu-item"
        @click="active = 'Balance'"
      >
        Balance:
        <span class="mobile-menu-item-balance-value">
          0.00119196
        </span>
        BTC
      </div>
      <div
        :class="{'active-hovered active-hovered-background': active === 'Zero fees and Burn-out'}"
        class="mobile-menu-item"
        @click="active = 'Zero fees and Burn-out'"
      >
        Zero fees and Burn-out
      </div>
    </template>
    <div class="mobile-menu-line"></div>
    <div
      :class="{'active-hovered active-hovered-background': active === 'Sign out'}"
      class="mobile-menu-item"
      @click="active = 'Sign out'"
      v-if="loggedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        class="icon-svg"
      >
        <path d="M5.89056 3.11653C7.05417 2.63454 8.33459 2.50843 9.56988
          2.75415C10.8052 2.99986 11.9399 3.60636 12.8305 4.49696L14.216 3.11144C13.0513
          1.94682 11.5675 1.1537 9.95214 0.832378C8.33676 0.511059 6.66237 0.675972 5.14072
          1.30626C3.61906 1.93655 2.31848 3.00391 1.40344 4.37337C0.488401 5.74282 0 7.35286
          0 8.99989C0 10.6469 0.488401 12.257 1.40344 13.6264C2.31848 14.9959 3.61906 16.0632
          5.14072 16.6935C6.66238 17.3238 8.33676 17.4887 9.95214 17.1674C11.5675 16.8461
          13.0513 16.053 14.216 14.8883L12.8305 13.5028C11.9399 14.3934 10.8052 14.9999
          9.56988 15.2456C8.33459 15.4914 7.05418 15.3652 5.89056 14.8833C4.72694 14.4013
          3.73237 13.5851 3.03264 12.5378C2.3329 11.4906 1.95942 10.2594 1.95942 8.99989C1.95942
          7.7404 2.3329 6.50919 3.03264 5.46196C3.73237 4.41473 4.72694 3.59852 5.89056 3.11653Z"
          fill="currentColor"
        />
        <path d="M14.9826 6.55062L16.2493 7.81732L7.83767 7.81732V9.77674H16.2492L14.9826
          11.0434L16.3681 12.4289L20 8.79698L16.3681 5.1651L14.9826 6.55062Z"
          fill="currentColor"
        />
      </svg>
      Sign out
    </div>
    <div
      :class="{'active-hovered active-hovered-background': active === 'Sign in'}"
      class="mobile-menu-item"
      @click="active = 'Sign in'"
      v-else
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        class="icon-svg"
      >
        <path
          d="M11.4268 14.8835C10.2632 15.3655 8.98279 15.4916 7.7475
          15.2459C6.51221 15.0001 5.37752 14.3936 4.48693 13.503L3.10141
          14.8886C4.26603 16.0532 5.74986 16.8463 7.36524 17.1676C8.98062
          17.4889 10.655 17.324 12.1767 16.6937C13.6983 16.0634 14.9989 14.9961
          15.9139 13.6266C16.829 12.2572 17.3174 10.6471 17.3174 9.00011C17.3174
          7.35308 16.829 5.74304 15.9139 4.37358C14.9989 3.00413 13.6983 1.93677
          12.1767 1.30648C10.655 0.676188 8.98062 0.511272 7.36524 0.832592C5.74986
          1.15391 4.26603 1.94703 3.10141 3.11166L4.48693 4.49718C5.37752 3.60658
          6.51221 3.00008 7.7475 2.75436C8.98279 2.50865 10.2632 2.63476 11.4268
          3.11674C12.5904 3.59873 13.585 4.41495 14.2847 5.46218C14.9845 6.50941
          15.358 7.74061 15.358 9.00011C15.358 10.2596 14.9845 11.4908 14.2847
          12.538C13.585 13.5853 12.5904 14.4015 11.4268 14.8835Z"
          fill="currentColor"
        />
        <path
          d="M7.14471 11.4494L8.41141 10.1827L-0.000219345 10.1827V8.22326H8.41132L7.14471
          6.95665L8.53022 5.57113L12.1621 9.20302L8.53022 12.8349L7.14471 11.4494Z"
          fill="currentColor"
        />
      </svg>
      Sign in
    </div>
    <div class="background" @click="$emit('close')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    loggedIn: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show: {
      async handler(to) {
        await this.$nextTick();
        if (to) {
          this.$refs.menu.style.height = 'calc(640px - 164px)';
          // eslint-disable-next-line no-return-assign
          setTimeout(() => this.$refs.menu.style.overflow = 'visible', 100);
        } else {
          this.$refs.menu.style.height = '0';
          this.$refs.menu.style.overflow = 'hidden';
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      active: null,
      menuItems: [
        'Platform',
        'Exchange',
        'Fline trading  bot',
        'Burn-out',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/fonts.scss';

 .mobile-menu {
   position: absolute;
   top: 48px;
   left: 0;
   width: calc(100% - 57px);
   height: calc(640px - 164px);
   color: #717F94;
   background: rgba(9, 12, 19, 0.86);
   backdrop-filter: blur(10px);
   transition: 0.1s linear;
   overflow: hidden;
   &-item {
     height: 50px;
     display: flex;
     align-items: center;
     padding-left: 20px;
     cursor: pointer;
     &-balance-value {
       color: $color-white;
       margin: 0 5px;
     }
   }
   &-line {
     height: 1px;
     width: 100%;
     background: rgba(255, 255, 255, 0.1);
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

  .icon-svg {
    margin-right: 10px;
  }
</style>
