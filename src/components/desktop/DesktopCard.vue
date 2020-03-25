<template>
  <div class="desktop-card">
    <div class="desktop-card-dash">
      <img src="@/assets/img/dash-icon.png" alt="dash">
      <div class="desktop-card-dash__container">
        <div class="desktop-card-dash__container-dash1 font-vollkorn">
          DASH
        </div>
        <div class="desktop-card-dash__container-dash2 font-size-14">
          Dash
        </div>
      </div>
      <div class="desktop-card-dash__roi font-size-14">
        <span class="desktop-card-dash__roi-title">
          ROI
        </span>
        <span class="desktop-card-dash__roi-value">
          75%
        </span>
      </div>
    </div>
    <div class="desktop-card-wallet">
      <div class="desktop-card-wallet-value">
        <img src="@/assets/svg/dollar.svg" alt="dollar">
        <span class="font-size-24">1 183.74</span>
      </div>
      <div class="desktop-card-wallet-dash font-size-14">
        <span class="desktop-card-wallet-dash-value">
          17.55
        </span>
        <span class="desktop-card-wallet-dash-title">
          DASH
        </span>
      </div>
    </div>
    <div class="desktop-card-today font-size-14">
      <div class="desktop-card-today-wallet">
        <span class="desktop-card-today-wallet-value">
          0.17
        </span>
        <span class="desktop-card-today-wallet-title">
          USD/DAY
        </span>
      </div>
      <div class="desktop-card-today-increase">
        +4.43%
        <img src="@/assets/svg/arrow-top.svg" alt="arrow-top">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopCard',
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/fonts.scss';

  .desktop-card {
    margin-top: 100px;
    background: rgba(17, 26, 40, 0.85);
    backdrop-filter: blur(15px);
    padding: 30px;
    display: inline-block;
    color: $color-white;
    font-weight: normal;
    &-dash {
      display: flex;
      &__container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 15px;
        padding: 4px 0;
      }
      &__roi {
        display: flex;
        margin-left: 27px;
        padding-top: 7px;
        font-weight: normal;
        &-title {
          opacity: 0.5;
          margin-left: 2px;
          margin-right: 3px;
        }
      }
    }
    &-wallet {
      margin-top: 35px;
      font-weight: normal;
      &-value {
        & > span {
          font-weight: bold;
          margin-left: 3px;
        }
      }
      &-dash {
        font-weight: normal;
        margin-top: 16px;
        &-value {
          margin-right: 3px;
        }
        &-title {
          opacity: 0.5;
        }
      }
    }
    &-today {
      margin-top: 37px;
      display: flex;
      &-wallet {
        &-title {
          opacity: 0.5;
          margin-left: 3px;
        }
      }
      &-increase {
        color: $color-green;
        margin-left: auto;
      }
    }
  }
</style>
