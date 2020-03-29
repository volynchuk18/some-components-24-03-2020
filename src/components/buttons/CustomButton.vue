<template>
  <div
    @click="$emit('click')"
    class="button-container"
  >
    <button
      @submit="$emit('submit')"
      class="custom-button"
      :class="type"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: String,
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
    transition-property: color, background-color;
    transition-duration: .1s;
    font-size: 16px;
    border: none;
    @extend .big;
  }

  .big {
    width: 225px;
    height: 64px;
  }

  .small {
    width: 167px;
    height: 50px;
  }

  .hover-underline:hover {
    text-decoration: underline;
  }

  .primary {
    color: white;
    background: rgb(0, 91, 233);
    border: none;
    &:hover {
      background: rgb(0, 73, 186);
    }
    &:active {
      background: rgb(0, 52, 132);
    }
    &-empty {
      background: transparent;
      color: #005BE9;
      border: 3px solid #005BE9;
      &:hover {
        color: #FFFFFF;
        background: #005BE9;
      }
      &:active {
        border: 3px solid #0049BA;
        background: #0049BA;
      }
    }
  }
  .light {
    color: #000000;
    background: white;
    &:hover {
      background: #EBEDF1;
    }
    &:active {
      background: #CCCCD1;
    }
  }

  .warning {
    &-empty {
      @extend .warning;
      color: #E14726;
      background-color: transparent;
      border: 3px solid #E14726;
      &:hover {
        color: white;
        background: #E14726;
      }
      &:active {
        background: #E13126;
      }
    }
  }

  .transparent {
    @extend .big;
    border: 3px solid #FFFFFF;
    color: #FFFFFF;
    background: transparent;
    &:hover {
      color: white;
      background: rgba(0, 0, 0, 0.2);
    }
    &:active {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .simple {
    width: unset;
    height: unset;
    background: transparent;
    color: #005BE9;
    &:hover {
      color: #0049BA;
    }
    &:active {
      color: #003484;
    }
  }

  .color-switch {
    color: #FFFFFF;
    &:hover {
      color: #005BE9;
    }
    &:active {
      color: #0049BA;
    }
  }
</style>
