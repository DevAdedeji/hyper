<template>
  <section class="footer">
      <div class="container">
          <div class="hyper">
              <div class="logo">
                  <h1>Hyper</h1>
              </div>
              <p>We operate our banking service all over Nigeria</p>
              <div class="social-handles">
                  <img src="../assets/instagram.png" alt="instagram-logo">
                  <img src="../assets/google.png" alt="google-logo">
                  <img src="../assets/twitter.png" alt="twitter-logo">
                  <img src="../assets/facebook.png" alt="facebook-logo">
              </div>
          </div>
          <div class="links">
              <h2 class="title">Product</h2>
              <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </div>
      </div>
      <footer>
        <p>2022 Hyper Internet Banking &copy; All Rights Reserved</p>
      </footer>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    padding-top:20px;
    position: relative;
    .container{
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 200px;
        .hyper{
            .logo h1{
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                color: #9F616A;
                font-size: 40px;
                padding-bottom: 10px;
            }
            p{
                width: 90%;
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                color: #fff;
                font-size: 20px;
                padding: 10px 0;
                opacity: 0.7;
            }
            .social-handles{
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 0;
                img{
                    background: #112058;
                    width: 10%;
                    padding: 10px;
                    border-radius: 50%;
                }
                img:hover{
                    cursor: pointer;
                }
            }
        }
        .links{
            .title{
                color: #fff;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 30px;
                padding-bottom: 10px;
            }
            ul{
                li{
                    list-style: none;
                    padding: 10px 0;
                    a{
                        text-decoration: none;
                        color: #fff;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 600;
                        font-size: 20px;
                        opacity: 0.7;
                    }
                }
            }
        }
    }
    footer{
        margin-top: 20px;
        width: 100%;
        background: #3F3D56;
        padding: 20px 0;
        text-align: center;
        p{
            color: #fff;
            opacity: 0.7;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 20px;
        }
    }
}

@media (max-width:700px){
    .footer{
        .container{
            flex-direction: column;
            gap: 20px;
            .hyper{
                align-self: flex-start;
                order: 2;
                .social-handles{
                    img{
                        width: 10%;
                    }
                }
            }
            .links{
                order: 1;
                align-self: flex-start;
            }
        }
        footer{
            p{
                font-size: 16px;
            }
        }
    }
}

@media (max-width:400px){
    .footer{
        .container{
            .hyper{
                .social-handles{
                    img{
                        width: 15%;
                    }
                }
            }
        }
    }
}
</style>