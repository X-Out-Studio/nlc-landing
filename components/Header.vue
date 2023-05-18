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
        active: false,
        href: "#stagesWork"
    },
    {
        name: "О нас",
        active: false,
        href: "#about"
    },
    {
        name: "Отзывы",
        active: false,
        href: "#reviews"
    },
    {
        name: "Контакты",
        active: false,
        href: "#footer"
    }
])

const onChangeActiveLink = (indexLink) => {
    headerLinks.forEach((item, index) => {
        item.active = index === indexLink ? true : false;
    });
    activeMobileMenu.value = false;
    document.body.classList.remove('body--hidden');
}

const activeMobileHeader = () => {
    activeHeader.value = true;
    activeMobileMenu.value = !activeMobileMenu.value;
    document.body.classList.toggle('body--hidden');
    if (!activeMobileMenu.value && window.scrollY === 0) {
        activeHeader.value = false;
    }
}

</script>

<template>
    <header :class="!activeHeader ? 'header' : 'header header--active'">
        <div class="container">
            <a href="#main" class="header__logo">
                <img v-if="!activeHeader" activeHeader src="@/assets/img/header/logo.svg" alt="">
                <img v-if="activeHeader" src="../assets/img/header/logoActive.svg" alt="">
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
            <button class="header__burger" :class="activeMobileMenu ? 'header__burger--active' : ''"
                @click="activeMobileHeader()">
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
                                    <a href="https://t.me/nlc_auto" target="_blank" class="footer__social-link">
                                        <svg width="36" height="29" viewBox="0 0 36 29" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M33.5701 0.190682L1.68098 12.0022C-0.495321 12.8418 -0.482731 14.0079 1.28169 14.5279L9.46889 16.9811L28.4117 5.50127C29.3074 4.97782 30.1257 5.25941 29.4531 5.83297L14.1057 19.1371L13.5409 27.2447C14.3683 27.2447 14.7334 26.8801 15.1974 26.45L19.1741 22.7357L27.4458 28.6043C28.971 29.4111 30.0664 28.9964 30.4459 27.2481L35.8759 2.66804C36.4316 0.527561 35.0251 -0.441614 33.5701 0.190682Z"
                                                fill="transparent" stroke="#1E1E1E" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/_nextlevelcar_" target="_blank"
                                        class="footer__social-link footer__social-link--insta">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.9954 11.3309C13.8739 11.3309 11.3265 13.8784 11.3265 17C11.3265 20.1216 13.8739 22.6691 16.9954 22.6691C20.117 22.6691 22.6644 20.1216 22.6644 17C22.6644 13.8784 20.117 11.3309 16.9954 11.3309ZM33.9981 17C33.9981 14.6524 34.0194 12.3261 33.8875 9.98276C33.7557 7.26092 33.1348 4.84529 31.1445 2.85494C29.1499 0.860345 26.7386 0.243679 24.0168 0.11184C21.6693 -0.0199994 19.343 0.00126499 16.9997 0.00126499C14.6521 0.00126499 12.3259 -0.0199994 9.98257 0.11184C7.26079 0.243679 4.8452 0.864598 2.85489 2.85494C0.860329 4.84954 0.243674 7.26092 0.111838 9.98276C-0.0199991 12.3303 0.00126497 14.6567 0.00126497 17C0.00126497 19.3433 -0.0199991 21.6739 0.111838 24.0172C0.243674 26.7391 0.864582 29.1547 2.85489 31.1451C4.84945 33.1397 7.26079 33.7563 9.98257 33.8882C12.3301 34.02 14.6564 33.9987 16.9997 33.9987C19.3472 33.9987 21.6735 34.02 24.0168 33.8882C26.7386 33.7563 29.1542 33.1354 31.1445 31.1451C33.139 29.1505 33.7557 26.7391 33.8875 24.0172C34.0236 21.6739 33.9981 19.3476 33.9981 17ZM16.9954 25.7226C12.1685 25.7226 8.27295 21.827 8.27295 17C8.27295 12.173 12.1685 8.27736 16.9954 8.27736C21.8224 8.27736 25.7179 12.173 25.7179 17C25.7179 21.827 21.8224 25.7226 16.9954 25.7226ZM26.0751 9.95724C24.9482 9.95724 24.0381 9.04713 24.0381 7.92011C24.0381 6.7931 24.9482 5.88299 26.0751 5.88299C27.2021 5.88299 28.1122 6.7931 28.1122 7.92011C28.1126 8.18773 28.0601 8.45278 27.9579 8.70009C27.8556 8.94739 27.7056 9.1721 27.5163 9.36133C27.3271 9.55056 27.1024 9.7006 26.8551 9.80286C26.6078 9.90512 26.3428 9.95758 26.0751 9.95724Z"
                                                fill="transparent" stroke="#1E1E1E" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="header__info-data">
                            <a href="tel:+79381332323">Телефон<br> +7 938 133-23-23</a>
                            <a href="mailto:nlc-auto@yandex.ru">Почта<br> nlc-auto@yandex.ru</a>
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

    &__link {
        width: calc(100% + 10px);
        font-weight: 400;
        font-size: 16px;
        line-height: 128.61%;
    }

    &__nav {
        display: flex;
        flex-direction: row;
        gap: 27px;
        align-items: center;

        &-item {
            list-style-type: none;
            position: relative;

            &::after {
                position: absolute;
                content: "";
                width: 0;
                margin: 0 auto;
                height: 1px;
                background-color: currentColor;
                left: 0;
                bottom: -4px;
                transition: width .3s ease-in 0s;
            }

            &:hover {
                position: relative;

                &::after {
                    width: 100%;
                }
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

    &__call {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 21px 38px;
        font-weight: 900;
        font-size: 16px;
        line-height: 0.7;
        color: currentColor;
        font-family: 'Druk Text Wide Cyr';
        border: 1px solid currentColor;
        border-radius: 108px;
        background-color: transparent;
        transition: background-color 0.3s;

        &:hover {
            background-color: #000000;
            border: 1px solid #000000;
            color: #FFFFFF;
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
            transition: transform 0.3s;

            &--active {
                transform: rotate(90deg);
            }
        }

        &__mobile {
            position: relative;
            top: 0;
            width: 100%;
            height: 100vh;
            padding: 46px 20px 126px 15px;
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

                    &:hover {
                        color: #ffffff;
                    }
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

                                svg {
                                    &:hover {
                                        path {
                                            fill: #1E1E1E;
                                        }
                                    }
                                }
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