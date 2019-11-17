<template>
  <div class="root-login-view">
    <div class="conteiner">
      <div class="login-wrapper">
        <div class="d-flex justify-content-center">
          <img src="../assets/logo.png" class="img-fluid w-50" />
        </div>
        <form @submit.prevent="loginValidation">
          <div class="hold-login mt-4 p-4 rounded-lg bg-white shadow-sm">
            <div class="login-text d-flex justify-content-center mb-4">
              <h4>Login</h4>
            </div>
            <div>
              <advanced-input v-model="inputValues.numeroCracha" :label="'Crachá:'" :type="'text'" />
            </div>
            <div>
              <advanced-input v-model="inputValues.senha" :label="'Senha:'" :type="'password'" />
            </div>
          </div>
          <div class="d-flex justify-content-center m-3">
            <b-button type="submit" value="send" variant="danger">Acessar</b-button>
          </div>
        </form>
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
        numeroCracha: '54321',
        senha: '12345'
      }
    };
  },

  methods: {
    loginValidation() {
      // if (!this.inputValues.cracha && )
      console.log("valores:" + JSON.stringify(this.inputValues))
      fetch(`${this.$apiUrl}/users`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.inputValues)
      }).then(res => res.json())
        .then(async json => {
          if (json.statusCode === 404) return this.$swal({
            type: 'error',
            title: `${json.err.result}`,
          })
          try {
            await this.setTokenLocalStorage(json);

            this.$swal({
              position: 'top',
              type: 'success',
              title: 'Autenticado com sucesso!',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.$router.replace('dashboard')
            });
          } catch (err) {
            this.$swal({
              type: 'error',
              title: `Ocorreu um erro! ${err}`,
            })
          }
        })
        .catch(() => {
          this.$swal({
            type: 'error',
            title: `Algo deu errado! Falha na requisição!`,
          })
        })
    },

    setTokenLocalStorage(token) {      
      return new Promise((resolve, reject) => {
        if (this.$_.isEmpty(token)) reject('Não há nenhum token de autenticação!');
        localStorage.setItem('token', token.token)
        resolve();
      })
    },

    testingDevelopmentRoutes(){
      this.$router.push('dashboard')
    }

  },
};
</script>

<style lang="scss">
.root-login-view {
  .conteiner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-wrapper {
    min-width: 20vw;
    min-height: 100px;
    padding: 10px;
  }

  @media screen and (max-width: 1366px) {
    .login-wrapper {
      min-width: 30vw;
    }
  }

  .login-text {
    h4 {
      color: #777777;
    }
    border-bottom: 1px solid #e4e4e4;
    width: 100%;
  }
}

</style>