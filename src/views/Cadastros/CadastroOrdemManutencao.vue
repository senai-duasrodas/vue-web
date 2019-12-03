<template>
  <div class="equipmentBackground">
      <form @submit.prevent="registerOrderMaintenance()">
          <div class="cadCard">
            <div><simple-input v-model="inputValues.title" :label="'Título:'" :type="'text'"/></div>
            <div><simple-input v-model="inputValues.summary" :label="'Resumo'" :type="'text'" /></div>
            <div><simple-input v-model="inputValues.description" :label="'Descrição:'" :type="'text'" /></div>
            <div><simple-input v-model="inputValues.plannedStart" :label="'Inicio Planejado:'" :type="'date'" /></div>
            <div><simple-input v-model="inputValues.plannedEnd" :label="'Fim Planejado'" :type="'date'" /></div>
            <div><simple-input v-model="inputValues.requireStop" :label="'Requer Parada'" :type="'text'" /></div>
            <div><simple-input v-model="inputValues.beginData" :label="'Data emissão'" :type="'date'" /></div>
            <div><tranfer-select v-model="inputValues.equipment" :selects="selects" :label="'Equipamento'"/></div>
            <div><simple-input v-model="inputValues.superiorEquipment" :label="'Equipamento Superior:'" :type="'text'"/></div>
            <div><simple-input v-model="inputValues.typeMaintenance" :label="'Tipo Manutenção'" :type="'text'" /></div>
            <div><simple-input v-model="inputValues.sector" :label="'Setor'" :type="'text'" /></div>
            <div><simple-input v-model="inputValues.priority" :label="'Prioridade'" :type="'text'" /></div>
            <div><simple-input v-model="inputValues.stats" :label="'Status'" :type="'text'" /></div>
          </div>
        <div class="qualquer"></div>
        <div class="d-flex justify-content-center m-3">
          <b-button type="submit" value="send" variant="danger">Cadastrar</b-button>
        </div>
      </form>
  </div>
</template>

<script>
import simpleInput from "../../components/inputs/simple-input";
import description from "../../components/inputs/description";
import selectId from "../../components/inputs/tranfer-select";
export default {
  components: {
    "simple-input": simpleInput,
    "tranfer-select": selectId,
    description: description,
  },
  data() {
    return {
      inputValues: {
        title : "",
        summary : "",
        description : "",
        plannedStart : "",
        plannedEnd : "",
        requireStop : true,
        beginData : "",
        equipment : "",
        typeMaintenance : "",
        sector : "",
        priority : "",
        stats : "",
        superiorEquipment : ""
      },
      selects: {
        select: "",
        selects: [
          { 
            value: 1,
            label: "testeEquipamento"
          }
        ]
      }
    };
  },
  methods: {
    registerOrderMaintenance(){
      this.inputValues.equipment = this.selects.select;
      this.inputValues.requireStop = true;
      const token = localStorage.getItem('token')
       fetch(`${this.$apiUrl}/ordem-manutencao`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(this.inputValues)
      }).then(res => res.json())
        .then(json => {
          if (json.statusCode === 404) return this.$swal({
            type: 'error',
            title: `Ops! ${json.err}`,
            confirmButtonColor: '#F34336',
          })
          this.$swal({
            type: 'success',
            title: `Ordem de Serviço cadastrada com Sucesso`,
            confirmButtonColor: '#F34336',
          })
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.equipmentBackground {
  width: 100vw;
  height: 100vh;
  padding:70px;
    .cadCard {
      display:grid;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 4;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-gap: 25px;
      background-color: #f8f9fa !important;
      border-radius: 10px;
      padding:25px;
      align-items: start;
    }
}
@media (max-width: 1250px) 
{
  .equipmentBackground {
    width: 100vw;
    height: 100vh;
    padding:20px;  
  }
}
</style>