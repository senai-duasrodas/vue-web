<template>
  <div class="root-topbar">
    <div class="container-wrapper">
      <div class="tituloTop">Cadastro</div>
      <div class="name-notification">
        <i class="fas fa-bell"></i>
        <span>|</span>
        <i class="fas fa-user"></i>
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
  }
  i {
    margin: 0px 20px;
    color: rgb(172, 172, 172);
    font-size: 20px;
  }
  hr {
    width: 0px;
    height: 100%;
    border: 1px solid black;
  }
}
</style>
