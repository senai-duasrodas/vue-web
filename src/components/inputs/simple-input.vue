<template>
  <div class="container p-2">
    <div>
      <label>{{ label }}</label>
    </div>
    <div class="d-flex">
      <input
        v-model="value"
        @keyup="sendValue"
        class="custom-input w-100 p-2 rounded"
        :type="type"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: () => '' },
    type: { type: String, default: () => '' },
    placeholder: { type: String, default: () => '' },
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