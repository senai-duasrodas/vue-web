<template>
  <div class="equipmentBackground">
    <div class="wrapper">
      <form @submit.prevent="registerEquipment()" class="formPosition">
        <div class="cadCard">
          <div class="inputs">
            <simple-input v-model="inputValues.summary" :label="'Resumo'" :type="'text'" />
          </div>
          <div class="sideInput">
            <div class="inputsSidePosition">
              <simple-input v-model="inputValues.description" :label="'Descrição:'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
              <simple-input v-model="inputValues.plannedStart" :label="'Inicio Planejado:'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
              <simple-input v-model="inputValues.plannedEnd" :label="'Fim Planejado'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.requireStop" :label="'Requer Parada'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.beginData" :label="'Data emissão'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.requireStop" :label="'Equipamento'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.typeMaintenance" :label="'Tipo Manutenção'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.sector" :label="'Setor'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.priority" :label="'Prioridade'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
                <simple-input v-model="inputValues.stats" :label="'Status'" :type="'text'" />
            </div>
            <div class="inputsSidePosition">
              <simple-input
                v-model="inputValues.superiorEquipment"
                :label="'Equipamento Superior:'"
                :type="'text'"
              />
            </div>
          </div>
          <div class="textAreaDescription">
            <!--<div><textarea name="descricao" id="descricacaoEquipamento" cols="59" rows="3"></textarea></div>-->
            <description
              v-model="inputValues.description"
              :cols="1"
              :rows="3"
              :label="'Descrição:'"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center m-3">
          <b-button type="submit" value="send" variant="danger">Cadastrar</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import simpleInput from "../components/inputs/simple-input";
import description from "../components/inputs/description";

export default {
  components: {
    "simple-input": simpleInput,
    description: description
  },
  data() {
    return {
      inputValues: {
        sector: "",
        equipment: "",
        superiorEquipment: "",
        description: ""
      }
    };
  },
  methods: {
    registerEquipment(){
      const token = localStorage.getItem('token')
       fetch(`${this.$apiUrl}/equipamento`, {
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
            title: `${json.response}`,
            confirmButtonColor: '#F34336',
          })
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.equipmentBackground {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 3%;
  .wrapper {
    .formPosition{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:100%;
    .cadCard {
      padding-top: 2%;
      height: 23rem;
      width: 60%;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: #f8f9fa !important;
      .inputs {
        padding-left: 3.5%;
        padding-right: 3.5%;
      }
      .textAreaDescription {
        box-sizing: border-box;
        padding-left: 4%;
        padding-right: 4%;
      }
    }
    .sideInput {
      display: flex;
      align-self: center;
      width: 100%;
      .inputsSidePosition {
        width: 50%;
      }
    }
    }
  }
}
</style>