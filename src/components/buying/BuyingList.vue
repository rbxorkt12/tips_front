<template>
<div class="BuylingList">
    <b-card header-tag="header" class="mb-2 mx-3" border-variant="info" align="left">
        <template #header>
            <h2>Buyings</h2>
        </template>
        <div id="buyings">
            <b-row v-if="buyings && buyings.length">
                <b-col v-for="buying of buyings" v-bind:key="buying.id" class="mb-3 mx-4">
                    <BuyingCard v-bind:buying="buying" ></BuyingCard>
                </b-col>
            </b-row>
        </div>
    </b-card>
</div>
</template>

<script>
import axios from 'axios'
import BuyingCard from './BuyingCard'
let url ='http://whale.sparcs.org:44747/api';
export default {
    components: {
        BuyingCard
    },
    name: 'BuyingList',
    data() {
        return {
            buyings: null,
            user: null,
        }
    },
    methods: {
    },
    created: function() {
        let token = localStorage.getItem('Token')
        let tokenoption = {headers: {Authorization: `${token}`}}      
        axios.get(`${url}/auth/user/`,tokenoption).then(
            (res)=> {
                this.user = res.data.id
            }
        ).catch(()=>{this.bought_list = null})
        axios.get(`${url}/post/buyings/own_bought/`,tokenoption).then(
            (res)=> {
                this.buyings = res.data
                console.log(this.bought_list)
            }
        ).catch(()=>{this.bought_list = null})
    },
}
</script>

<style scoped>
</style>