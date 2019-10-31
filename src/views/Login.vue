<template>
  <div class="conteiner">
    <div class="login-wrapper">
      <div class="d-flex justify-content-center">
        <img src="../assets/Logo_DR.png" class="img-fluid w-50" />
      </div>
      <div :class="{'error' : isfalse}" class="hold-login mt-4 p-4 rounded-lg bg-white shadow-sm">
        <div class="login-text d-flex justify-content-center mb-4">
          <h4>Login</h4>
        </div>

        <div>
          <beauty-input @value="inputValue($event, 'cracha')" :label="'Crachá:'" :type="'text'" />
        </div>
        <div>
          <beauty-input @value="inputValue($event, 'senha')" :label="'Senha:'" :type="'password'" />
        </div>
      </div>
      <div class="d-flex justify-content-center m-3">
        <b-button @click="loginValidation" variant="danger">Acessar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import beauty from '../components/inputs/beauty'

export default {
  components: {
    'beauty-input': beauty,
  },

  data() {
    return {
      loginVModel: [
        { type: 'cracha', value: '' },
        { type: 'senha', value: '' }
      ],
      isfalse: false,
    };
  },

  methods: {
    inputValue($event, model) {
      this.loginVModel.forEach(vmodel => {
        if (vmodel.type === model) vmodel.value = $event
      });
    },

    loginValidation() {
      this.$router.push('/dashboard');
      /*
      console.log(this.loginVModel);
      const teste = 'oi'
      this.$http.post(`${this.$apiUrl}/users ${teste}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.loginVModel
      })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))*/
    },
  },
};
</script>

<style lang="scss">
.conteiner {
  width: 100vw;
  height: 100vh;
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
</style>