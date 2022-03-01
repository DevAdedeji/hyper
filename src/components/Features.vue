<template>
  <section id="features">
      <div class="container">
            <div class="create">
                <div class="asset">
                    <img src="../assets/undraw_account_re_o7id.png" alt="create-account image">
                </div>
                <div class="text">
                    <h3>Create an Account</h3>
                    <p>Create an Account with us today and become an Hyper</p>
                </div>
            </div>
            <div class="attach">
                <div class="text">
                    <h3>Attach your Mastercard</h3>
                    <p>Attach your mastercard for easy access to deposit</p>
                </div>
                <div class="asset">
                    <img src="../assets/undraw_credit_card_re_blml.png" alt="create-account image">
                </div>
            </div>
            <div class="send-receive">
                <div class="asset">
                    <img src="../assets/undraw_transfer_money_rywa.png" alt="send-and-receive money img">
                </div>
                <div class="text">
                    <h3>Send and Receive money</h3>
                    <p>Send and receive money instantly with just a click</p>
                </div>
            </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #features{
        padding: 100px 0 50px 0;
        width: 100%;
        margin: 0 auto;
        position: relative;
        .container{
            width: 70%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 50px;
            .create, .attach, .send-receive{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 100px;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                color: #fff;
                .asset{
                    width: 423px;
                    height: 270px;
                    background: #112058;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 50px;
                    img{
                        width: 90%;
                    }
                }
                .text{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h3{
                        padding-bottom: 10px;
                        font-size: 30px;
                    }
                    p{
                        opacity: 0.7;
                        font-size: 18px;
                    }
                }
            }
        }
    }
    #features::after{
        content: '';
        position: absolute;
        bottom: -20%;
        right: 0;
        width: 500px;
        height: 400px;
        border-radius: 50%;
        background-color: #AE487C;
        opacity: 0.4;
        filter: blur(5rem);
        overflow-x: hidden;
    }

    @media (max-width:1010px){
        #features{
            .container{
                width: 80%;
                margin: 0 auto;
            }
        }
    }

    @media (max-width:890px){
        #features{
            .container{
                width: 90%;
                margin: 0 auto;
                gap: 50px;
                .create, .attach, .send-receive{
                    width: 70%;
                    grid-template-columns: 1fr;
                    gap: 20px;
                    .asset{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 60%;
                        }
                    }
                    .text{
                        width: 100%;
                    }
                }
                .attach{
                    .asset{
                        order: 1;
                    }
                    .text{
                        order: 2;
                    }
                }
            }
        }
    }

    @media (max-width:700px){
        #features{
            .container{
                .create, .attach, .send-receive{
                    width: 90%;
                    .asset{
                        img{
                            width: 90%;
                        }
                    }
                }
            }
        }
    }
</style>