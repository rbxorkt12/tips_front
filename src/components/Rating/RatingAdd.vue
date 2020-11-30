<template>
  <div class="rate">
    <b-card border-variant="info" align="left" style="max-width:60rem" class="mx-auto mt-5">
        <template #header>
            <h2>Rate</h2>
        </template>
        <b-form-group id='stars' label="Your star: " label-for='username'><b-form-rating v-model="form.stars" required></b-form-rating></b-form-group>
        <b-form-group id='comment' label="Your Comment: " label-for='comment'><b-form-input v-model="form.comment" type='text'></b-form-input></b-form-group>
        <br>
        <b-button type="submit" variant="primary" @click="Onsubmit">Submit</b-button>
    </b-card>
</div>  
</template>

<script>
import axios from 'axios'
let server_url = 'http://127.0.0.1:8000/api/'
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
            console.log(this.form)
            axios.post(server_url + `posts/post/${this.id}/rate_post`,this.form).then(
                    (res) => {
                        console.log(res)
                    }
            ).catch(err => console.log(err))}
    }
}
</script>

<style>

</style>