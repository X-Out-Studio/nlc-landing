<script setup>
const navigateParams = {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
};
</script>

<template>
    <section class="price">
        <div class="global-title" data-aos="fade">цена в россии vs&nbsp;NLC</div>
        <div class="price__swipers" data-aos="fade-up">
            <Swiper :slides-per-view="2" :spaceBetween="'37'" :modules="[SwiperNavigation]" :navigation="navigateParams"
                :autoplay="{
                    delay: 1000,
                }" :breakpoints="{
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 17,
    },
}">
                <SwiperSlide>
                    <div class="price__item">
                        <div class="price__img">
                            <img class="price__car" src="../../assets/img/price/car1.png" alt="">
                        </div>
                        <div class="price__info">
                            <div class="price__nav">
                                <p class="price__name">Mercedes-Benz G-Класс AMG </p>
                                <button class="swiper-next">
                                    <img src="@/assets/img/price/arrowRight.svg" alt="">
                                </button>
                            </div>
                            <p class="price__rub">19 500 000 руб.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="price__item">
                        <div class="price__img">
                            <img class="price__car" src="../../assets/img/price/car2.png" alt="">
                        </div>
                        <div class="price__info price__info--white">
                            <div class="price__nav">
                                <p class="price__name">Mercedes-Benz G-Класс AMG </p>
                                <button class="swiper-prev">
                                    <img src="@/assets/img/price/arrowLeft.svg" alt="">
                                </button>
                            </div>
                            <p class="price__rub">22 950 000 руб.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper :slides-per-view="2" :spaceBetween="'37'" :modules="[SwiperNavigation]" :navigation="navigateParams"
                :autoplay="{
                    delay: 1000,
                }" :breakpoints="{
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 17,
    },
}">
                <SwiperSlide>
                    <div class="price__item">
                        <div class="price__img">
                            <img class="price__car" src="@/assets/img/price/car3.png" alt="">
                        </div>
                        <div class="price__info">
                            <div class="price__nav">
                                <p class="price__name">BMW X6 30d</p>
                                <button class="swiper-next">
                                    <img src="@/assets/img/price/arrowRight.svg" alt="">
                                </button>
                            </div>
                            <p class="price__rub">10 500 000 руб. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="price__item">
                        <div class="price__img">
                            <img class="price__car" src="@/assets/img/price/car4.png" alt="">
                        </div>
                        <div class="price__info price__info--white">
                            <div class="price__nav">
                                <p class="price__name">BMW X6 30d</p>
                                <button class="swiper-prev">
                                    <img src="@/assets/img/price/arrowLeft.svg" alt="">
                                </button>
                            </div>
                            <p class="price__rub">13 000 000 руб. </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.price {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;

    &__card {
        margin-top: 79px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 37px;
        row-gap: 4px;
    }

    &__item {
        &:nth-child(even) {
            .price__info {
                background-color: #ffffff;
                color: var(--blackLight);
            }
        }
    }

    &__logo {
        position: absolute;
        top: 28px;

        &-nlc {
            width: 163px;
            height: 34px;
        }

        &-avito {
            width: 263px;
            height: 66px;
        }
    }

    &__car {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &__swipers {
        padding-top: 46px;
        max-width: 1237px;
        width: 100%;
    }

    &__nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .swiper-next,
        .swiper-prev {
            background-color: transparent;
            display: none;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 17px;
        padding: 28px 0 26px 0;
        background-color: var(--blackLight);
        border-radius: 14px;
        color: #EDEDED;
        position: relative;
        top: -28px;

        &--white {
            background-color: #FFFFFF;
            color: var(--blackLight);
        }
    }

    &__name {
        font-weight: 700;
        font-size: 25px;
        line-height: 147.11%;
    }

    &__rub {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 147.11%;
    }

    &__img {
        border-radius: 14px;
        position: relative;

        img {
            border-radius: 14px;
        }
    }
}

@media(max-width: 992px) {
    .price {
        margin-top: 40px;
        margin-bottom: 20px;

        &__logo {

            &-nlc {
                width: 116px;
                height: 24px;
            }

            &-avito {
                width: 191px;
                height: 48px;
            }
        }

        &__swipers {
            padding-top: 30px;
        }
    }
}

@media(max-width: 768px) {
    .price {
        &__card {
            margin-top: 31px;
        }

        &__nav {
            justify-content: space-between;

            .swiper-next,
            .swiper-prev {
                display: block;
            }
        }

        &__info {
            align-items: flex-start;
            padding: 21px 20px 18px 17px;
        }
    }
}

@media (max-width: 670px) {
    .price {
        &__card {
            grid-template-columns: 1fr;
        }
    }
}

@media (max-width: 600px) {
    .price {
        align-items: flex-start;

        &__card {
            row-gap: 0;
        }

        &__logo {
            top: 21px;
        }

        &__name {
            font-size: 20px;
            line-height: 147.11%;
        }

        &__rub {
            font-weight: 700;
            font-size: 30px;
            line-height: 147.11%;
        }
    }
}
</style>