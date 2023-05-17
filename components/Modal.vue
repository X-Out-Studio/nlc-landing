<script setup>
import { ref } from "vue";
import { useModalStepsStore } from "@/store/modalSteps";
import { VueFinalModal } from "vue-final-modal";

const store = useModalStepsStore();

const done = ref(false);

const doneForm = () => {
  done.value = !done.value;
};
</script>

<template>
  <vue-final-modal v-model="store.openModal">
    <section class="modal">
      <div class="modal__wrapper">
        <button class="modal__close" @click="store.openModal = false">
          <img src="../assets/img/modal/cross.svg" alt="" />
        </button>
        <Transition>
          <div v-if="!done" class="modal__start">
            <div class="global-title">узнай стоимость своего авто</div>
            <form class="modal__form">
              <input class="modal__input" type="text" placeholder="Ваше имя" />
              <input
                class="modal__input"
                type="tel"
                placeholder="Ваш телефонy"
                v-maska
                data-maska="+7 ### ###-##-##"
              />
            </form>
            <div class="modal__send">
              <button class="modal__submit" @click="doneForm()">
                Отправить
              </button>
              <p class="modal__text">
                Нажимая на кнопку «Оставить заявку», вы соглашаетесь с условиями
                <a href="#">Политики обработки персональных данных</a>
              </p>
            </div>
          </div>
        </Transition>
        <Transition>
          <div v-if="done" class="modal__end">
            <div class="modal__thank">спасибо за заявку!</div>
            <p class="modal__done">наш Специалист уже начал просчет</p>
            <div class="modal__social">
              <div class="modal__social-text">
                Узнай о нас больше в соц. сетях
                <img src="../assets/img/modal/arrow.svg" alt="" />
              </div>
              <a href="https://t.me/nlc_auto" target="_blank">
                <img src="../assets/img/modal/telega.svg" alt="" />
              </a>
              <a href="https://instagram.com/_nextlevelcar_" target="_blank">
                <img src="../assets/img/modal/insta.svg" alt="" />
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  </vue-final-modal>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

