<template>
  <section class="newsletter">
      <div class="container">
          <h3>Subscribe to our newsletter</h3>
          <p>We operate our banking service all over Nigeria</p>
          <form>
              <input type="email" name="email" id="email" placeholder="Enter your email">
              <button type="submit">Get Started</button>
          </form>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.newsletter{
    width: 100%;
    padding: 50px 0;
    position: relative;
    .container{
        width: 50%;
        margin: 0 auto;
        background-color: #112058;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        h3{
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 40px;
            line-height: 40px;
            color: #fff;
            padding: 10px 0;
        }
        p{
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 25px;
            color: #fff;
            opacity: 0.7;
            padding: 10px 0;
        }
        form{
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 10px 0;
            input{
                background: transparent;
                outline: none;
                border: 1px solid #2E6AE9;
                padding: 15px 50px;
                border-radius: 10px;
                font-family: 'Montserrat', sans-serif;
                font-size: 20px;
                color: #fff;
                opacity: 0.6;
            }
            button{
                border: none;
                outline: none;
                text-transform: uppercase;
                text-decoration: none;
                color: #fff;
                background-color: #3975F2;
                padding: 15px 10px;
                border-radius: 10px;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 20px;
            }
        }
    }
}
.newsletter::after{
    content: '';
    position: absolute;
    bottom: -50%;
    right: 0;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: #AE487C;
    opacity: 0.4;
    filter: blur(5rem);
    overflow-x: hidden;
}
@media (max-width:1100px){
    .newsletter{
        .container{
            width: 70%;
            margin: 0 auto;
        }
    }
}

@media (max-width:890px){
    .newsletter{
        .container{
            width: 90%;
            margin: 0 auto;
        }
    }
}

@media (max-width:700px){
    .newsletter{
        .container{
            h3{
                font-size: 20px;
            }
            p{
                font-size: 16px;
                padding-top: 0;
                width: 90%;
                text-align: center;
            }
            form{
                flex-direction: column;
                input{
                    width: 90%;
                    margin: 0 auto;
                    padding: 10px 20px;
                }
            }
        }
    }
}
</style>