<template>
  <div class="container" id="HyperMenu">
    <div class="title">Hyper</div>
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src="../assets/home.png" />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <img src="../assets/money.png" />
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="/transfer">
            <img src="../assets/money.png" />
            <p>Transfer</p>
          </a>
        </li>
        <li>
          <a href="/deposit">
            <img src="../assets/money.png" />
            <p>Deposit</p>
          </a>
        </li>
        <li>
          <a href="/notifications">
            <img src="../assets/notify.png" />
            <p>Notifications</p>
          </a>
        </li>
        <li>
          <p class="logout" @click="logout">
            <img src="../assets/settings.png" />
            <p>Logout</p>
          </p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("hyperToken");
      localStorage.removeItem("hyperUser");
      window.location.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 20%;
  position: fixed;
  top: 0;
  bottom: 0;
  max-height: 100vh;
  background-color: #0b0547;
  display: flex;
  flex-direction: column;
  border-right: 2px #46144c solid;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  .title {
    color: #9f616a;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    height: 20vh;
    font-size: 40px;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      li {
        list-style: none;
        padding: 25px 0;
        .logout {
          color: #fff;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          img {
            width: 10%;
          }
          cursor: pointer;
        }
        a {
          text-decoration: none;
          gap: 10px;
          img {
            width: 10%;
          }
          color: #fff;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 951px) {
  .container {
    .title {
      font-size: 25px;
    }
    nav {
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        li {
          padding: 20px 0;
          .logout,
          a {
            font-size: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 901px) {
  .container {
    nav {
      ul {
        li {
          .logout,
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media (max-width: 810px) {
  .container {
    display: none;
  }
}

@media (max-width: 651px) {
  .container {
    .title {
      font-size: 25px;
    }
    nav {
      ul {
        gap: 30px;
        li {
          padding: 15px 0;
          .logout p,
          a {
            font-size: 15px;
          }
        }
      }
    }
  }
}
@media (max-width: 810px) {
  .container {
    display: none;
  }
  .container.show {
    width: 50%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>