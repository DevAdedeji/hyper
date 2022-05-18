<template>
  <div class="container">
      <nav>
          <div class="title">Hyper</div>
            <ul>
                <li>
                    <a href="#">
                        <img src="../assets/home.png">
                      <p>Home</p>
                    </a>
                  </li>
                <li>
                    <a href="#">
                        <img src="../assets/money.png">
                        <p>Transfer</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/notify.png">
                        <p>Notifications</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/settings.png">
                      <p>Settings</p>
                    </a>
                </li>
            </ul>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    width: 20%;
    height: 100vh;
    background-color: #46144C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
        text-align: center;
        font-size: 30px;
        color: #0b0547;
    }
    nav{
        ul{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            li{
                list-style: none;
                padding: 20px 0;
               a{
                   display: flex;
                   align-items: flex-start;
                   gap: 10px;
                   img{
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
</style>