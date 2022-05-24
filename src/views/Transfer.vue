<template>
  <div class="main">
    <SideNav />
    <div class="con">
      <div class="menubar">
        <p>Hyper</p>
        <img src="../assets/icon-hamburger.svg" @click="toggleMenu" />
      </div>
      <form @submit.prevent="transfer">
        <div class="title">Transfer money using only recipient's username</div>
        <div class="username">
          <label for="Username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div class="amount">
          <label for="Amount">Amount:</label>
          <input type="tel" v-model="amount" required />
        </div>
        <div class="reason">
          <label for="Reason">Reason:</label>
          <textarea cols="30" rows="5" v-model="reason"></textarea>
        </div>
        <p class="error" v-show="error.length > 0">{{ error }}</p>
        <button type="submit" ref="btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      reason: "",
      amount: "",
      error: "",
      token: localStorage.getItem("hyperToken"),
    };
  },
  components: { SideNav },
  methods: {
    transfer() {
      this.$refs.btn.textContent = "Sending...";
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.token}`,
        },
      };
      let details = {
        amount: `${this.amount}`,
        reason: `${this.reason}`,
        tags: `${this.username}`,
      };
      axios
        .post(process.env.VUE_APP_ENDPOINT + "trans", details, config)
        .then((response) => {
          console.log(response);
          this.$refs.btn.textContent = "Submit";
        })
        .catch((err) => {
          console.log(err);
          this.$refs.btn.textContent = "Submit";
        });
    },
    toggleMenu() {
      document.getElementById("HyperMenu").classList.toggle("show");
    },
  },
  created() {
    document.title = "Transfer Money || Hyper";
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #0b0547;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .con {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
    .menubar {
      padding: 20px;
      align-self: flex-end;
      display: none;
    }
    form {
      .title {
        text-align: center;
        padding-bottom: 20px;
      }
      margin-top: 20px;
      width: 40%;
      margin: 0 auto;
      border: 1px solid #fff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        input,
        textarea {
          padding: 10px;
          background: transparent;
          border-radius: 5px;
          border: 1px solid #fff;
          outline: none;
          color: #e0e0e0;
          font-size: 18px;
        }
      }
      button {
        outline: none;
        border: none;
        padding: 15px;
        background-color: #2e6ae9;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}

@media (max-width: 600px) {
  .main {
    height: 95vh;
    .con {
      padding-top: 0;
      .menubar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          cursor: pointer;
        }
        p {
          color: #9f616a;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 20px;
        }
      }
      form {
        width: 90%;
      }
    }
  }
}
</style>