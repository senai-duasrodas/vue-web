<template>
  <div>
    <div class="equipmentBackground">
      <div class="wrapper">
        <div class="cadCard">
          <div class="inputs">
            <simple-input v-model="inputValues.sector" :label="'Nome:'" :type="'text'" />
          </div>
          <div class="sideInput">
            <div class="inputsSidePosition">
              <simple-input v-model="inputValues.equipment" :label="'Equipamento:'" :type="'text'" />
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
      </div>
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
  }
};
</script>

<style lang="scss" scoped>
.equipmentBackground {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 3%;
  .wrapper {
    flex-direction: column;
    align-items: center;
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
        padding-left: 3.5%;
        padding-right: 3.5%;
        width: 50%;
      }
    }
  }
}
</style>