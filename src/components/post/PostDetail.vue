<template>
    <div class="PostDetail">
    <b-card
        border-variant="primary"
        :header="post.title"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        :sub-title="'user'+post.author+' Write'"
        class='mx-3'
      >
    <b-card-text>{{post.content}}</b-card-text>
    <b-button @click="Onsubmit" variant='danger'>Delete</b-button>
    </b-card>
    <PostRating :id="id" :comments="post.comment_list" ></PostRating>
    </div>
</template>

<script>
import axios from 'axios'
import PostRating from './PostRating'
let server_url ='http://127.0.0.1:8000/api';

export default {
    components: {
        PostRating
    },
    props: ['id'],
    data() {
        return {
            post: null,
        }
    },
    created: function() {
        axios.get(`${server_url}/post/posts/${this.id}/`).then(
            (res)=> {
                this.post = res.data
                console.log(this.post)
            }).catch(err=> console.log(err))
    },
    methods: {
        Onsubmit: function () {
            console.log(this.form)
            var buy_want = confirm('Do you really want delete post?')
            if (buy_want === true){
            axios.delete(server_url + `/post/posts/${this.id}/`).then(
                    (res) => {
                        console.log(res)
                    }
            ).catch(err => console.log(err))}}
    }
}
</script>

<style>

</style>