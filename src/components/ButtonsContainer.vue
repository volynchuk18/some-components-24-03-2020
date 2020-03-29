<template>
  <div class="buttons">
    <div class="buttons-container">
      <custom-button
        v-for="button in buttons"
        :key="button"
        :type="button"
      >
        Button
      </custom-button>
      <custom-button type="simple hover-underline">
        Button
        <icon-link />
      </custom-button>
    </div>
    <loading-icon class="loading-icon" :loading="true" />
  </div>
</template>

<script>
import CustomButton from './buttons/CustomButton.vue';
import LoadingIcon from './LoadingIcon.vue';
import IconLink from './icons/IconLink.vue';

export default {
  name: 'ButtonsContainer',
  components: { IconLink, LoadingIcon, CustomButton },
  data() {
    return {
      buttons: [
        'primary big',
        'primary-empty big',
        'light big',
        'transparent big',
        'warning-empty big',
        'primary small',
        'primary-empty small',
        'light small',
        'transparent small',
        'warning-empty small',
        'simple',
        'simple hover-underline',
        'simple color-switch',
        'simple color-switch hover-underline',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
  .buttons-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    grid-gap: 50px;
    overflow: hidden;
  }
  .loading-icon {
    margin-top: 50px;
  }
</style>
