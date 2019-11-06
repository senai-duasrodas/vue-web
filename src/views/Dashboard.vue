<template>
  <div class="root-dashboard-view">
    <div class="content-geral">
      <div class="menu-items">
        <sidebar />
      </div>
    </div>
    
  </div>
</template>

<script>

import sidebar from '../components/side-bar/sidebar.vue'


export default {
  components: {
    sidebar
  }
}
</script>

<style lang="scss">
.root-dashboard-view {
  .slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
