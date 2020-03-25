<template>
  <div class="buttons">
    <div class="buttons-container">
      <custom-button
        size="big"
        v-for="(button, index) in buttonsBig"
        :key="index"
        :background="button.background"
        :border="button.border"
        :color="button.color"
      />
    </div>
    <div class="buttons-container">
      <custom-button
        v-for="(button, index) in buttonsNormal"
        :key="index"
        :background="button.background"
        :border="button.border"
        :color="button.color"
        :textTransform="button.textTransform"
        :textDecoration="button.textDecoration"
        :symbol="button.symbol"
      />
    </div>
    <div class="buttons-container">
      <custom-button
        size="small"
        v-for="(button, index) in buttonsSmall"
        :key="index"
        :background="button.background"
        :border="button.border"
        :color="button.color"
        :textTransform="button.textTransform"
        :textDecoration="button.textDecoration"
        :symbol="button.symbol"
      />
    </div>
    <loading-icon class="loading-icon" :loading="true" />
  </div>
</template>

<script>
import CustomButton from './buttons/CustomButton.vue';
import LoadingIcon from './LoadingIcon.vue';

export default {
  name: 'ButtonsContainer',
  components: { LoadingIcon, CustomButton },
  data() {
    return {
      buttonsBig: [
        {
          background: '#005BE9',
        },
        {
          background: '#0049BA',
        },
        {
          background: '#003484',
        },
        {
          border: '3px solid #005BE9',
          color: '#005BE9',
        },
        {
          background: '#005BE9',
        },
        {
          background: '#0049BA',
        },
        {
          background: '#FFFFFF',
          color: '#000000',
        },
        {
          background: '#EBEDF1',
          color: '#000000',
        },
        {
          background: '#CCCCD1',
          color: '#000000',
        },
        {
          border: '3px solid #E14726',
          color: '#E14726',
        },
        {
          background: '#E14726',
        },
        {
          background: '#E13126',
        },
        {
          background: 'rgba(0, 91, 233, 0.91)',
          border: '3px solid #FFFFFF',
        },
        {
          background: '#0049BA',
          border: '3px solid #FFFFFF',
        },
        {
          background: '#003484',
          border: '3px solid #FFFFFF',
        },
        {
          background: 'rgba(255, 255, 255, 0.07)',
          color: 'rgba(255, 255, 255, 0.22)',
        },
        {
          background: '#E4E4EA',
          color: '#A3A3A3',
        },
      ],
      buttonsNormal: [
        {
          background: '#005BE9',
        },
        {
          background: '#0049BA',
        },
        {
          background: '#003484',
        },
        {
          border: '2px solid #005BE9',
          color: '#005BE9',
        },
        {
          background: '#005BE9',
        },
        {
          background: '#0049BA',
        },
        {
          background: '#EBEDF1',
          color: '#005BE9',
        },
        {
          background: '#EBEDF1',
          color: '#005BE9',
        },
        {
          background: '#CCCCD1',
          color: '#005BE9',
        },
        {
          border: '2px solid #E14726',
          color: '#E14726',
        },
        {
          background: '#E14726',
        },
        {
          background: '#E13126',
        },
      ],
      buttonsSmall: [
        {
          color: '#005BE9',
          textTransform: 'capitalize',
        },
        {
          color: '#0049BA',
          textTransform: 'capitalize',
        },
        {
          color: '#003484',
          textTransform: 'capitalize',
        },
        {
          color: '#005BE9',
        },
        {
          color: '#0049BA',
          textDecoration: 'underline',
        },
        {
          color: '#003484',
          textDecoration: 'underline',
        },
        {
          textTransform: 'capitalize',
        },
        {
          color: '#005BE9',
          textTransform: 'capitalize',
        },
        {
          color: '#0049BA',
          textTransform: 'capitalize',
        },
        {
          color: '#FFFFFF',
        },
        {
          color: '#005BE9',
          textDecoration: 'underline',
        },
        {
          color: '#0049BA',
          textDecoration: 'underline',
        },
        {
          color: '#FFFFFF',
          symbol: true,
        },
        {
          color: '#005BE9',
          symbol: true,
        },
        {
          color: '#005BE9',
          symbol: true,
        },
        {
          color: '#CCCCD1',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .buttons-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    grid-gap: 50px;
  }
  .loading-icon {
    margin-top: 50px;
  }
</style>
