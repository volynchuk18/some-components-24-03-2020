<template>
  <img
    v-if="loading"
    class="loading-icon"
    src="@/assets/img/loading.png"
    alt="loading"
  >
</template>

<script>
export default {
  name: 'LoadingIcon',
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
  .loading-icon {
    animation: rotating 1s linear infinite;
  }
</style>
