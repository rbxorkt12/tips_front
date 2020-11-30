<template>
    <b-card :title="post.title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 15rem;" footer-tag="footer">
        <b-badge variant="primary" class="mr-1">{{post.post_kind1}}</b-badge>
        <b-badge variant="secondary">{{post.post_kind2}}</b-badge>
        <br>
        <b-row align-v="center" class="text-center">
            <b-col>
                <b-button :href="post.id" variant="info" class="text-center" v-if='bought' >Detail</b-button>
                <b-button variant="info" class="text-center" @click="buyEvent" v-else >Buy</b-button>
            </b-col>
        </b-row>
        <template #footer>
            <b-badge class='float-right' variant="success">{{post.cost}}</b-badge>
            <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
            {{post.rating_average}}
        </template>
    </b-card>
</template>

<script>
let token = localStorage.getItem('Token')
let tokenoption = {headers: {Authorization: `${token}`}}
let url = 'http://127.0.0.1:8000/api/'
import axios from 'axios'
    export default {
        props: {
            post: {},
            bought_list: {}
        },
        data() {
            return {
                bought: null,
            }
        },
        methods: {
            buyEvent: 
                function () {
                    var buy_want = confirm('Do you want to buy this post?')
                    if (buy_want === true) {
                        axios.get(url + 'post/posts/' + this.post.id + '/buy_post/',tokenoption).then(
                            () => {
                                this.bought = true
                            }
                        ).catch(() => {
                            this.bought = true
                        })
                    }
                }

            
        },
        mounted: function () {
            if (this.bought_list.includes(this.post.id)){
                this.bought = true;
            }
            else {
                this.bought = false;
            }
        }

    }
</script>

<style>

</style>