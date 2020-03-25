<template>
  <div class="buttons-container">
    <button-big
      @click="$emit('click')"
      v-for="(button, index) in buttons"
      :key="index"
      :background="button.background"
      :border="button.border"
      :color="button.color"
    />
  </div>
</template>

<script>
import ButtonBig from './buttons/ButtonBig.vue';

export default {
  name: 'ButtonsContainer',
  components: { ButtonBig },
  data() {
    return {
      buttons: [
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
    };
  },
};
</script>

<style scoped>
  .buttons-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    grid-gap: 50px;
  }
</style>
