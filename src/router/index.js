import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Profile from '../components/Profile.vue'
import Listpost from '../components/Listpost.vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        { path :'/', component: Navbar, name: "home",
        children: [
            {path: "login", component: Login, name: "login"},
            {path: "signup", component: Signup, name: "signup"},
            {path: "profile", component: Profile, name: "profile"},
            {path: "post", component: Listpost, name: "listpost"}
        ]
        }
    ]
})