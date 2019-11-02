<template>
    <div class="card-option">
        <div class="card-wrapper">
            <div class="icon-card">
                <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="text-card">
                <span>Ordem de Manutenção</span>    
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .card-option{
        position: relative;
        background-color:#09f;
        width:300px;
        height:200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border:3px solid black;
        .card-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
            div {
                margin: 10px;
            }
        }
    }
    .icon-card{
    }
</style>