<template>
    <div class="Post_make">
    <b-card border-variant="info" align="left" class="mx-3 mt-3">
        <template #header>
            <h2>Post Make</h2>
        </template>
        <b-form-group id='title' label="Your title: " label-for='title'><b-form-input v-model="form.title" type='text' required></b-form-input></b-form-group>
        <b-form-group id='content' label="Your Content: " label-for='content'><b-form-input v-model="form.content" type='text' required></b-form-input></b-form-group>
        <b-form-group id='kind1' label="POST KIND1: " label-for='kind1'><b-form-select v-model="form.post_kind1" :options="option_1" required></b-form-select></b-form-group>
        <b-form-group id='kind2' label="POST KIND2: " label-for='kind2'><b-form-select v-model="form.post_kind2" :options="option_2" required></b-form-select></b-form-group>
        <b-form-group id='cost' :label="'COST: '+ form.cost" label-for='cost'><b-form-input v-model="form.cost" type="range" min="0" max="1000" required></b-form-input></b-form-group>
        
        <br>
        <b-button type="submit" variant="primary" @click="Onsubmit">Submit</b-button>
    </b-card>
    </div>  
</template>


<script>
import axios from 'axios'
let server_url = 'http://whale.sparcs.org:44747/api/'
export default {
    data() {
        return {
            form : {
                title : null,
                content : null,
                post_kind1 : null,
                post_kind2 : null,
                cost : 500,
                author: null,
            },
            option_1: [
            { value: 'U', text: 'Undergraduated' },
            { value: 'G', text: 'Graduated' }
            ],
            option_2: [
            { value: 'EE', text: 'KAIST EE' },
            { value: 'ETC', text: 'ETC' }
            ]
        }
    },
    methods: {
        Onsubmit: function () {
            let token = localStorage.getItem('Token')
            let tokenoption = {headers: {Authorization: `${token}`}}    
            axios.get(`${server_url}auth/user/`,tokenoption).then(
                (res)=> {
                    this.form.author = res.data.id
                }
            ).catch(()=>{this.bought_list = null})
            axios.post(server_url + `post/posts/`,this.form,tokenoption).then(
                    (res) => {
                        console.log(res)
                        this.$router.push({name: 'listpost'})
                    }
            ).catch(err => console.log(err))}
    }
}
</script>

<style>

</style>