<template>
  <div class="root-table-componenet w-100">
    <div class="table-container p-3">
      <!-- <div class="table-head">
        <table class="w-100">
          <thead>
            <tr>
              <template v-for="(head, index) in headers">
                <th :key="`head-${index}`" :style="`width: ${head.size}`">{{ head.name }}</th>
              </template>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-body">
        <table class="w-100">
          <tbody>
            <tr v-for="(content, index) in contents" :key="`content-${index}`">
              <td :style="`width: ${headers[index].size}`">{{ content.nome }}</td>
              <td :style="`width: ${headers[index].size}`">{{ content.numeroCracha }}</td>
              <td :style="`width: ${headers[index].size}`">{{ content.email }}</td>
              <td :style="`width: ${headers[index].size}`">{{ content.nivelAcesso }}</td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <div v-for="(content, index) in contents" :key="`content-${index}`">
        {{  }}
      </div> 
      <!-- <div v-for="(content, index) in contents" :key="`content-${index}`">
        <span>{{content.nome}}</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: { type: Array, default: () => [] },
    headers: { type: Array, default: () => [] }
  },

  data: () => ({

  }),

}
</script>

<style lang="scss" scoped>
.root-table-componenet {
  .table-container {
    background-color: red;
    .table-head {
      background-color: green;
    }
    .table-body {
      background-color: yellow;
    }
  }
}
</style>