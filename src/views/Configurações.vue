<template>
  <div class="root-configuracoes-view">
    <div class="w-75 p-3">

      <div class="label-text">
        <span class="text-muted">Usuários</span>
      </div>

      <div class="accordion-container mb-3">
        <accordion title="Gerenciar usuário" icon="fas fa-user-edit">

          <template v-if="!isEditing">
            <div class="accordion-content bg-white mt-3 p-4">
                <table class="w-100" cellspacing="0">
                  <thead class="table-head">
                    <tr>
                      <th>Nome</th>
                      <th>Crachá</th>
                      <th>E-mail</th>
                      <th>Nível de acesso</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody class="table-body">
                    <tr v-for="(user, index) in users" :key="`user-${index}`">
                      <td>{{ user.nome }}</td>
                      <td>{{ user.numeroCracha }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.nivelAcesso }}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
            </div>

          </template>

          <template v-if="isEditing">
            <form @submit.prevent="updateUser">
              <div class="accordion-content bg-white mt-3 p-3 d-flex flex-wrap">
                <div class="p-2 m-2 w-25">
                  <simples-input v-model="userInputValues.nome" label="Nome" type="text"></simples-input>
                </div>
                <div class="p-2 m-2 w-25">
                  <simples-input v-model="userInputValues.cracha" label="Cracha" type="number"></simples-input>
                </div>
                <!-- <div class="p-2 m-2 w-25">
                  <simples-input v-model="funcao" label="Função" type="text"></simples-input>
                </div> -->
                <div class="p-2 m-2 w-25">
                  <simples-input v-model="userInputValues.nivelAcesso" label="Nível de acesso" type="number"></simples-input>
                </div>
                <div class="p-2 m-2 w-25">
                  <simples-input v-model="userInputValues.email" label="E-mail" type="email"></simples-input>
                </div>
                <div class="p-2 m-2 w-25">
                  <simples-input v-model="userInputValues.senha" label="Senha" type="password"></simples-input>
                </div>
              </div>
              <div class="save">
                <save-button label="Cadastrar" />
              </div>
            </form>
          </template>

        </accordion>
      </div>

      <div class="accordion-container mb-3">
        <accordion title="Cadastrar usuário" icon="fas fa-user">
          <form @submit.prevent="register">
            <div class="accordion-content bg-white mt-3 p-3 d-flex flex-wrap">
              <div class="p-2 m-2 w-25">
                <simples-input v-model="userInputValues.nome" label="Nome" type="text"></simples-input>
              </div>
              <div class="p-2 m-2 w-25">
                <simples-input v-model="userInputValues.cracha" label="Cracha" type="number"></simples-input>
              </div>
              <!-- <div class="p-2 m-2 w-25">
                <simples-input v-model="funcao" label="Função" type="text"></simples-input>
              </div> -->
              <div class="p-2 m-2 w-25">
                <simples-input v-model="userInputValues.nivelAcesso" label="Nível de acesso" type="number"></simples-input>
              </div>
              <div class="p-2 m-2 w-25">
                <simples-input v-model="userInputValues.email" label="E-mail" type="email"></simples-input>
              </div>
              <div class="p-2 m-2 w-25">
                <simples-input v-model="userInputValues.senha" label="Senha" type="password"></simples-input>
              </div>
            </div>
            <div class="save">
              <save-button label="Cadastrar" />
            </div>
          </form>
        </accordion>
      </div>

    </div>
  </div>
</template>

<script>
import accordion from '../components/accordion/accordion';
import simpleInput from '../components/inputs/simple-input';
import saveButton from '../components/button/save-button';
import table from '../components/table/table';

export default {
  components: {
    accordion,
    'simples-input': simpleInput,
    'save-button': saveButton,
    'custom-table': table,
  },

  data() {
    return {
      token: '',
      userInputValues: {
        nome: '',
        cracha: '',
        // funcao: '',
        email: '',
        senha: '',  
        nivelAcesso: ''
      },
      users: [],
      isEditing: false,
    };
  },

  mounted() {
    this.token = localStorage.getItem('token')
    this.getUsers()
    console.log(this.users);
  },

  methods: {
    getUsers() {
      console.log('hereee');
      fetch(`${this.$apiUrl}/users/get`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${this.token}`
        },
      }).then(res => res.json())
        .then(json => {
          if (json.query.length === 0) this.$swal({
            type: 'warning',
            title: 'Não foi encontrado nenhum usuário cadastro!',
            confirmButtonColor: '#F34336',
          })
          json.query.forEach(i => this.users.push(i))
        })
    },

    register() {
      fetch(`${this.$apiUrl}/users/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify(this.userInputValues)
      }).then(res => res.json())
        .then(async json => {
          console.log(json);
          if (json.statusCode === 404) return this.$swal({
            type: 'error',
            title: `Ops! ${json.err}`,
            confirmButtonColor: '#F34336',
          })
          this.$swal({
            type: 'success',
            title: `${json.msg}`,
            confirmButtonColor: '#F34336',
          })
        })
    },

    updateUser() {

    }
  },
}
</script>

<style lang="scss" scoped>
.root-configuracoes-view {
  display: flex;
  justify-content: center;
  align-items: center;
  .label-text {
    span {
      font-family: 'Montserrat';
      font-size: 20px;
    }
  }
  .accordion-content {
    border-radius: 10px;
    table {
      overflow:hidden;
      border-collapse:separate;
      border-radius: 10px;
    }
    .table-head {
      background-color: var(--duas-rodas);
      color: white;
      th {
        padding: 20px;
      }
    }
    .table-body {
      td {
        padding: 20px;
      }
    }
  }
}
</style>