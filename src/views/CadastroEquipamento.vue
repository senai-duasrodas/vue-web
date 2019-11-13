<template>
    <div>
        <div class="fundoEquipamento">
            <div class="wrapper">
                <div class="cadCard">
                    <div>
                        <advanced-input v-model="inputValues.cracha" :label="'Local Instalação:'" :type="'text'" />
                    </div>
                    <div>
                        <advanced-input v-model="inputValues.cracha" :label="'Equipamento:'" :type="'text'" />
                    </div>
                    <div>
                        <advanced-input v-model="inputValues.cracha" :label="'Equipamento Superior:'" :type="'text'" />
                    </div>
                    <textarea name="descricao" id="descricacaoEquipamento" cols="30" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import advancedInput from '../components/inputs/advanced-input'

export default {
    components: {
        'advanced-input': advancedInput,
  },
  data() {
    return {
      inputValues: {
        setor: '',
        senha: ''
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.fundoEquipamento {
  position: relative;
  width: 100%;
  height: 100%;
  .wrapper {
    flex-direction: column;
    align-items: center;
    .cadCard {
      height: 400px;
      width: 500px;
      display: flex;
      justify-content: center;
      border-radius: 3px;
      background-color: #f8f9fa !important;
    }
  }
}
</style>