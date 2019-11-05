<template>
  <div class="root-cadastro-view">
    <div class="content-geral">
      <div class="menu-items">
        <sidebar />
      </div>
      <div class="contentCard">
        <card-input title="Ordem de Manutenção" icon="fas fa-pencil-alt" />
        <card-input title="Ordem de Manutenção" icon="fas fa-pencil-alt" />
        <card-input title="Ordem de" icon="fas fa-pencil-alt" />
      </div>
      <div class="contentCard">
        <card-input title="Ordem de" icon="fas fa-pencil-alt" />
        <card-input title="Ordem de" icon="fas fa-pencil-alt" />
        <card-input title="Ordem de" icon="fas fa-pencil-alt" />
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
    'card-input': card
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
  .contentCard{
    display:flex;
    justify-content: center;
    padding:20px;
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
