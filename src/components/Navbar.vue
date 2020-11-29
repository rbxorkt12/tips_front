<template>
  <div class="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
        <b-navbar-brand href="#" class="pr-10" >
            <img src="../assets/logo.png" width="70px" alt='logo'>
        </b-navbar-brand>
        <b-navbar-brand ref="#" class="pr-10 mr-5" ><h3 style="font-family: San-Serif">Tips Project</h3></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
            <b-nav-item href="posts">
                <h2>Post</h2>
            </b-nav-item>
            <b-nav-item :disabled="!login" href="buyings">
                <h2>Buyings</h2>
            </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown v-bind:text="nickname" right v-if="login">
                <b-dropdown-item>Credit : {{credit}}</b-dropdown-item>
                <b-dropdown-item href="profle">Profile</b-dropdown-item>
                <b-dropdown-item href="buyings">Buyings</b-dropdown-item>
                <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="User" right v-else>  
                <b-dropdown-item href="login">Log In</b-dropdown-item>
                <b-dropdown-item href="signup">Sign Up</b-dropdown-item>               
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import axios from 'axios'
let url = 'http://127.0.0.1:8000/api/'
export default {
    data: () => {
        return {
            login: false,
            nickname: null,
            credit: null, 
        }
    },
    methods: {
        logout: function (event) {
            axios.post(url + 'auth/logout/',this.form).then(
                    (res) => {
                        console.log('remove token')
                        localStorage.removeItem('Token')
                    }
            ).catch(err => console.log(err))}
    },
    mounted: function() {
        let userurl = url + 'auth/user/'
        let token = localStorage.getItem('Token')
        axios.get(userurl,{headers: {Authorization: `Token ${token}`}}).then(
            (res) => {
                this.nickname = res.username
                this.login = true
                userurl = url + 'auth/profile/'
                axios.get(userurl).then(
                    (res) => {
                        this.credit = res.credit
                    }

                ).catch(this.credit = 'error')
            }
        ).catch(this.login = false)
    },
}
</script>

<style>
</style>