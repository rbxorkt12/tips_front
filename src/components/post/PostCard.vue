<template>
    <b-card :title="post.title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 20rem;" footer-tag="footer">
        <b-badge variant="primary" class="mr-1">{{post.post_kind1}}</b-badge>
        <b-badge variant="secondary">{{post.post_kind2}}</b-badge>
        <br>
        <b-row align-v="center" class="text-center">
            <b-col>
                <b-button href="buy" variant="info" class="text-center" @click="buyEvent">Buy</b-button>
            </b-col>
        </b-row>
        <template #footer>
            <em>{{post.cost}}</em>
        </template>
    </b-card>
</template>

<script>
    let url = 'http://127.0.0.1:8000/api/'
    import axios from 'axios'
    export default {
        props: {
            post: {}
        },
        data() {
            return {
                is_bought: null,
                bought: null,
            }
        },
        methods: {
            buyEvent: {
                function () {
                    let requesturl = url + 'post/posts/' + this.post.id + '/buy_post/'
                    axios.get(requesturl).then(
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
            let requesturl = url + 'post/posts' + this.post.id
            axios.get(requesturl).then(
                (res) => {
                    let bought_list = res.data.buying
                    if (bought_list.filters(() => {
                            return true
                            //vuex user로 바꾸기
                        })) {
                        this.is_bought = true
                    } else {
                        this.is_bought = false
                    }
                }
            ).catch(this.is_bought = false)
        }

    }
</script>

<style>

</style>