/<template>
  <div class="Profile">
    <b-card border-variant="info" align="left">
        <template #header>
            <h2>Profile</h2>
        </template>
        <b-form-group id='nickname' label="Your nickname: " label-for='nickname'><b-form-input v-model="form.nickname" type='text' :placeholder="form.nickname" ></b-form-input></b-form-group>      
        <b-form-group id='tel' label="Your tel: " label-for='tel'><b-form-input v-model="form.phone" type='tel' :placeholder="form.phone" ></b-form-input></b-form-group>          
        <b-form-group id='email' label="Your E-mail: " label-for='email'><b-form-input v-model="form.email" type='email' :placeholder="form.phone" ></b-form-input></b-form-group>
        <b-button type="submit" variant="primary" @click="Onsubmit">Submit</b-button>
    </b-card>
</div>
</template>

<script>
import axios from 'axios'
let url = '127.0.0.1:8000/api/'
export default {
    data () {
        return {
            form: {

            }
        }
    },
    mounted: function() {
            axios.get(url + '/auth/profile').then(
                    (res) => {
                        this.form = res.data
                    }
            ).catch(err => console.log(err))      
    },
    methods: {
        Onsubmit: function (event) {
            axios.post(url + 'auth/profile/',this.form).then(
                    (res) => {
                        console.log(res)
                    }
            ).catch(err => console.log(err))}
    }
}
</script>

<style>

</style>