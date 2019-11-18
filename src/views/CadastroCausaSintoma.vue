<template>
  <div class="root-cadastro-causa-view">
    <div class="wrapper p-3 bg-white;">

    </div>
  </div>
</template>

<script>
import simpleInput from '../components/inputs/simple-input';

export default {
  components: {
    'simple-input': simpleInput,
  },

  data: () => {

  },

  methods: {
    registerCause() {

    },

    registerSymptom() {

    },
  }
}
</script>

<style lang="scss" scoped>
.root-cadastro-causa-view {
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 70%;
  }
}
</style>