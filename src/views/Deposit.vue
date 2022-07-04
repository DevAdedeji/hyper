<template>
  <div class="main">
    <SideNav />
    <div class="con">
      <div class="menubar">
        <p>Hyper</p>
        <img src="../assets/icon-hamburger.svg" @click="toggleMenu" />
      </div>
      <form @submit.prevent="transfer">
        <div class="title">Deposit money into your account</div>

        <div class="amount">
          <label for="Amount">Amount:</label>
          <input type="tel" v-model="amount" required />
        </div>

        <p class="error" v-show="error.length > 0">{{ error }}</p>
        <button type="submit" ref="btn" :disabled="isDisabled">Submit</button>
      </form>
    </div>
  </div>
  <div class="popup" v-if="successful">
    <div>
      <img src="../assets/close.png" @click="close" />
      <a :href="message" target="_blank" id="payStackLink">{{ message }}</a>
      <button @click="copyUrl" id="copy">Copy URL</button>
    </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue";
import successful from "../components/successful.vue";
import axios from "axios";
export default {
  data() {
    return {
      amount: "",
      error: "",
      link: process.env.VUE_APP_ENDPOINT + "link",
      token: localStorage.getItem("hyperToken"),
      successful: false,
      message: "",
      isDisabled: false,
    };
  },
  components: { SideNav, successful },
  methods: {
    transfer() {
      this.$refs.btn.textContent = "Sending...";
      this.isDisabled = true;
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.token}`,
        },
      };
      let details = {
        amount: `${this.amount}`,
        reason: `${this.reason}`,
        tag: `${this.username}`,
      };

      axios
        .post(this.link, details, config)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            this.successful = true;
            this.message = response.data.message;
          }

          this.amount = "";

          this.$refs.btn.textContent = "Submit";
        })
        .catch((err) => {
          console.log(err);
          this.error = "There is an error in your input";

          this.amount = "";
          this.$refs.btn.textContent = "Submit";
          this.isDisabled = false;
        });
    },
    toggleMenu() {
      document.getElementById("HyperMenu").classList.toggle("show");
    },
    copyUrl() {
      var copyText = document.getElementById("payStackLink").textContent;
      navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById("copy").textContent = "Copied";
      });
    },
    close() {
      this.successful = false;
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
      .eroror {
        color: red;
      }
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

.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background: #fff;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      cursor: pointer;
    }
    a {
      color: #2e6ae9;
    }
    button {
      border: none;
      outline: none;
      background-color: #2e6ae9;
      border-radius: 5px;
      color: #fff;
      padding: 10px;
      cursor: pointer;
    }
  }
}

@media (max-width: 810px) {
  .main {
    min-height: 100vh;
    align-items: flex-start;
    .con {
      padding: 0;
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
        margin: 30px 0;
      }
    }
  }
}
</style>