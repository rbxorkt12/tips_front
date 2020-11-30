<template>
  <div class="rate">
    <b-card border-variant="info" align="left" class="mx-3 mt-1">
        <template #header>
            <h2>Rate</h2>
        </template>
        <b-form-group id='stars' label="Your star: " label-for='username'><b-form-rating v-model="form.stars" required></b-form-rating></b-form-group>
        <b-form-group id='comment' label="Your Comment: " label-for='comment'><b-form-input v-model="form.comment" type='text'></b-form-input></b-form-group>
        <b-button type="submit" variant="primary" @click="Onsubmit">Submit</b-button>
    </b-card>
</div>  
</template>

<script>
import axios from 'axios'
let server_url = 'http://whale.sparcs.org:44747/api/'
export default {
    data(){
        return {
            form: {
                stars: null,
                comment: null,
            }
        }
    },
    props: ['id'],
    methods: {
        Onsubmit: function () {
            let token = localStorage.getItem('Token')
            let tokenoption = {headers: {Authorization: `${token}`}}
            axios.post(server_url + `post/posts/${this.id}/rate_post/`,this.form,tokenoption).then(
                    (res) => {
                        console.log(res)
                        this.$router.push({name:'listpost'})
                    }
            ).catch(err => console.log(err))}
    }
}
</script>

<style>

</style>