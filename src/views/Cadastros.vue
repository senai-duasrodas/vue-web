<template>
  <div class="root-cadastro-view">
    <div class="content-geral">
      <div class="menu-items">
        <sidebar />
      </div>
      <div class="top-bar">
        <topbar/>
      </div>
      <div class="contentCard">
        <card-input title="Ordem de Manutenção" icon="fas fa-pencil-alt" />
        <card-input title="Centro de Custo" icon="fas fa-pencil-alt" />
        <card-input title="Equipamento" icon="fas fa-pencil-alt" />
      </div>
      <div class="contentCard">
        <card-input title="Componentes" icon="fas fa-pencil-alt" />
        <card-input title="Causa e defeitos" icon="fas fa-pencil-alt" />
        <card-input title="EPI" icon="fas fa-pencil-alt" />
      </div>
    </div>
  </div>
</template>

<script>

import sidebar from '../components/side-bar/sidebar.vue'
import card from '../components/card/card-option.vue'
import topbar from '../components/top-bar/topbarDash.vue'

export default {
  components: {
    sidebar,
    topbar,
    'card-input': card
  }
}
</script>

<style lang="scss">
.root-cadastro-view {
  .content-geral{
    .top-bar{
      margin-top:10px;
    }
    .menu-items{
      margin-top:-10px;
    }
  }
  .menu-items {
    width: 17%;
    float: left;
    margin-right:20px ;
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
