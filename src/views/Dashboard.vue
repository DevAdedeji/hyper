<template>
  <div class="body">
    <div v-if="loading" class="lds-circle"><div></div></div>
    <section v-if="!loading" class="dashboard">
      <SideNav />
      <div class="main">
        <div class="welcome">
          <h2>Welcome {{ username }}</h2>
          <img src="../assets/icon-hamburger.svg" alt="" @click="toggleMenu" />
        </div>
        <div class="card">
          <div class="logo">
            <p>Hyper</p>
            <img src="../assets/mastercard-logo.png" alt="" />
          </div>
          <div class="details">
            <p>Account Balance:</p>
            <p class="bal">₦{{ balance.toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import SideNav from "../components/SideNav.vue";

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
        },
      };
      // get Details of User
      await axios
        .get(this.link + "profile", config)
        .then((response) => {
          if (response.status == 200) {
            this.loading = false;
            let data = response.data;

            this.username = data.user;
            this.accountNum = data.account_number;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get(this.link + "bal", config)
        .then((response) => {
          if (response.status == 200) {
            let data = response.data;
            this.balance = data.balance;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleMenu() {
      document.getElementById("HyperMenu").classList.toggle("show");
    },
  },
  mounted() {
    this.getDetails();
  },
  components: { SideNav },
  created() {
    document.title = "Dashboard || Hyper";
  },
};
</script>

<style lang="scss" scoped>
.body {
  background-color: #0b0547;
  min-height: 100vh;
  width: 100%;
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
    background: #9f616a;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes lds-circle {
    0%,
    100% {
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

  .dashboard {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    position: relative;
    .main {
      width: 70%;
      padding: 20px 0;
      .welcome {
        color: #fff;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          display: none;
        }
      }
      .card {
        width: 40%;
        background-color: #46144c;
        border-radius: 10px;
        padding: 20px;
        .logo {
          color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .details {
          padding-top: 50px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: #fff;
          .bal {
            font-weight: bolder;
          }
        }
      }
    }
  }
}

@media (max-width: 951px) {
  .body {
    .dashboard {
      .main {
        .card {
          width: 90%;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .body {
    width: 100%;
    .dashboard {
      .main {
        width: 90% !important;
        margin: 0 auto;
        .welcome {
          img {
            cursor: pointer;
            display: block !important;
          }
        }
        .card {
          width: 100%;
        }
      }
    }
  }
}
</style>