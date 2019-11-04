<template>
  <div class="root-cadastro-view">
    <div class="content-geral">
      <div class="menu-items">
        <sidebar />
      </div>
      <div class="content">
        <card />
      </div>
    </div>
  </div>
</template>

<script>

import sidebar from '../components/side-bar/sidebar.vue'
import card from '../components/card/card-option.vue'

export default {
  components: {
    sidebar,
    card
  }
}
</script>

<style lang="scss">
.root-cadastro-view {
  .menu-items {
    width: 17%;
    float: left;
  }

  .content {
    position: relative;
    width: 83%;
    float: left;
  }

  .content-geral {
    width: 100%;
    height: 100%;
  }

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
