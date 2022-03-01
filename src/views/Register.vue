<template>
  <section>
    <div class="register-page">
    <div class="register-asset">
      <img src="../assets/undraw_transfer_money_rywa.png" alt="register-image">
      <p>Send and Receive money instantly to and from anyone with a phone number, email address or account number.</p>
    </div>
    <div class="register-form">
      <h1 class="title">Hyper</h1>

      <form id="form" @submit="signUp">
        <h2>Register An Account</h2>
        <p>Register To Start Using Hyper</p>

        <div class="form-container">
        <div class="username">
          <label for="username">Your Username * </label>
          <input type="text" id="username" placeholder="Enter Your Username" ref="username" v-model="userInfo.username" required>
        </div>

        <div class="firstName">
          <label for="firstName">Your First Name * </label>
          <input type="text" id="firstName" placeholder="Enter Your First Name"  ref="firstname" v-model="userInfo.firstName" required>
        </div>

        <div class="surname">
          <label for="surname">Your Last Name *</label>
          <input type="text" id="surname" placeholder="Enter Your Surname" ref="surname" v-model="userInfo.surname" required>
        </div>

        <div class="email">
          <label for="email">Email Address *</label>
          <input type="email" id="email" placeholder="Enter Your Email Address" ref="email" v-model="userInfo.email" required>
        </div>

        <div class="password">
          <label for="password">Your Password *</label>
          <input type="password" id="password" placeholder="Enter Your Password" ref="password" v-model="userInfo.password" required>
        </div>

        <div class="confirmPassword">
          <label for="password">Confirm Password *</label>
          <input type="password" id="confirmPassword" placeholder="Enter Password Again" ref="confirmPassword" v-model="userInfo.confirmPassword" required>
        </div>
        <p class="error">Passwords should be the same</p>
        <p class="user-existing" v-show="userExist">A User With The Username Already Exist</p>
        <br>
        <button type="submit"><p v-show="signUpText">Sign Up</p>
          <div class="sk-chase" v-show="currentlyLoading">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        </button>
        <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </form>

    </div>
    </div>
    <footer>
      <div class="circle"></div>
      <br>
      <br>
      <p>&copy; 2022 Hyper</p>
      <br>
    </footer>
    <button @click="gotoLoginPage">Goto</button>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data(){
    return{
      userInfo:{
        username: '',
        firstName: '',
        surname: '',
        email: '', 
        password: ''
      },
    }
  },
  methods:{
    signUp(e){
      e.preventDefault();
      if(this.$refs.password.value === this.$refs.confirmPassword.value){ 
        //The Register function (API Call) 
        this.createUser(this.userInfo)
        this.textLoading = false
        if(this.userRegistration == true){
          this.$router.push('/login')
        }
      }
      else{
        document.querySelector('.error').style.display="block"
        setTimeout(()=>{
            document.querySelector('.error').style.display="none"
        }, 2000)
      }
    },
    ...mapActions(['createUser']),
    gotoLoginPage(){
        this.$router.push('/login');
    },
  },
  computed:{
     ...mapGetters(['userExist', 'currentlyLoading', 'signUpText', 'userRegistration']),
  }
}

</script>

<style lang="scss" scoped>
.register-page{
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .register-asset{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img{
      width: 60%;
    }
    p{
      width: 80%;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.015em;
      color: #3F3D56;
      opacity: 0.7;
    }
  }
  .register-form{
    z-index: 500;
    min-height: 100vh;
    width: 50%;
    background-color: #0B0547;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
      padding: 20px 0;
      text-align: center;
      color: #9F616A;
      font-family: 'Poppins',sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 37px;
      letter-spacing: 0.02em;
      display: none;
    }
    form{
      border: 1px solid #DFE0EB;
      border-radius: 5px;
      padding: 30px 30px;
      margin: 50px 0;
        h2{
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 0.3px;
      color: #FFFFFF;
      }
      p{
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.3px;
      color: rgba(255, 255, 255, 0.6);
      }
      .form-container{
        padding: 20px 0;
        .error{
          color: red;
          display: none;
        }
        .user-existing{
          color:red;
        }
        div{
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 10px 0;
          label{
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.6);
          }
          input{
            border: 1px solid;
            border-radius: 2px;
            outline: none;
            color: #fff;
            background: transparent;
            padding: 10px 5px;
          }
          input::placeholder{
            color: #FFFFFF;
            opacity: 0.4;
          }
        }
        button{
          border: none;
          outline: none;
          width: 100%;
          padding: 5px 0;
          background: #2E6AE9;
          color: #fff;
          border-radius: 2px;
          text-transform: uppercase;
          display:flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p{
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
                animation: sk-chase-dot 2.0s infinite ease-in-out both; 
            }
          }

          .sk-chase-dot:before {
            content: '';
            display: block;
            width: 25%;
            height: 25%;
            background-color: #fff;
            border-radius: 100%;
            animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
        }
        button:hover{
          opacity: 0.8;
        }
        p{
          padding: 10px 0;
        }
      }
    }
  }
}

footer{
  display: none;
}

@media (max-width:900px){
  .register-page{
    .register-asset{
      display: none;
    }
    .register-form{
      width: 100%;
      .title{
        display: block;
      }
      form{
        margin: 30px 0;
      }
    }
  }
  footer{
    display: block;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .circle{
      z-index: 100;
      position: absolute;
      top: -140%;
      bottom: 0;
      background-color: #0B0547;
      width: 90%;
      height: 100px;
      border-radius: 40%;
    }
    p{
      z-index: 500;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      color: #3F3D56;
    }
  }
}

@media (max-width:600px){
  .register-page{
    .register-form{
      .title{
          padding: 10px 0;
        }
      form{
        width: 100%;
        border: none;
        margin: 0;
        .form-container{
          div{
            input{
              padding: 15px 5px;
            }
          }
          button{
              padding: 15px 0;
          }
        }
      }
    }
  }
}
</style>
