<template>
  <div class="gallery-grid">
    <picture class="center-pic" v-for="(pic, index) in gallerySrc" v-bind:key="index">
      <source :srcset="pic.set" :type="image/webp" />
      <img
        :srcset="gallerySrc.src"
        :type="gallerySrc.format"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    gallerySrc: Object,
  },
};
</script>

<style lang="sass">
</style>