<template>
  <div class="telegram-popup">
    <div class="telegram-popup__container">
      <div class="img-container">
        <img src="@/assets/img/telegram-popup/main.png" alt="" />
      </div>
      <div class="text-container">
        Больше автомобилей, полезной информации и отзывов
        <span>у нас в telegram канале.</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.telegram-popup {
  width: 290px;
  height: 349px;
  background: #1e1e1e;
  border-radius: 20px;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img-container {
      width: 200px;
      position: absolute;
      left: 125px;
      right: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-container {
      color: white;
      span {
        font-weight: 700;
      }
    }
  }
}
</style>