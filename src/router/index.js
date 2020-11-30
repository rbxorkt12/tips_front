import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Profile from '../components/Profile.vue'
import PostList from '../components/post/PostList.vue'
import PostDetail from '../components/post/PostDetail.vue'
import BuyingList from '../components/buying/BuyingList.vue'
import PostMake from '../components/post/PostMake.vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        { path :'/', component: Navbar, name: "home",
        children: [
            {path: "login", component: Login, name: "login"},
            {path: "signup", component: Signup, name: "signup"},
            {path: "profile", component: Profile, name: "profile"},
            {path: "post", component: PostList, name: "listpost"},
            {path: "buying", component: BuyingList, name: "buyinglist"},
            {path: 'post/:id', component: PostDetail, name: "postDetail", props: true},
            {path: 'make', component : PostMake, name: "postmake"}
        ]
        }
    ]
})