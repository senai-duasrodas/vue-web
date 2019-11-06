<template>
    <div class="rectangle">
        <div class="topBar">
            <div class="tituloTop">
                <h2>Cadastros</h2>
            </div>
            <div class="user-notification">
                <i class="fas fa-bell"></i>
                <span>|</span>
                <i class="fas fa-user"></i>
                <span></span>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    props: {

    },
    data(){
        return {
            
        }
    }
}
</script>


<style lang="scss">
.rectangle {
  width: 800px;
  height: 65px;
  padding: 20px;
  background: #FFFF;
  border-radius: 42px;
  div {
    display: flex;
    align-items: center;
  }
  i {
    margin: 0px 20px;
    color: 	rgb(172, 172, 172);
    font-size: 20px;
  }
  hr {
    width: 0px;
    height: 100%;
    border: 1px solid black;
  }
}
.retangulo {
  width: 800px;
  height: 65px;
  padding: 20px;
  background: #FFFF;
  border-radius: 42px;
  div {
    display: flex;
    align-items: center;
  }
.topBar{
    display: flex;
    .tituloTop{
        display: flex;
        justify-content: flex-start !important;
    }
    .user-notification{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
}

}
</style>