<template>
    <div class="content-geral">
        <div class="menu-items">
            <sidebar/>
        </div>
        <div class="content">
            <card/>
        </div>
    </div>
</template>

<script>

import sidebar from '../components/side-bar/sidebar.vue'
import card from '../components/card/card-option.vue'

export default {
    components: {
        sidebar,
        card
    }
}
</script>

<style>
    .menu-items{
        width:17%;
        float: left;
    }
    .content{
        position:relative;
        width:83%;
        float: left;
    }
    .content-geral{
        width:100%;
        height:100%;
    }
</style>
