<template>
  <section>
    <div class="register-page">
      <div class="register-asset">
        <img
          src="../assets/undraw_mobile_payments_re_7udl.png"
          alt="register-image"
        />
        <p>
          Enjoy a smooth and stress-free money transfer experience across all
          your devices
        </p>
      </div>
      <div class="register-form">
        <h1 class="title">Hyper</h1>

        <form id="form" @submit.prevent="logIn">
          <h2>Login to Your Account</h2>
          <p>Continue from where you left it!</p>

          <div class="form-container">
            <div class="username">
              <label for="username">Your Username * </label>
              <input
                type="text"
                id="username"
                placeholder="Enter Your Username"
                ref="username"
                v-model="userInfo.username"
                required
              />
            </div>

            <div class="password">
              <label for="password">Your Password *</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                ref="password"
                v-model="userInfo.password"
                required
              />
            </div>

            <p class="error" ref="errorMsg">
              Please enter the correct username and password
            </p>
            <br />
            <button type="submit">
              <p v-show="signInText">Sign In</p>
              <div class="sk-chase" v-show="currentlyLoading">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
              </div>
            </button>
            <p>Don’t have an account? <a href="/register">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
    <footer>
      <div class="circle"></div>
      <br />
      <br />
      <p>&copy; 2022 Hyper</p>
      <br />
    </footer>
    <button @click="gotoLoginPage">Goto</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      signInText: true,
      currentlyLoading: false,
    };
  },
  methods: {
    logIn() {
      this.signInText = false;
      this.currentlyLoading = true;
      this.$store
        .dispatch("post", {
          endpoint: "token",
          details: this.userInfo,
        })
        .then((response) => {
          if (response.data.profile_empty === true) {
            this.$router.push("/Create_Profile");
          } else {
            const user_token = response.data.token;
            localStorage.setItem("hyperToken", user_token);
            this.$router.push("/profile");
          }
        })
        .catch((error) => {
          if (error) {
            document.querySelector(".error").style.display = "block";
            this.userInfo.username = "";
            this.userInfo.password = "";
            this.currentlyLoading = false;
            this.signInText = true;
            setTimeout(() => {
              document.querySelector(".error").style.display = "none";
            }, 2000);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.register-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .register-asset {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img {
      width: 60%;
    }
    p {
      width: 80%;
      margin: 0 auto;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.015em;
      color: #3f3d56;
      opacity: 0.7;
    }
  }
  .register-form {
    z-index: 500;
    min-height: 100vh;
    width: 50%;
    background-color: #0b0547;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      padding: 20px 0;
      text-align: center;
      color: #9f616a;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 37px;
      letter-spacing: 0.02em;
      display: none;
    }
    form {
      border: 1px solid #dfe0eb;
      border-radius: 5px;
      padding: 30px 30px;
      margin: 50px 0;
      h2 {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        letter-spacing: 0.3px;
        color: #ffffff;
      }
      p {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.3px;
        color: rgba(255, 255, 255, 0.6);
      }
      .form-container {
        padding: 20px 0;
        .error {
          color: red;
          display: none;
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 10px 0;
          label {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.6);
          }
          input {
            border: 1px solid;
            border-radius: 2px;
            outline: none;
            color: #fff;
            background: transparent;
            padding: 10px 5px;
          }
          input::placeholder {
            color: #ffffff;
            opacity: 0.4;
          }
        }
        button {
          border: none;
          outline: none;
          width: 100%;
          padding: 5px 0;
          background: #2e6ae9;
          color: #fff;
          border-radius: 2px;
          text-transform: uppercase;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p {
            color: #fff;
          }
          .sk-chase {
            width: 20px;
            height: 30px;
            position: relative;
            animation: sk-chase 2.5s infinite linear both;
            .sk-chase-dot {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              animation: sk-chase-dot 2s infinite ease-in-out both;
            }
          }

          .sk-chase-dot:before {
            content: "";
            display: block;
            width: 25%;
            height: 25%;
            background-color: #fff;
            border-radius: 100%;
            animation: sk-chase-dot-before 2s infinite ease-in-out both;
          }

          .sk-chase-dot:nth-child(1) {
            animation-delay: -1.1s;
          }
          .sk-chase-dot:nth-child(2) {
            animation-delay: -1s;
          }
          .sk-chase-dot:nth-child(3) {
            animation-delay: -0.9s;
          }
          .sk-chase-dot:nth-child(4) {
            animation-delay: -0.8s;
          }
          .sk-chase-dot:nth-child(5) {
            animation-delay: -0.7s;
          }
          .sk-chase-dot:nth-child(6) {
            animation-delay: -0.6s;
          }
          .sk-chase-dot:nth-child(1):before {
            animation-delay: -1.1s;
          }
          .sk-chase-dot:nth-child(2):before {
            animation-delay: -1s;
          }
          .sk-chase-dot:nth-child(3):before {
            animation-delay: -0.9s;
          }
          .sk-chase-dot:nth-child(4):before {
            animation-delay: -0.8s;
          }
          .sk-chase-dot:nth-child(5):before {
            animation-delay: -0.7s;
          }
          .sk-chase-dot:nth-child(6):before {
            animation-delay: -0.6s;
          }

          @keyframes sk-chase {
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes sk-chase-dot {
            80%,
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes sk-chase-dot-before {
            50% {
              transform: scale(0.4);
            }
            100%,
            0% {
              transform: scale(1);
            }
          }
        }
        button:hover {
          opacity: 0.8;
        }
        p {
          padding: 10px 0;
        }
      }
    }
  }
}

footer {
  display: none;
}

@media (max-width: 900px) {
  .register-page {
    .register-asset {
      display: none;
    }
    .register-form {
      width: 100%;
      .title {
        display: block;
      }
      form {
        margin: 30px 0;
      }
    }
  }
  footer {
    display: block;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .circle {
      z-index: 100;
      position: absolute;
      top: -140%;
      bottom: 0;
      background-color: #0b0547;
      width: 90%;
      height: 100px;
      border-radius: 40%;
    }
    p {
      z-index: 500;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      color: #3f3d56;
    }
  }
}

@media (max-width: 600px) {
  .register-page {
    .register-form {
      .title {
        padding: 10px 0;
      }
      form {
        width: 100%;
        border: none;
        margin: 0;
        .form-container {
          div {
            input {
              padding: 15px 5px;
            }
          }
          button {
            padding: 15px 0;
          }
        }
      }
    }
  }
}
</style>
