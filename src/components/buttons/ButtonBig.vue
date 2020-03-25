<template>
  <button
    class="button-big font-size-16"
    :style="[{'background': background}, {'border': border}, {'color': color}]"
  >
    BTN BIG
  </button>
</template>

<script>
export default {
  name: 'ButtonBig',
  props: {
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
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/fonts.scss';

  .button-big {
    color: $color-white;
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 64px;
  }
</style>
