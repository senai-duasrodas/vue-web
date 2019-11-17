<template>
  <div class="container p-2">
    <div>
      <label>{{ label }}</label>
    </div>
    <div class="d-flex">
      <textarea
        v-model="value"
        :cols="cols"
        :rows="rows"
        @keyup="sendValue"
        class="custom-input w-100 p-2 rounded"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: () => '' },
    cols: { type: String, default: () => '' },
    rows: { type: String, default: () => '' }
  },

  data() {
    return {
      value: ''
    }
  },

  methods: {
    sendValue() {
      this.$emit('value', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
}

.custom-input {
  border: 0;
  background-color: #eeeeee;
}
</style>