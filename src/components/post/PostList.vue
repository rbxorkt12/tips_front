<template>
<div class="ListTips">
    <b-button :to="{name: 'postmake'}" class='float-left ml-3' :disable='log_in'>Make New Post</b-button>
    <br>
    <br>
    <b-card header-tag="header" class="mb-2 mx-3" border-variant="info" align="left">
        <template #header>
            <h2>Tips</h2>
            <b-row align="right" class="text-center">
                <b-col><b-form-checkbox id='own_post' v-model="own_post" name='own_post' disabled>My post</b-form-checkbox></b-col>
                <b-col><b-form-checkbox id='bought_post' v-model="bought_post" name='bought_post' disabled>Bought post</b-form-checkbox></b-col>
            </b-row>
        </template>
        <div id="list">
            <ul v-if="posts && posts.length">
                <li v-for="post of posts" v-bind:key="post.id" class="mb-3 mx-4">
                    <PostCard v-bind:post="post" v-bind:bought_list="bought_list"></PostCard>
                </li>
            </ul>
        </div>
    </b-card>
</div>
</template>

<script>
import axios from 'axios'
import PostCard from './PostCard'
let url ='http://127.0.0.1:8000/api';
export default {
    components: {
        PostCard,
    },
    name: 'Listpost',
    data() {
        return {
            posts: [],
            own_post : false,
            bought_post: false,
            bought_list: [],
            log_in: false,
        }
    },
    methods: {
    },
    created: function() {
        //구매한 포스팅 확인
        // 모든 포스팅 보기
        axios.get(url + '/post/posts/').then(
                (res) => {
                    console.log(res.data)
                    this.posts = res.data
                }
        ).catch(err => console.log(err))
        // 내가 작성한 포스팅 보기
        let token = localStorage.getItem('Token')
        let tokenoption = {headers: {Authorization: `${token}`}}
        axios.get(`${url}/auth/user/`,tokenoption).then(
            ()=> {        
                this.log_in = true;
                axios.get(`${url}/post/buyings/own_bought/`,tokenoption).then(
                (res)=> {
                    this.bought_list = res.data.map((v) => {return v.post})
                    console.log(this.bought_list)
                }
                ).catch(err => console.log(err))
            if(this.own_post == true && this.bought_post == false){
                axios.get(url + '/post/posts/own_post/',tokenoption).then(
                        (res) => {
                            console.log(res.data)
                            this.posts = res.data
                        }
                ).catch(err => console.log(err))}    
            // 내가 구매한 포스팅 보기        
            if(this.own_post === false && this.bought_post == true){
                axios.get(url + '/post/posts/',tokenoption).then(
                        (res) => {
                            let target = res.data
                            this.post = target.filters( x => {
                                return this.bought_list.includes(x)
                            })
                        }
                ).catch(err => console.log(err))}
            })

        
    },

}
</script>

<style scoped>
    #list ul{
        list-style: none;
    }
    #list li{
        display: inline-block;
    }
</style>