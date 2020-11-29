<template>
    <div class="SignUp">
         <b-card border-variant="info" align="left" style="max-width:60rem" class="mx-auto mt-5">
            <template #header>
                <h2>Sign Up</h2>
            </template>
            <b-form-group id='username' label="Your ID: " label-for='username'>
                <b-form-input v-model="form.username" type='text' placeholder="Enter your ID" required></b-form-input>
            </b-form-group>
            <b-form-group id='password' label="Your Password: " label-for='password'>
                <b-form-input v-model="form.password" type='password' placeholder="Enter your Password" required>
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" @click="Onsubmit">Submit</b-button>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios'
    let url = '127.0.0.1:8000/api/'
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            Onsubmit: function () {
                axios.post(url + 'auth/register/', this.form).then(
                    (res) => {
                        localStorage.setItem('Token', res.token)
                    }
                ).catch(err => console.log(err))
            }
        }

    }
</script>

<style>

</style>