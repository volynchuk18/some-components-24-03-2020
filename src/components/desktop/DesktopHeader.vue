<template>
  <div class="desktop-header">
    <div class="desktop-header-pagination">
      <div
        class="desktop-header-pagination__item active"
        @click="pageClickHandler(item)"
        v-for="item in pageItems"
        :key="item"
        :class="{'active-hovered': active === item}"
      >
        {{ item }}
      </div>
    </div>
    <div class="desktop-header-logo font-vollkorn font-color-white">
      <icon-logo />
      <div>
        Midas.Investments
      </div>
    </div>
    <div class="desktop-header-user-info">
      <div class="desktop-header-user-info__btc-value active">
        {{ user.btc }} BTC
      </div>
      <div class="desktop-header-user-info__user-name active">
        <div> {{ user.name }} </div>
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="#717F94"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.56359 6.55083L5.56344 6.55066L0.91704 1.34183L5.56359 6.55083ZM5.56359
            6.55083C5.80091 6.81639 6.19909 6.81639 6.43641 6.55083L6.43656 6.55066M5.56359
            6.55083L6.43656 6.55066M6.43656 4.55066L11.083 1.34183L6.43656 6.55066ZM11.25
            0.895499C11.25 1.05819 11.196 1.21523 11.0831 1.34166L11.25 0.895499ZM11.25
            0.895499C11.25 0.732737 11.196 0.575624 11.083 0.449166C10.8456 0.183612 10.4475
            0.183612 10.2101 0.449167L6 5.16019M11.25 0.895499L6 5.16019M6 5.16019L1.78986
            0.449167C1.55254 0.183612 1.15436 0.183612 0.91704 0.449167C0.694371 0.698328 0.69432
            1.09243 0.916886 1.34166L6 7.16019Z"
            stroke-width="0.5"
            stroke="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import IconLogo from '../icons/IconLogo.vue';

export default {
  name: 'DesktopHeader',
  components: { IconLogo },
  data() {
    return {
      active: null,
      pageItems: [
        'Platform',
        'Exchange',
        'Fline trading bot',
        'Burn-out',
      ],
      user: {
        name: 'Ivan Ivanovvvvv',
        btc: 0.00347878,
      },
    };
  },
  methods: {
    pageClickHandler(title) {
      this.active = title;
    },
  },
};
</script>

<style lang="scss" scoped>
  .desktop-header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    background: #090C13;
    height: 100px;
    & > div {
      display: flex;
      align-items: center;
    }
    &-pagination {
      display: flex;
      :not(:last-child) {
        margin-right: 28px;
      }
    }
    &-logo {
      display: flex;
      flex-direction: column;
      margin: auto;
      & > div {
        margin-top: 5px;
      }
    }
    &-user-info {
      display: flex;
      justify-content: flex-end;
      & * {
        cursor: pointer;
      }
      &__user-name {
        display: flex;
        align-items: center;
        margin-left: 28px;
        & > div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 90px;
        }
      }
    }
  }
</style>
