<template>
  <div class="root-cadastro-causa-view">
    <div class="register-select p-3">
      <span>O que deseja cadastrar?</span>
      <custom-select v-model="selectValue" :selectOptions="['Causa', 'Sintoma']"></custom-select>
    </div>

    <transition name="slide-fade" mode="out-in">
      <div v-if="selectValue === 'Causa'" class="syntom-cause-wrapper">
        <form @submit.prevent="registerCause">
          <div class="Cause p-4 bg-white mt-4">
            <simple-input
              label="Digite aqui a causa do defeito: "
              type="text"
              v-model="cause"
            />
          </div>
          <div class="d-flex justify-content-center m-3">
            <save-button label="Cadastrar" />
          </div>
        </form>
      </div>
    </transition>

    <transition name="slide-fade" mode="out-in">
      <div v-if="selectValue === 'Sintoma'" class="syntom-cause-wrapper">
        <form @submit.prevent="registerSymptom">
          <div class="Cause p-4 bg-white mt-4">
            <simple-input
              label="Digite aqui o sintoma do defeito: "
              type="text"
              v-model="symptom"
            />
          </div>
          <div class="d-flex justify-content-center m-3">
            <save-button label="Cadastrar" />
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { getLocalStorageToken } from '../../utils/utils'
import simpleInput from '../../components/inputs/simple-input';
import select from '../../components/inputs/custom-select'
import saveButton from '../../components/button/save-button'

export default {
  components: {
    'simple-input': simpleInput,
    'custom-select': select,
    'save-button': saveButton,
  },

  data: () => ({
    selectValue: '',
    cause: '',
    symptom: '',
  }),


  methods: {
    registerCause() {
      console.log(this.cause);
      this.$http.methodPost('causa-sintoma/causa', getLocalStorageToken(), {causa: this.cause})
        .then(res => {
          if (res.status !== 200) return this.$swal({
            type: 'error',
            title: `Ops! ${res.err}`,
            confirmButtonColor: '#F34336',
          })
          this.$swal({
            type: 'success',
            title: res.result,
            confirmButtonColor: '#F34336',
          })
        })
    },

    registerSymptom() {
      this.$http.methodPost('causa-sintoma/sintoma', getLocalStorageToken(), {sintoma: this.symptom })
        .then(res => {
          if (res.status !== 200) return this.$swal({
            type: 'error',
            title: `Ops! ${res.err}`,
            confirmButtonColor: '#F34336',
          })
          this.$swal({
            type: 'success',
            title: res.result,
            confirmButtonColor: '#F34336',
          })
        })
    },
  }
}
</script>

<style lang="scss" scoped>
.root-cadastro-causa-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .register-select {
    span {
      color: var(--duas-rodas);
      font-family: 'Montserrat'
    }
  }
  .syntom-cause-wrapper {
    width: 60% !important;
  }
}
</style>