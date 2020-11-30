<template>
  <div class="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
        <b-navbar-brand link="#" class="pr-10" >
            <img src="../assets/logo.png" width="70px" alt='logo'>
        </b-navbar-brand>
        <b-navbar-brand ref="#" class="pr-10 mr-5" ><h3 style="font-family: San-Serif">Tips Project</h3></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
            <b-nav-item :to="{name: 'listpost'}">
                <h2>Post</h2>
            </b-nav-item>
            <b-nav-item disabled >
                <h2>Disabled</h2>
            </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown v-bind:text="username" right v-if="login">
                <b-dropdown-item>Credit : {{credit}}</b-dropdown-item>
                <b-dropdown-item :to="{name: 'profile'}">Profile</b-dropdown-item>
                <b-dropdown-item :to="{name: 'buyinglist'}">Buyings</b-dropdown-item>
                <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="User" right v-else>  
                <b-dropdown-item :to="{name: 'login'}">Log In</b-dropdown-item>
                <b-dropdown-item :to="{name: 'signup'}">Sign Up</b-dropdown-item>               
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
let url = 'http://127.0.0.1:8000/api/'
export default {
    data: () => {
        return {
            login: false,
            username: null,
            credit: null, 
        }
    },
    methods: {
        logout: function () {
            axios.post(url + 'auth/logout/',this.form).then(
                    () => {
                        localStorage.removeItem('Token')
                        this.$router.push('listpost')
                    }
            ).catch(err => console.log(err))}
    },
    mounted: function() {
        let userurl = url + 'auth/user/'
        let token = localStorage.getItem('Token')
        let tokenoption = {headers: {Authorization: `${token}`}}
        axios.get(userurl,tokenoption).then(
            (res) => {
                console.log(res)
                this.username = res.data.username
                this.login = true
                userurl = url + 'auth/profile/'
                axios.get(userurl,tokenoption).then(
                    (res) => {
                        this.credit = res.data.credit
                    }

                ).catch(this.credit = 'error')
            }
        ).catch(this.login = false)
    },
}
</script>

<style>
</style>