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
      window.location.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 20%;
  min-height: 100vh;
  background-color: #0b0547;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    justify-content: center;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      li {
        list-style: none;
        padding: 30px 0;
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
        gap: 30px;
        li {
          padding: 20px 0;
          a {
            font-size: 20px;
          }
        }
      }
    }
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
          padding: 20px 0;
          a {
            font-size: 15px;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
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