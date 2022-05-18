<template>
  <div class="body">
    <div v-if="loading" class="lds-circle"><div></div></div>
    <section v-if="!loading" class="dashboard">
      <SideNav />
      <div class="main">
        <h1>{{username}}</h1>
        <p>{{accountNum}}</p>
        <p>{{balance}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import SideNav from '../components/SideNav.vue'

export default {
    data() {
        return {
            loading: true,
            token: localStorage.getItem("hyperToken"),
            link: process.env.VUE_APP_ENDPOINT,
            accountNum: "",
            username: "",
            balance: "",
        };
    },
    methods: {
        async getDetails() {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${this.token}`,
                }
            };
            // get Details of User
            await axios.get(this.link + "profile", config)
                .then(response => {
                if (response.status == 200) {
                    this.loading = false;
                    let data = response.data;
                    this.username = data.user;
                    this.accountNum = data.account_number;
                    this.balance = data.names[0].balance;
                    console.log(this.username, this.accountNum, this.balance);
                }
                ;
            })
                .catch(err => {
                console.log(err);
            });
        },
    },
    mounted() {
        this.getDetails();
    },
    components: { SideNav }
}
</script>

<style lang="scss" scoped>
.body{
   background-color: #0b0547;
   min-height:100vh;
   width:100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   .lds-circle {
    display: inline-block;
    transform: translateZ(1px);
  }
  .lds-circle > div {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #9F616A;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }

  .dashboard{
    width:100%;
    min-height:100vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
    .main{
      width:70%;
    }
  }

}
</style>