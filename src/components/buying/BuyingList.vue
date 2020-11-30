<template>
<div class="BuylingList">
    <b-card header-tag="header" class="mb-2 mx-3" border-variant="info" align="left">
        <template #header>
            <h2>Buyings</h2>
        </template>
        <div id="buyings">
            <ul v-if="buyings && buyings.length">
                <li v-for="buying of buyings" v-bind:key="buying.id" class="mb-3 mx-4">
                    <BuyingCard v-bind:buying="buying" ></BuyingCard>
                </li>
            </ul>
        </div>
    </b-card>
</div>
</template>

<script>
import axios from 'axios'
import BuyingCard from './BuyingCard'
let url ='http://127.0.0.1:8000/api';
export default {
    components: {
        BuyingCard
    },
    name: 'BuyingList',
    data() {
        return {
            buyings: null,
        }
    },
    methods: {
    },
    mounted: function() {
        let token = localStorage.getItem('Token')
        let tokenoption = {headers: {Authorization: `${token}`}}      
        axios.get(`${url}/post/buyings/own_bought/`,tokenoption).then(
            (res)=> {
                this.bought_list = res.data.post
                console.log(this.bought_list)
            }
        ).catch(()=>{this.bought_list = null})
    },
}
</script>

<style scoped>
</style>