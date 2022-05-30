<template>
  <section class="sucessful" ref="sucessful">
    <div class="container">
      <img
        src="../assets/close.png"
        alt="close icon"
        id="closeBtn"
        @click="close"
      />
      <img
        src="../assets/sucessful.png"
        alt="registered-sucessful-image"
        class="img"
      />
      <div>
        <p>Money Transferred Successfully</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("closePopUp");
    },
  },
};
</script>

<style lang="scss">
section.sucessful {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 500;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 50%;
    max-height: 95vh;
    margin: 0 auto;
    background-color: #0b0547;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    #closeBtn {
      align-self: flex-end;
      padding-right: 20px;
      cursor: pointer;
    }
    .img {
      height: 50%;
      width: 70%;
    }
    div {
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.32px;
        color: #fff;
      }
    }
  }
}

@media (max-width: 900px) {
  section.sucessful {
    .container {
      width: 90%;
      .img {
        width: 50%;
        height: 100%;
      }
      p {
        padding-bottom: 20px;
        color: #fff;
      }
    }
  }
}
</style>