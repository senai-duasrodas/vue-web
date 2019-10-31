<template>
    <div class="dashboard">
        <div class="bg-light border-right sidebar-wrapper shadow">
            <div class="sidebar-heading">
                <img src="../../assets/logo 1.png" class="img-fluid">
                <h2 class="titulo">Smart Solution</h2>
            </div>
            <nav class="list-group list-group-flush">
                <ul>
                    <li v-for="(route, index) in dashboard" :key="`route-${index}`">
                        <router-link class="list-group-item list-group-item-action" :to="route.link ? route.link : '/'">{{route.name}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import dashboard from '../../utils/dashboard-module.js'

export default {
    data(){
        return {
            dashboard
        }
    },
    mounted: function() {
        console.log(dashboard);
    },
}
</script>
<style lang="scss" scoped>
    .sidebar-wrapper {
        width: 15rem;
        height: 100vh;
    }
    .sidebar-wrapper {
        .sidebar-heading {
            padding: 0.875rem 1.25rem;
            font-size: 1.2rem;
        }
    }
    .list-group, .sidebar-heading {
        width:13rem;
        li{
            list-style-type: none;
            a{
                border-radius:6px;
                background-color:#f8f9fa !important;
            }
            a:hover{
                background-color:red !important;
                color:#f8f9fa;
            }
        }
    }
    .titulo{
        
    }
    .list-group-item{
        border:none;
        display: flex;
        justify-content: center;
    }
</style>