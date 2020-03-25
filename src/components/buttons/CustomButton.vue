<template>
  <div
    @click="$emit('click')"
    class="button-container"
    :style="{'color': color}"
  >
    <button
      @submit="$emit('submit')"
      class="custom-button"
      :class="buttonClass"
      :style="[
      {'background': background},
      {'border': border},
      {'textDecoration': textDecoration},
      {'textTransform': textTransform}
    ]"
    >
      {{ title }}
    </button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      v-if="symbol"
    >
      <path
        d="M10.1302
        9.35635V10.129H1.86981V1.86971H4.07799H4.17799V1.76971V1V0.9H4.07799H1.97325C1.6299
        0.9 1.35611 0.982179 1.16915 1.16911C0.982192 1.35605 0.9 1.62981 0.9 1.97313V10.116C0.9
        10.4591 0.982218 10.7148 1.17459 10.8805C1.36336 11.0431 1.63698 11.1
        1.97325 11.1H10.018C10.3543 11.1 10.6297 11.0431 10.8205 10.8809C11.0152 10.7155 11.1
        10.4599 11.1 10.116V7.9224V7.8224H11H10.2302H10.1302V7.9224V9.35635ZM11.1 1V0.9H11
        H6H5.9V1V1.76971V1.86971H6H9.37462L4.00603 7.23641L3.93529 7.30712L4.00602 7.37785L4.62137
        7.99312L4.69208 8.06381L4.76278 7.99312L10.1302 2.62638V6.20956V6.30956H10.2302
        H11H11.1V6.20956V1Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    background: {
      type: String,
      default: 'transparent',
    },
    border: {
      type: String,
      default: 'none',
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    textDecoration: {
      type: String,
      default: 'unset',
    },
    textTransform: {
      type: String,
      default: 'unset',
    },
    symbol: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return `custom-button-${this.size}`;
    },
    title() {
      switch (this.size) {
        case 'big':
          return 'BTN BIG';
        case 'small':
          return 'Button';
        default:
          return 'BUTTON';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/fonts.scss';

  .button-container {
    display: flex;
    align-items: center;
  }

  .custom-button {
    color: inherit;
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    &-big {
      @extend .custom-button;
      width: 225px;
      height: 64px;
      font-size: 16px;
    }
    &-normal {
      @extend .custom-button;
      width: 167px;
      height: 50px;
      font-size: 12px;
    }
    &-small {
      &:focus {
        outline: 1px solid inherit;
        outline-offset: 10px;
      }
    }
  }
</style>
