<script setup>
const navigateParams = {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
};

const activeReview = ref();

const changeActiveReviews = (id) => {
    activeReview.value = activeReview.value !== id ? id : 0;
    console.log(activeReview.value);
}

const onSlideChange = () => {
    activeReview.value = 0;
    console.log(activeReview.value);
}

</script>

<template>
    <section id="reviews" class="reviews">
        <div class="global-title">отзывы</div>
        <div class="reviews__swiper">
            <Swiper :slides-per-view="1" :modules="[SwiperNavigation]" :navigation="navigateParams" :autoplay="{
                delay: 1000,
            }" @slide-change="onSlideChange()">
                <SwiperSlide>
                    <div class="reviews__card">
                        <div class="reviews__img">
                            <img src="@/assets/img/reviews/reviews1.png" alt="">
                        </div>
                        <div class="reviews__content">
                            <p class="reviews__text" :class="activeReview == 1 ? 'reviews__text--active' : ''">
                                Обратился в компанию next level car по поводу подбора нового авто . Были поставлены
                                определенные задачи
                                по поиску автомобиля , комплектация , год пробег машины и так далее .<br><br>
                                Юрием , было предложено много вариантов и на одном из них он прямо настоял . Машина 2020
                                года , полный
                                фарш , пробег минимальный . Мною и компанией был подписан договор на покупку моего нового
                                автомобиля .
                                На всех этапах были предоставлены фото , видео . Было сделано обследование лкп
                                машины. Машиной очень
                                доволен ! Если кто то думает поменять автомобиль , то тогда я рекомендую обратится за
                                помощью к Юрию 🤝
                            </p>
                            <button v-if="activeReview!=1" class="reviews__text-more" @click="changeActiveReviews(1)">
                                <img src="@/assets/img/reviews/arrow.svg" alt="" />
                                Подробнее
                            </button>
                            <button v-if="activeReview==1" class="reviews__text-more" @click="changeActiveReviews(0)">
                                <img src="@/assets/img/reviews/arrowUp.svg" alt="" />
                                Скрыть
                            </button>
                            <p class="reviews__name"><i>- Иван</i></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="reviews__card">
                        <div class="reviews__img">
                            <img src="@/assets/img/reviews/reviews2.jpg" alt="">
                        </div>
                        <div class="reviews__content">
                            <p class="reviews__text" :class="activeReview == 2 ? 'reviews__text--active' : ''">
                                Хочу выразить свою благодарность Юрию и компании NLC! Работа проведена на высшем уровне -
                                подобрали авто по всем запросам, проверили и уже через 2 недели автомобиль бы у меня 🔥Был
                                рад сотрудничеству 👍🏻
                            </p>
                            <button v-if="activeReview!=2" class="reviews__text-more" @click="changeActiveReviews(2)">
                                <img src="@/assets/img/reviews/arrow.svg" alt="" />
                                Подробнее
                            </button>
                            <button v-if="activeReview==2" class="reviews__text-more" @click="changeActiveReviews(0)">
                                <img src="@/assets/img/reviews/arrowUp.svg" alt="" />
                                Скрыть
                            </button>
                            <p class="reviews__name"><i> - Андрей</i></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="reviews__card">
                        <div class="reviews__img">
                            <img src="@/assets/img/reviews/reviews3.jpg" alt="">
                        </div>
                        <div class="reviews__content">
                            <p class="reviews__text" :class="activeReview == 3 ? 'reviews__text--active' : ''">
                                Переполняют эмоции и даже не знаю, что и сказать)) Юра, выражаю тебе и твоей команде
                                огромную благодарность за проделанную работу! Связь, сервис на высшем уровне! Буду
                                рекомендовать знакомым и друзьям👌🏼 Удачи и успехов в работе.
                            </p>
                            <button v-if="activeReview!=3" class="reviews__text-more" @click="changeActiveReviews(3)">
                                <img src="@/assets/img/reviews/arrow.svg" alt="" />
                                Подробнее
                            </button>
                            <button v-if="activeReview==3" class="reviews__text-more" @click="changeActiveReviews(0)">
                                <img src="@/assets/img/reviews/arrowUp.svg" alt="" />
                                Скрыть
                            </button>
                            <p class="reviews__name"><i>- Руслан</i></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="reviews__card">
                        <div class="reviews__img">
                            <img src="@/assets/img/reviews/reviews4.jpg" alt="">
                        </div>
                        <div class="reviews__content">
                            <p class="reviews__text" :class="activeReview == 4 ? 'reviews__text--active' : ''">
                                Юрий, очень доволен опытом сотрудничества с вами! Первое, что меня приятно удивило - это
                                профессиональный подход менеджеров компании. Они были готовы ответить на все мои вопросы,
                                рассказать о технических возможностях автомобиля, условиях покупки и кредитования. Благодаря
                                этому я смог выбрать для себя наилучший вариант на самых выгодных условиях.<br><br>
                                Кроме того, NLC предоставляет широкий спектр дополнительных услуг. Например, компания
                                помогла мне оформить страховку на авто. Это дало мне дополнительную уверенность в том, что я
                                получил качественный и надёжный автомобиль.<br><br>
                                Спасибо за крутое авто, теперь буду обращаться только к вам!
                            </p>
                            <button v-if="activeReview!=4" class="reviews__text-more" @click="changeActiveReviews(4)">
                                <img src="@/assets/img/reviews/arrow.svg" alt="" />
                                Подробнее
                            </button>
                            <button v-if="activeReview==4" class="reviews__text-more" @click="changeActiveReviews(0)">
                                <img src="@/assets/img/reviews/arrowUp.svg" alt="" />
                                Скрыть
                            </button>
                            <p class="reviews__name"><i>- Александр</i></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="reviews__card">
                        <div class="reviews__img">
                            <img src="@/assets/img/reviews/reviews5.jpg" alt="">
                        </div>
                        <div class="reviews__content">
                            <p class="reviews__text" :class="activeReview == 5 ? 'reviews__text--active' : ''">
                                Юра, хочу сказать тебе и NLC огромное спасибо!)
                                Я получил профессиональную помощь в подборе авто под мои требования и бюджет.<br><br>
                                Отношение к клиентам на высшем уровне, работа профессионалов и качественный подбор машин
                                🔥🔥 Очень доволен сотрудничеством с NLC и сейчас уже наслаждаюсь новым автомобилем!
                                Рекомендую всем обратиться за помощью в подборе машины именно к Юрию.
                            </p>
                            <button v-if="activeReview!=5" class="reviews__text-more" @click="changeActiveReviews(5)">
                                <img src="@/assets/img/reviews/arrow.svg" alt="" />
                                Подробнее
                            </button>
                            <button v-if="activeReview==5" class="reviews__text-more" @click="changeActiveReviews(0)">
                                <img src="@/assets/img/reviews/arrowUp.svg" alt="" />
                                Скрыть
                            </button>
                            <p class="reviews__name"><i>- Константин</i></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div class="swiper-navigate">
                <div class="swiper-prev">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="44" cy="44" r="43.5" stroke="#35322E" />
                        <path
                            d="M58.5092 44.7391C58.7045 44.5438 58.7045 44.2272 58.5092 44.0319L55.3273 40.85C55.132 40.6547 54.8154 40.6547 54.6201 40.85C54.4249 41.0452 54.4249 41.3618 54.6201 41.5571L57.4486 44.3855L54.6201 47.2139C54.4249 47.4092 54.4249 47.7258 54.6201 47.921C54.8154 48.1163 55.132 48.1163 55.3273 47.921L58.5092 44.7391ZM29.8906 44.8855H58.1557V43.8855H29.8906V44.8855Z"
                            fill="#35322E" />
                    </svg>
                </div>
                <div class="swiper-next">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="44" cy="44" r="43.5" stroke="#35322E" />
                        <path
                            d="M58.5092 44.7391C58.7045 44.5438 58.7045 44.2272 58.5092 44.0319L55.3273 40.85C55.132 40.6547 54.8154 40.6547 54.6201 40.85C54.4249 41.0452 54.4249 41.3618 54.6201 41.5571L57.4486 44.3855L54.6201 47.2139C54.4249 47.4092 54.4249 47.7258 54.6201 47.921C54.8154 48.1163 55.132 48.1163 55.3273 47.921L58.5092 44.7391ZM29.8906 44.8855H58.1557V43.8855H29.8906V44.8855Z"
                            fill="#35322E" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.reviews {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__swiper {
        margin-top: 29px;
        width: 100%;
        max-width: 1325px;
    }

    &__card {
        display: flex;
        flex-direction: row;
    }

    &__img {
        border-radius: 14px;
        width: 562px;
        height: 462px;
        position: relative;
        z-index: -1;
        left: 20px;

        img {
            border-radius: 14px;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    &__content {
        padding: 30px 41px 30px 35px;
        background: #FFFFFF;
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 763px;
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 162.61%;

        &-more {
            display: none;
        }
    }
}

.swiper-navigate {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin: 18px 0 0 0;

    .swiper-prev {
        svg {
            transform: rotate(180deg);
        }
    }

    .swiper-prev,
    .swiper-next {
        cursor: pointer;
    }

    .swiper-button-disabled {
        opacity: 0.24;
        cursor: auto;
    }
}

@media (max-width: 1450px) {
    .reviews {
        &__swiper {
            max-width: 880px;
        }

        &__img {
            width: 356px;
            height: 382px;
        }

        &__content {
            max-width: 549px;
        }

        &__text {
            font-size: 14px;
            line-height: 162.61%;
        }
    }

    .swiper-navigate {

        .swiper-prev,
        .swiper-next {
            width: 61px;
            height: 61px;

            svg {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }
}

@media(max-width: 992px) {
    .reviews {
        padding: 40px 30px;

        &__swiper {
            max-width: 100%;
        }

        &__content {
            max-width: 60%;
        }

        &__img {
            height: unset;
        }

        &__card {
            height: 100%;
        }

        .swiper-slide {
            height: auto;
        }
    }
}

@media(max-width: 800px) {
    .reviews {

        &__card {
            flex-direction: column;
        }

        &__content {
            order: -1;
            max-width: 100%;
            padding: 31px 29px 40px 22px;
            height: 100%;
        }

        &__img {
            width: 100%;
            left: 0;
            top: -20px;
            z-index: 10;
            height: 300px;
        }

        &__text {
            display: block;
            overflow: hidden;
            max-height: 60px;
            /* text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            position: relative; */
            transition: max-height 0.5s;

            &-more {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #BEBEBE;
                font-size: 14px;
                line-height: 162.61%;
                background-color: transparent;
            }

            &--active {
                height: fit-content;
                height: fit-content;
                max-height: 450px;

                &::after {
                   opacity: 0;
                }
            }

            &::after {
                content: "";
                position: absolute;
                background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
                top: 20px;
                bottom: 0;
                height: 75px;
                left: 0;
                right: 0;
                transform: rotate(180deg);
                transition: opacity 0.6s;
            }
        }


        .swiper-navigate {
            justify-content: center;
            gap: 11px;
        }
    }
}

@media(max-width: 600px) {
    .reviews {
        padding: 40px 15px;

        &__content {
            gap: 17px;
        }
    }
}

@media(max-width: 450px) {
    .reviews {

        &__img {
            height: 249px;
        }

        .swiper-navigate {
            margin-top: 0;
        }
    }
}
</style>