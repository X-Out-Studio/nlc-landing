<script setup>
let active = ref(false);
const changeActive = () => {
  active.value = !active.value;
};

setTimeout(() => {
  changeActive();
}, 30000);
</script>

<template>
  <div class="telegram-popup" :class="active ? 'active' : ''">
    <button class="telegram-popup__close" @click="changeActive">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 17L1 1M17 1L1 17"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <div class="telegram-popup__container">
      <div class="img-container">
        <img src="@/assets/img/telegram-popup/main.png" alt="" />
      </div>
      <div class="text-container">
        Больше автомобилей, полезной информации и отзывов
        <span>у нас в telegram канале.</span>
      </div>
      <a class="subscribe-button" href="https://t.me/nlc_auto" target="_blank">
        <svg
          width="32"
          height="27"
          viewBox="0 0 32 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.84 0.670956L1.4942 11.2606C-0.440286 12.0133 -0.429094 13.0588 1.13928 13.525L8.41679 15.7244L25.2548 5.43218C26.051 4.96287 26.7784 5.21534 26.1805 5.72956L12.5384 17.6574L12.0364 24.9263C12.7718 24.9263 13.0963 24.5994 13.5088 24.2138L17.0436 20.8837L24.3963 26.1452C25.752 26.8685 26.7257 26.4968 27.063 24.9293L31.8896 2.89203C32.3837 0.972986 31.1334 0.10407 29.84 0.670956Z"
            fill="#49C7E1"
          />
        </svg>
        подписаться</a
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.telegram-popup {
  position: fixed;
  border: 2px solid #006083;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 290px;
  height: 349px;
  background: #1e1e1e;
  border-radius: 20px;
  box-shadow: -13px 3px 44px -14px rgba(0, 96, 131, 0.2);
  transform: translate(129%, -1%);
  transition: all 0.5s;
  &.active {
    transform: translate(-1%, -1%);
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
    cursor: pointer;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
    .img-container {
      margin: 0 0 0 50px;
      width: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-container {
      color: white;
      text-align: center;
      span {
        font-weight: 700;
      }
    }
    .subscribe-button {
      margin: 10px 0 0 0;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: "Druk Text Wide Cyr";
      font-weight: 900;
      font-size: 14px;
      line-height: 141.11%;
      text-transform: uppercase;
      color: #49c7e1;
      border: 1px solid white;
      border-radius: 108px;
      padding: 20px;
      transition: all 0.3s;
      &:hover {
        background: white;
      }
    }
  }
  @media (max-width: 576px) {
    display: none;
  }
}
</style>