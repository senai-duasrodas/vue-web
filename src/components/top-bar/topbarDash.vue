<template>
  <div class="root-topbar">
    <div class="container-wrapper">
      <div class="tituloTop">
        <span>
          {{ $route.name }}
        </span>
      </div>

      <div class="name-notification">
        <i class="fas fa-bell" />
        <span>|</span>
        <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none p-0" no-caret>
          <template v-slot:button-content>
            <i class="fas fa-user" />
          </template>
          <b-dropdown-item href="#">
            <i class="fas fa-id-card-alt" />
            <span>
              Meu perfil
            </span>
          </b-dropdown-item>
          <b-dropdown-item @click="logoff()" toggle-class="red">
            <i class="fas fa-sign-out-alt" />
            <span>
              Sair
            </span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {

    }
  },

  methods: {
    logoff() {
      this.$swal({
        type: 'question',
        title: 'Deseja realmente sair do sistema?',
        showCancelButton: true,
        cancelButtonText: 'Não!',
        confirmButtonText: 'Sim!',
        confirmButtonColor: '#F34336'
      }).then(res => {
        if (res.value) {
          localStorage.removeItem('token');
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>


<style lang="scss">
.root-topbar {
  width: 100%;
  height: 65px;
  padding: 20px;
  background: #ffff;
  border-radius: 42px;
  .container-wrapper {
    display: flex;
    justify-content: space-between;
    .tituloTop {
      margin: 0 10px;
      span {
        font-size: 20px;
        font-family: 'Montserrat';
        color: #979797
      }
    }
    .name-notification {
      display: flex;
      align-items: center;
      .fa-user {
        &:hover {
          transform: scale(1.2);
        }
        &:active {
          transform: scale(1);
        }
      }
      .dropdown-item {
        align-items: center;
        i {
          margin: 0px !important;
        }
        &:active {
          background-color: #ec4d4d !important;
          i {
            color: white;
          }
        }
      }
    }
  }
  i {
    margin: 0px 20px;
    color: #acacac;
    font-size: 20px;
  }
}
</style>
