<template>
  <div id="app">
    <div v-if="routes !== 'login'" class="content">
      <div class="sidebar-content shadow-lg">
        
      </div>

      <div class="wrapper">
        <div class="topbar-content">
          <topbar></topbar>
        </div>

        <div class="router-content">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div v-else class="content justify-content-center align-items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import sidebar from './components/side-bar/sidebar.vue'
import topbar from './components/top-bar/topbarDash.vue'

export default {
  components: {
    // sidebar,
    topbar,
  },

  data(){
    return {
      
    };
  },

  computed: {
    routes() {
      return this.$route.name
    }
  }
}

</script>

<style lang="scss">
body {
  background-color: #f1f1f1 !important;
  box-sizing: border-box;
}

.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .sidebar-content {
    min-width: 20rem;
    background-color: white;
    height: 100%;
  }
  .topbar-content {
    width: 100%;
    padding: 20px;
  }
  .router-content {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 1366px) {
  .content > .sidebar-content {
    min-width: 15rem;
  }
}
</style>
