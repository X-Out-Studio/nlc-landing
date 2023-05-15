<script setup>
import { ref } from 'vue';

const activeHeader = ref(false);
const activeMobileMenu = ref(false);

///Смена цвета при scroll страницы
onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            activeHeader.value = true;
        }
        else {
            activeHeader.value = false;
        }
    });
})

///Навигация
const headerLinks = reactive([
    {
        name: "Этапы работы",
        active: true,
        href: "#"
    },
    {
        name: "О нас",
        active: false,
        href: "#"
    },
    {
        name: "Отзывы",
        active: false,
        href: "#"
    },
    {
        name: "Контакты",
        active: false,
        href: "#"
    }
])

const onChangeActiveLink = (indexLink) => {
    console.log(111);
    headerLinks.forEach((item, index) => {
        item.active = index === indexLink ? true : false;
    });
}

const activeMobileHeader = () => {
    activeHeader.value = true;
    activeMobileMenu.value = !activeMobileMenu.value;
    document.body.classList.toggle('body--hidden');
}

</script>

<template>
    <header :class="!activeHeader ? 'header' : 'header header--active'">
        <div class="container">
            <a class="header__logo">
                <img v-if="!activeHeader" activeHeader src="../assets/img/header/logo.png" alt="">
                <img v-if="activeHeader" src="../assets/img/header/logoActive.png" alt="">
            </a>
            <div class="header__menu">
                <ul class="header__nav">
                    <li v-for="(item, index) in headerLinks" :key="index"
                        :class="item.active ? 'header__nav-item header__nav-item--active' : 'header__nav-item'">
                        <a :href="item.href" class="header__link" @click="onChangeActiveLink(index)">{{ item.name }}</a>
                    </li>
                </ul>
                <a class="header__call" href="tel:+71234567890">позвонить</a>
            </div>
            <button class="header__burger" @click="activeMobileHeader()">
                <div class="header__burger-point"></div>
                <div class="header__burger-point"></div>
                <div class="header__burger-point"></div>
            </button>
        </div>

        <Transition name="slide-fade">
            <div v-if="activeMobileMenu" class="header__mobile">
            <div class="header__mobile-menu">
                <ul class="header__nav">
                    <li v-for="(item, index) in headerLinks" :key="index"
                        :class="item.active ? 'header__nav-item header__nav-item--active' : 'header__nav-item'">
                        <a :href="item.href" class="header__link" @click="onChangeActiveLink(index)">{{ item.name }}</a>
                    </li>
                </ul>
                <a class="header__call" href="tel:+71234567890">позвонить</a>
                <div class="header__info">
                    <div class="header__info-social">
                        <p class="header__info-social-text">Узнай о нас больше<br> в соц. сетях</p>
                        <ul class="header__info-social-items">
                            <li>
                                <a href="#" class="footer__social-link">
                                    <img src="@/assets/img/header/telegram.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer__social-link footer__social-link--insta">
                                    <img src="@/assets/img/header/instagram.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__info-data">
                        <a href="tel:+71234567890">Телефон<br> +7 123 456 78 90</a>
                        <a href="mailto:ask@htmlbook.ru?subject=Вопрос по HTML">Почта<br> pochta@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        </Transition>
    </header>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.header {
    width: 100%;
    padding-top: 17px;
    position: fixed;
    z-index: 20;
    color: #FFFFFF;
    transition: color 0.3s, background-color 0.3s, padding 0.3s;

    &--active {
        color: var(--blackLight);
        background-color: #F4F4F4;
        padding-bottom: 7px;

        .header__burger-point {
            background-color: currentColor;
        }
    }

    &__logo {
        width: 159px;
        height: 34px;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 18px;
        border-bottom: 1px solid currentColor;
    }

    &__menu {
        display: flex;
        flex-direction: row;
        gap: 121px;
        align-items: center;
    }

    &__burger {
        width: 30px;
        height: 30px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
        display: none;

        &-point {
            width: 5px;
            height: 5px;
            background-color: #FFFFFF;
            border-radius: 50%;
        }
    }

    &__nav {
        display: flex;
        flex-direction: row;
        gap: 27px;
        align-items: center;

        &-item {
            list-style-type: none;

            &::after {
                position: absolute;
                content: "";
                width: 0;
                height: 1px;
                background-color: currentColor;
                left: 0;
                bottom: -4px;
            }

            &--active {
                position: relative;

                .header__link {
                    font-weight: 700;
                }

                &::after {
                    width: 100%;
                }
            }
        }
    }

    &__link {
        font-weight: 400;
        font-size: 16px;
        line-height: 128.61%;
        transition: font-weight .4s ease-in-out;
    }

    &__call {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 21px 38px;
        font-weight: 900;
        font-size: 16px;
        line-height: 128.61%;
        color: currentColor;
        font-family: 'Druk Text Wide Cyr';
        border: 1px solid currentColor;
        border-radius: 108px;
        background-color: transparent;
        transition: background-color 0.3s;

        &:hover {
            background-color: #000000;
            border: 1px solid #000000;
        }
    }
}

@media(max-width: 1200px) {

    .header {

        .container {
            margin: 0 20px;
        }

        &__menu {
            gap: 50px;
        }
    }
}

@media(max-width: 900px) {

    .header {
        padding-top: 30px;

        .container {
            padding-bottom: 10px;
        }

        &__logo {
            width: 93px;
            height: 20px;
        }

        &__menu {
            display: none;
        }

        &__burger {
            display: flex;
        }

        &__mobile {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
            padding: 97px 20px 126px 15px;
            background-color: #F4F4F4;
            overflow: auto;
            z-index: -1;

            &-menu {
                display: flex;
                flex-direction: column;
                gap: 54px;

                .header__nav {
                    flex-direction: column;
                    gap: 25px;
                    align-items: flex-start;
                    color: #1E1E1E;
                }

                .header__call {
                    width: fit-content;
                    color: #1F1F1F;
                }

                .header__info {
                    padding-top: 26px;
                    border-top: 1px solid #1E1E1E;
                    color: #1F1F1F;
                    display: flex;
                    flex-direction: column;
                    gap: 42px;

                    &-social {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        &-text {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 128.61%;
                        }

                        &-items {
                            display: flex;
                            flex-direction: row;
                            gap: 35px;
                            align-items: center;

                            li {
                                list-style-type: none;
                            }
                        }
                    }

                    &-data {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            }

        }
    }
}
</style>