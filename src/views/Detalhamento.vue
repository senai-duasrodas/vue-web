<template>
  <div class="root-detalhamento-view">
    <div class="w-100 bg-white p-4">
      {{resumo}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resumo: { type: String, default: '' }
  },

  data: () => ({

  }),

  mounted() {
    console.log(this.resumo);

    console.log(this.$attrs);
  }
}
</script>

<style lang="scss" scoped>
.root-detalhamento-view {
  width: 80vw;
}
</style>