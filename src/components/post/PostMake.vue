<template>
    <div class="Post_make">
    <b-card border-variant="info" align="left" style="max-width:60rem" class="mx-3 mt-3">
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
let server_url = 'http://127.0.0.1/api/'
export default {
    data() {
        return {
            form : {
                title : null,
                content : null,
                post_kind1 : null,
                post_kind2 : null,
                cost : 500,
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
            console.log(this.form)
            axios.post(server_url + `posts/post/`,this.form).then(
                    (res) => {
                        console.log(res)
                    }
            ).catch(err => console.log(err))}
    }
}
</script>

<style>

</style>