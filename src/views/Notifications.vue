<template>
  <section>
    <div v-if="loading" class="lds-circle"><div></div></div>
    <main v-if="!loading">
      <SideNav />
      <div class="main">
        <div class="menubar">
          <img src="../assets/icon-hamburger.svg" alt="" @click="toggleMenu" />
        </div>
        <div class="title">
          <h1>All Transactions</h1>
        </div>

        <!-- Transactions container -->
        <div>
          <div class="transactions" v-for="(item, index) in data" :key="index">
            <!-- Credit -->
            <div class="transaction">
              <div class="close">
                <!-- Transaction type icon -->
                <div
                  class="icon-container"
                  :class="username === item.send ? 'debit' : 'credit'"
                ></div>
                <!-- Receiver/Sender -->
                <div class="user">
                  <p>
                    {{ username === item.send ? "To" : "From" }}
                    {{ username === item.send ? item.receive : item.send }}
                  </p>
                  <p>{{ item.date_added }}</p>
                </div>
              </div>
              <!-- Transaction Details -->
              <div class="details">
                <p class="amount">₦{{ item.amount.toLocaleString() }}</p>
                <p
                  class="type"
                  :class="username === item.send ? 'debit' : 'credit'"
                >
                  {{ username === item.send ? "Debit" : "Credit" }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import axios from "axios";
import SideNav from "../components/SideNav.vue";
export default {
  data() {
    return {
      token: localStorage.getItem("hyperToken"),
      link: process.env.VUE_APP_ENDPOINT,
      username: localStorage.getItem("hyperUser"),
      data: null,
      transactionType: null,
      loading: true,
    };
  },
  methods: {
    async getNotifications() {
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.token}`,
        },
      };
      await axios
        .get(this.link + "notify", config)
        .then((response) => {
          if (response.status === 200) {
            this.loading = false;
            this.data = response.data;
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
  components: { SideNav },
  beforeMount() {
    this.getNotifications();
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0547;
  min-height: 100vh;
  main {
    width: 100%;
  }
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
  .main {
    width: 80%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    .menubar {
      display: none;
    }
    .title {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        color: white;
        font-size: 30px;
      }
      a {
        color: #c63449;
      }
    }
    .transactions {
      width: 90%;
      margin: 0 auto;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .transaction {
        background: #3c3c95;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .close {
          display: flex;
          align-items: center;
          gap: 10px;
          .icon-container {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 30px;
              height: 30px;
            }
          }
          .icon-container.credit {
            background-color: #c6f8d6;
            background-image: url("../assets/in.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 30px 30px;
          }
          .icon-container.debit {
            background-color: #fedbdb;
            background-image: url("../assets/out.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 30px 30px;
          }
          .user {
            color: #fff;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: #fff;
        }
      }
    }
  }
}

.credit {
  color: #33b557;
  text-align: right;
  font-weight: 600;
}
.debit {
  color: #fc1616;
  text-align: right;
  font-weight: 600;
}

@media (max-width: 810px) {
  section {
    width: 100%;
    padding: 0;
    .main {
      width: 90%;
      margin: 0 auto;
      .menubar {
        display: block;
        width: 100%;
        display: flex;
        padding: 20px 0;
        cursor: pointer;
        img {
          margin-left: auto;
        }
      }

      .transactions,
      .title {
        width: 100%;
      }
    }
    .title {
      h1 {
        font-size: 20px;
      }
    }
    p {
      font-size: 14px;
    }
  }
}
</style>