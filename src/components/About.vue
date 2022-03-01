<template>
  <section id="about">
      <div class="container">
          <div class="asset">
              <img src="../assets/Group_1000001910.png" alt="connect-world image">
          </div>
          <div class="text">
              <h3 class="title">ABOUT US</h3>
              <h4>You want to know about <span>Hyper</span> Internet Banking?</h4>
              <p>we operate our banking services all over Nigeria</p>
              <p>Internet banking is an act of sending funds or transact from your mobile device (Cell phone, tablet, e.t.c) or even computers using website </p>
              <p>This activity can be as a single click will send money from your account to another client’s phone or as a means of clientpaying bills.</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#about{
    background: rgba(255, 255, 255, 0.1);
    padding: 50px 0;
    position: relative;
    .container{
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        .asset{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 100%;
            }
        }
        .text{
            width: 50%;
            .title{
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 30px;
                background: linear-gradient(to right, #FFFFFF 10%, #9F616A 90%);
                background-clip: text;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent;
                -moz-text-fill-color: transparent;
            }
            h4{
                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 30px;
                line-height: 23m;
                letter-spacing: 0.01em;
                color: #FFFFFF;
                opacity: 0.99;
                padding: 10px 0;
                span{
                    color: #9F616A;
                }
            }
            p{
                text-transform: capitalize;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 1.7em;
                padding: 10px 0;
                letter-spacing: 0.01em;
                color: #FFFFFF;
            }
        }
    }
}
#about::before{
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: #AE487C;
    opacity: 0.4;
    filter: blur(5rem);
    overflow-x: hidden;
}

@media (max-width:890px){
    #about{
        .container{
            flex-direction: column;
            .asset{
                width: 100%;
            }
            .text{
                width: 100%;
            }
        }
    }
}
</style>