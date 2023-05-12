<script setup>
import { ref } from 'vue';

const done = ref(false);

const doneForm = () => {
    done.value = !done.value;
}

</script>

<template>
    <section class="modal">
        <div class="modal__wrapper">
            <button class="modal__close">
                <img src="../assets/img/modal/cross.svg" alt="">
            </button>
            <Transition>
                <div v-if="!done" class="modal__start">
                    <div class="global-title">узнай стоимость своего авто</div>
                    <form class="modal__form">
                        <input class="modal__input" type="text" placeholder="Ваше имя" />
                        <input class="modal__input" type="tel" placeholder="Ваш телефон" />
                    </form>
                    <div class="modal__send">
                        <button class="modal__submit" @click="doneForm()">Отправить</button>
                        <p class="modal__text">Нажимая на кнопку «Оставить заявку», вы соглашаетесь с условиями <a
                                href="#">Политики обработки персональных данных</a></p>
                    </div>
                </div>
            </Transition>
            <Transition>
                <div v-if="done" class="modal__end">
                    <div class="modal__thank">спасибо за заявку!</div>
                    <p class="modal__done">наш Специалист
                        уже начал просчет</p>
                    <div class="modal__social">
                        <div class="modal__social-text">Узнай о нас больше в соц. сетях
                            <img src="../assets/img/modal/arrow.svg" alt="">
                        </div>
                        <a href="#">
                            <img src="../assets/img/modal/telega.svg" alt="">
                        </a>
                        <a href="#">
                            <img src="../assets/img/modal/insta.svg" alt="">
                        </a>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
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
.modal {
    max-width: 784px;
    height: 541px;
    background-color: #F4F4F4;

    .global-title {
        font-size: 38px;
        line-height: 128.61%;
    }

    &__wrapper {
        height: 100%;
        position: relative;
        padding: 32px 65px 72px 59px;
    }

    &__close {
        width: 20px;
        height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 44px;
        right: 65px;
        cursor: pointer;
    }

    &__start {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 46px;
        justify-content: center;
        align-items: center;
    }

    &__input {
        width: 100%;
        padding-bottom: 7px;
        border-bottom: 1px solid #1E1E1E;
        background-color: transparent;

        &::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 128.61%;
            color: #ABABAB;
        }
    }

    &__submit {
        font-weight: 400;
        font-size: 15px;
        line-height: 128.61%;
        text-align: center;
        color: #000000;
        padding: 21px 154px 22px 154px;
        border: 1px solid #1E1E1E;
        border-radius: 108px;
        cursor: pointer;
    }

    &__text {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: rgba(0, 0, 0, 0.39);
        max-width: 318px;

        a {
            text-decoration: underline;
        }
    }

    &__thank {
        font-family: 'Druk Text Wide Cyr';
        font-style: normal;
        font-weight: 900;
        font-size: 38px;
        line-height: 128.61%;
        text-transform: uppercase;
        color: #1E1E1E;
    }

    &__done {
        font-family: 'Druk Text Wide Cyr';
        font-style: normal;
        font-weight: 900;
        font-size: 29px;
        line-height: 118.61%;
        text-align: center;
        text-transform: uppercase;
        color: #1E1E1E;
    }

    &__send {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }

    &__end {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        gap: 32px;
        height: 100%;
        margin: auto;
    }

    &__social {
        margin-top: 28px;
        border: 1px solid #000000;
        border-radius: 53.5px;
        padding: 30px 53px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;

        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        &-text {
            max-width: 193px;
        }
    }
}
</style>

