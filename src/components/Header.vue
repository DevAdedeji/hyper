<template>
    <section class="hero-header">
        <header>
          <div class="logo">
              <h1>Hyper</h1>
          </div>
          <nav class="first-nav">
              <ul>
                  <li class="active">
                      <a href="/">Home</a>
                  </li>
                   <li>
                      <a href="/dashboard">Dashboard</a>
                  </li>
                   <li>
                      <a href="#about">About</a>
                  </li>
                   <li>
                      <a href="#">FAQ</a>
                  </li>
              </ul>
          </nav>
          <nav class="second-nav">
              <ul>
                  <li>
                      <a href="/login" id="signin">sign in</a>
                  </li>
                   <li>
                      <a href="/register" id="signup">sign up</a>
                  </li>
              </ul>
          </nav>
          <img src="../assets/icon-hamburger.svg" id="hamburgerBtn" @click="toggleMenu">
        </header>
        <div class="mobileMenu" ref="mobileMenu">
          <ul>
              <li><a href="/" class="active">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#">FAQ</a></li>
              <br>
              <li><a href="/login" id="signin">sign in</a></li>
              <br>
              <li><a href="/register" id="signup">sign up</a></li>
              <br>
          </ul>
      </div>
      <hr>
      <div class="hero">
          <div class="hero-asset">
                <div class="outer"> 
                    <div class="inner">
                        <div class="inner-inner">
                            <div class="inner-most"></div>
                        </div>
                    </div> 
                </div>
                <img src="../assets/Mastercard.png" alt="">
          </div>
          <div class="hero-text">
              <h2>Stronger <span>Banking,</span> Greater Service</h2>
              <p>Send and receive money instantly to anyone with a phone number, email address or bank account.</p>
              <div class="links">
                  <a href="/register" id="start">Start Transaction</a>
                  <a href="#about" class="about">About Us</a>
              </div>
          </div>
      </div>
    </section>
</template>

<script>

export default {
    methods:{
        toggleMenu(){
            this.$refs.mobileMenu.classList.toggle('show')
        }
    }
}
</script>

<style lang="scss" scoped>

.hero-header{
    position: relative;
    header{
        width: 90%;
        margin: 0 auto;
        height: 12vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            h1{
                color:#9F616A;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 40px;
            }
        }
        .first-nav{
            font-family: 'Poppins', sans-serif;
            ul{
                display: flex;
                align-items: center;
                justify-content: center;
                li{
                    list-style: none;
                    padding: 0 20px;
                    a{
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: 400;
                        color: #fff;
                        opacity: 0.7;
                    }
                    a:hover{
                        opacity: 1;
                    }
                }
                .active{
                    a{
                        color: #fff;
                        font-weight: 600;
                    }
                }
            }
        }
        .second-nav{
            ul{
                display: flex;
                align-items: center;
                li{
                    list-style: none;
                    padding: 0 20px;
                    text-transform: uppercase;
                    font-family: 'Poppins',sans-serif;
                    font-weight: 600;
                    font-size: 16px;
                    #signin{
                        text-decoration: none;
                        color: #fff;
                        border: 1px solid #2E6AE9;
                        padding: 10px 20px;
                        border-radius: 10px;
                        position: relative;
                    }
                    #signin::before{
                        content: '';
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        opacity: 0.1;
                        position: absolute;
                        top:-30px;
                        left: -50px;
                        background: #AE487C;
                    }
                    #signin:hover{
                        background-color: #2E6AE9;
                        border: none;
                    }
                    #signup{
                        text-decoration: none;
                        color: #fff;
                        background-color: #3975F2;
                        padding: 10px 20px;
                        border-radius: 10px;
                    }
                    #signup:hover{
                        border: 1px solid #2E6AE9;
                        background: transparent;
                    }
                }
            }
        }
        #hamburgerBtn{
            display: none;
        }
    }
    hr{
        width: 80%;
        margin: 0 auto;
        border: none;
        border-bottom: 1px solid #4D457B;
    }
    .hero{
        width: 90%;
        margin: 0 auto;
        height: 78vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hero-asset{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .outer{
                width: 90%;
                height: 90%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                .inner{
                    filter: blur(1rem);
                    opacity: 0.2;
                    width: 400px;
                    height: 400px;
                    border-radius: 50%;
                    margin: 0 auto;
                    background: #3837BF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .inner-inner{
                    width: 350px;
                    height: 350px;
                    border-radius: 50%;
                    margin: 0 auto;
                    background: #2A28AD;
                    display: flex;
                    align-items: center;
                    justify-content: center;     
                    .inner-most{
                        width: 300px;
                        height: 300px;
                        border-radius: 50%;
                        margin: 0 auto;
                        background: #863C81;
                    }           
                }
            }
        }   
        img{
            width: 45%;
            position: absolute;
            top: 10%;
            left: 10%;
        }    
    }
        .hero-text{
            width: 50%;
            height: 100%;
            padding-left: 20px;
            border-left: 1px solid #4D457B;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2{
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 58px;
                color: #fff;
                line-height: 75px;
                span{
                    color:#AE487C;
                }
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 18px;
                color: #fff;
                opacity: 0.7;
                line-height: 28px;
                padding-top: 20px;
            }
            .links{
                padding-top: 20px;
                display: flex;
                align-items: flex-start;
                gap: 50px;
                a{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 20px;
                }
                #start{
                    text-decoration: none;
                    color: #fff;
                    background-color: #3975F2;
                    padding: 10px 20px;
                    border-radius: 10px;
                }
                .about{
                    text-decoration: none;
                    color: #fff;
                    border: 1px solid #2E6AE9;
                    padding: 10px 20px;
                    border-radius: 10px;
                }
            }
        }
    }
    .mobileMenu{
        display: none;
    }
}

@media (max-width:1100px){
    .hero-header{
        .hero{
            .hero-asset{
                .outer{
                    .inner{
                        width: 300px;
                        height: 300px;
                        .inner-inner{
                            width: 250px;
                            height: 250px;
                            .inner-most{
                                width: 200px;
                                height: 200px;
                            }
                        }
                    }
                }
                img{
                    top: 20%;
                }
            }
            .hero-text{
                h2{
                    font-size: 48px;
                }
            }
        }
    }
}

@media (max-width:890px){
    .hero-header{
        header{
            .logo h1{
                font-size: 30px;
            }
            .first-nav, .second-nav{
                display: none;
            }
            #hamburgerBtn{
                display: block;
                cursor: pointer;
            }
        }
        .mobileMenu{
            display: block;
            position: absolute;
            top: 12vh;
            transform: translateY(-150%);
            background: #112058;
            width: 100%;
            z-index: 500;
            transition: all 0.5s ease-in-out;
            ul{
                width: 90%;
                margin: 0 auto;
                li{
                    list-style: none;
                    padding: 10px 0;
                    a{
                        text-decoration: none;
                        font-family: 'Poppins', sans-serif;
                        font-size: 18px;
                        color: #fff;
                        opacity: 0.7;
                    }
                    a:hover{
                        opacity: 1;
                    }
                    a.active{
                        opacity: 1;
                    }
                    #signin{
                        opacity: 1;
                        text-transform: uppercase;
                        text-decoration: none;
                        color: #fff;
                        border: 1px solid #2E6AE9;
                        padding: 10px 20px;
                        border-radius: 10px;
                        position: relative;
                    }
                    #signup{
                        opacity: 1;
                        text-transform: uppercase;
                        text-decoration: none;
                        color: #fff;
                        background-color: #3975F2;
                        padding: 10px 20px;
                        border-radius: 10px;
                    }
                }
            }
        }
        .mobileMenu.show{
            transform: translateY(0%);
        }
        .hero{
            width: 100%;
            margin: 0 auto;
            height: 150vh;
            flex-direction: column;
            .hero-asset{
                padding-top: 20px;
                width: 100%;
                .outer{
                    .inner{
                        width: 400px;
                        height: 400px;
                        .inner-inner{
                            width: 350px;
                            height: 350px;
                            .inner-most{
                                width: 300px;
                                height: 300px;
                            }
                        }
                    }
                }
                img{
                    width: 70%;
                    top: 10%;
                    left: 30%;
                }
            }
            .hero-text{
                width: 100%;
                border-left:none;
                padding-left: none;
                justify-self: flex-start;
                .links{
                    gap: 20px;
                    a{
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

@media (max-width:700px){
    .hero-header{
        .hero{
            .hero-asset{
                padding-top: 0 !important;
                .outer{
                    .inner{
                        width: 300px;
                        height: 300px;
                        opacity: 0.5;
                        .inner-inner{
                            width: 250px;
                            height: 250px;
                            .inner-most{
                                width: 200px;
                                height: 200px;
                            }
                        }
                    }
                }
                img{
                    top:10%;
                    width: 70%;
                    left: 20%;
                }
            }
        }
    }
}

@media (max-width:600px){
    .hero-header{
        .hero{
            .hero-asset{
                img{
                    width: 80%;
                }
            }
        }
    }
}

@media (max-width:500px){
    .hero-header{
        .hero{
            .hero-asset{
                img{
                    width: 100%;
                    top: 10%;
                    left: 5%;
                }
            }
            .hero-text{
                h2{
                    font-size: 40px;
                }
                .links{
                    #start, .about{
                        font-size: 16px;
                        padding: 15px 15px;
                    }
                }
            }
        }
    }
}

@media (max-width:400px){
    .hero-header{
        .hero{
            height: 70vh;
            .hero-asset{
                display: none;
            }
            .hero-text{
                h2{
                    font-size: 35px;
                }
            }
        }
    }
}
</style>