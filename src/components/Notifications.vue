<template>
  <section>
    <div class="title">
      <h1>Recent Transactions</h1>
      <!-- <a href="/notifications">See All</a> -->
    </div>
    <!-- Transactions container -->
    <div class="transactions" v-for="(item, index) in data" :key="index">
      <!-- Credit -->
      <div class="transaction">
        <div class="close">
          <!-- Transaction type icon -->
          <div
            class="icon-container credit"
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
          <p class="type" :class="username === item.send ? 'debit' : 'credit'">
            {{ username === item.send ? "Debit" : "Credit" }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: localStorage.getItem("hyperToken"),
      link: process.env.VUE_APP_ENDPOINT,
      username: localStorage.getItem("hyperUser"),
      data: null,
      transactionType: null,
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
            let newData = response.data;
            this.data = newData.slice(0, 5);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getNotifications();
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 90%;
  padding: 40px 0;
  .title {
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

.credit {
  color: #33b557;

  font-weight: 600;
}
.debit {
  color: #fc1616;

  font-weight: 600;
}

@media (max-width: 600px) {
  section {
    width: 100%;
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