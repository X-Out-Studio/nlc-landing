<script setup>
import { useModalStepsStore } from "@/store/modalSteps";
const store = useModalStepsStore();
</script>

<template>
    <section id="stagesWork" class="stagesWork">
        <div class="global-title white">этапы работы</div>
        <div class="stagesWork__wrapper">
            <div class="stagesWork__steps">
                <div class="stagesWork__arrow">
                    <div class="stagesWork__step stagesWork__step--left">
                        <div class="stagesWork__step--content stagesWork__step--content--1">
                            <p class="stagesWork__step--name">1. подбор автомобиля</p>
                            <p class="stagesWork__step--text">Специалисты NLC подбирают вам авто по необходимым параметрам
                                на
                                площадках Европы.</p>
                        </div>
                        <div class="stagesWork__step--done stagesWork__step--done--1">
                            <img src="@/assets/img/stagesWork/done.svg" alt="">
                        </div>
                    </div>
                    <div class="stagesWork__step stagesWork__step--right">
                        <div class="stagesWork__step--content stagesWork__step--content--2">
                            <p class="stagesWork__step--name">2. заключение договора</p>
                            <p class="stagesWork__step--text">Компания NLC заключает договоры
                                с&nbsp;клиентами&nbsp;на&nbsp;поставку автомобиля
                                как по полной, так и по частичной оплате (мин. аванс - 25%).</p>
                        </div>
                        <div class="stagesWork__step--done">
                            <img src="@/assets/img/stagesWork/done.svg" alt="">
                        </div>
                    </div>
                    <div class="stagesWork__step stagesWork__step--left">
                        <div class="stagesWork__step--content stagesWork__step--content--3">
                            <p class="stagesWork__step--name">3. проверка автомобиля</p>
                            <p class="stagesWork__step--text">Мы проводим полную проверку автомобиля перед его
                                приобретением!
                            </p>
                            <ul class="stagesWork__step--list">
                                <li class="stagesWork__step--item"> Видообзор машины;</li>
                                <li class="stagesWork__step--item"> Назначаем встречи с продавцами;</li>
                                <li class="stagesWork__step--item"> Проводим техническую и юридическую проверки авто.</li>
                            </ul>
                        </div>
                        <div class="stagesWork__step--done">
                            <img src="@/assets/img/stagesWork/done.svg" alt="">
                        </div>
                    </div>
                    <div class="stagesWork__step stagesWork__step--right">
                        <div class="stagesWork__step--content stagesWork__step--content--4">
                            <p class="stagesWork__step--name">4. оплата автомобиля в Европе</p>
                            <p class="stagesWork__step--text">У компании NLC открыты представительства в Польше, Германии и
                                Италии. Мы быстро и беспрепятственно оплачиваем автомобиль и забираем его у дилера.</p>
                        </div>
                        <div class="stagesWork__step--done">
                            <img src="@/assets/img/stagesWork/done.svg" alt="">
                        </div>
                    </div>
                    <div class="stagesWork__step stagesWork__step--left">
                        <div class="stagesWork__step--content stagesWork__step--content--5">
                            <p class="stagesWork__step--name">5. доставка автомобилей из Европы</p>
                            <p class="stagesWork__step--text">Мы доставляем автомобиль автовозом от дилера до клиента.</p>
                        </div>
                        <div class="stagesWork__step--done">
                            <img src="@/assets/img/stagesWork/done.svg" alt="">
                        </div>
                    </div>
                    <div class="stagesWork__step stagesWork__step--right">
                        <div class="stagesWork__step--content stagesWork__step--content--6">
                            <p class="stagesWork__step--name">6. растаможка автомобиля</p>
                            <p class="stagesWork__step--text">Клиент получает полностью растаможенный, юридически и
                                технически
                                чистый автомобиль, готовый к постановке на РФ учет. Также NLC делает ЭПТС и СБКТС.</p>
                        </div>
                        <div class="stagesWork__step--done">
                            <img src="@/assets/img/stagesWork/done.svg" alt="">
                        </div>
                    </div>
                    <img class="stagesWork__arrow-img" src="@/assets/img/stagesWork/arrow.png" alt="">
                </div>
            </div>
        </div>
        <p class="stagesWork__text">
            Мы предлагаем максимально <span>простой и удобный</span> процесс покупки,
            а также гарантируем прозрачность сделок и лучшие цены на автомобили.
        </p>
        <div class="stagesWork__weeks">
            <p class="stagesWork__weeks-text">2 <span>недели</span></p>
            <Button @click="store.openModal = true" text="Подобрать машину" />
        </div>
        <div class="stagesWork__car">
            <img src="@/assets/img/stagesWork/car.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.stagesWork {
    background-color: var(--blackLight);
    padding-top: 40px;
    padding-bottom: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    &__text {
        margin-top: 41px;
        font-weight: 400;
        font-size: 20px;
        line-height: 143.61%;
        color: #ffffff;
        text-align: center;
        font-style: normal;
        width: 515px;

        span {
            font-weight: 700;
        }
    }

    &__steps {
        margin-top: 25px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    &__step {
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        position: relative;
        width: fit-content;
        z-index: 10;

        &--content {
            position: absolute;
            width: 383px;
            background-repeat: no-repeat;
            background-size: 100% 100%;

            &--1 {
                background-image: url('../../assets/img/stagesWork/step1.png');
            }

            &--2 {
                background-image: url('../../assets/img/stagesWork/step2.png');
            }

            &--3 {
                background-image: url('../../assets/img/stagesWork/step3.png');
            }

            &--4 {
                background-image: url('../../assets/img/stagesWork/step4.png');
            }

            &--5 {
                background-image: url('../../assets/img/stagesWork/step5.png');
            }

            &--6 {
                background-image: url('../../assets/img/stagesWork/step6.png');
            }
        }

        &--name {
            font-weight: 700;
            font-size: 16px;
            line-height: 128.61%;
            text-transform: uppercase;
            color: #EDEDED;
        }

        &--text {
            margin-top: 27px;
            font-weight: 400;
            font-size: 16px;
            line-height: 147.11%;
            color: #EDEDED;
        }

        &--list {
            margin-top: 30px;
            color: #EDEDED;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 147.11%;

            li {
                list-style-type: none;

                &::before {
                    content: '✅';
                }
            }
        }

        &--done {
            background-color: #C6F3B6;
            border: 7px solid #D9FFCC;
            border-radius: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 26px;
            height: 26px;

            &--1 {
                border: 8px solid #D9FFCC;
                width: 33px;
                height: 33px;
            }
        }

        &--right {
            margin: 0 auto;

            .stagesWork__step--done {
                order: -1;
            }

            .stagesWork__step--content {
                right: -530px;
                padding: 20px 38px 20px 41px;
                width: 521px;

                &--1 {
                    right: 36px;
                }
            }
        }

        &--left {
            margin: 0 auto;

            .stagesWork__step--content {
                right: 40px;
                padding: 25px 63px 34px 34px;
                width: 544px;
            }
        }
    }

    &__arrow {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-top: 71px;
        padding-bottom: 80px;
        gap: 95px;

        &-img {
            position: absolute;
            top: 0;
        }
    }

    &__weeks {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;

        &-text {
            font-style: normal;
            font-weight: 900;
            font-size: 151px;
            line-height: 97.11%;
            color: rgba(255, 255, 255, 0.1);
            letter-spacing: 0.015em;
            text-transform: uppercase;
            font-family: 'Druk Text Wide Cyr';

            span {
                font-style: normal;
                font-weight: 900;
                font-size: 151px;
                line-height: 97.11%;
                color: rgba(255, 255, 255, 0.1);
                letter-spacing: 0.015em;
                text-transform: uppercase;
                font-family: 'Druk Text Wide Cyr';
            }
        }
    }

    &__car {
        top: 203px;
        left: 0;
        position: absolute;
        width: 82%;
        height: 71%;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    .button {
        position: absolute;
        top: 45px;
    }
}

@media(max-width: 1450px) {
    .stagesWork {

        &__car {
            top: 217px;
        }

        &__text {
            width: 709px;
        }

        &__step {

            &--list {
                font-size: 14px;
                line-height: 147.11%;
            }

            &--left {
                .stagesWork__step--content {
                    padding: 18px 35px 30px 34px;
                    width: 383px;
                }
            }

            &--right {
                .stagesWork__step--content {
                    width: 388px;
                    right: -400px;
                }
            }

            &--text {
                font-size: 14px;
                line-height: 147.11%;
            }
        }
    }
}

@media(max-width: 980px) {
    .stagesWork {

        &__weeks {

            &-text {
                text-align: center;

                span {
                    word-break: break-all;
                }
            }
        }

        .button {
            top: 43%;
        }
    }
}

@media(max-width: 852px) {
    .stagesWork {

        &__step {
            width: 100%;

            &--left {
                .stagesWork__step--content {
                    width: 300px;
                }
            }

            &--right {
                .stagesWork__step--content {
                    width: 300px;
                    right: -310px;
                }
            }

        }
    }
}

@media(max-width: 730px) {
    .stagesWork {
        align-items: flex-start;
        padding-bottom: 0;

        .global-title {
            padding-left: 16px;
        }

        &__steps {
            width: 100%;
        }

        &__weeks {

            &-text {
                font-size: 113px;
                line-height: 97.11%;
                text-align: start;

                span {

                    display: block;
                    font-size: 113px;
                    line-height: 97.11%;
                }
            }
        }

        &__arrow {
            width: 100%;
            gap: 11px;
            align-items: flex-end;
            padding: 0 15px;

            .stagesWork__step {

                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4),
                &:nth-child(5),
                &:nth-child(6) {
                    padding-right: 5px;
                }
            }

            img {
                height: 105%;
            }

            .stagesWork__arrow-img {
                position: absolute;
                top: -5%;
            }
        }

        &__step {

            &--content {

                &--2 {
                    background-image: url('@/assets/img/stagesWork/step2Mobile.png');
                }

                &--4 {
                    background-image: url('@/assets/img/stagesWork/step4Mobile.png');
                }

                &--6 {
                    background-image: url('@/assets/img/stagesWork/step6Mobile.png');
                }
            }

            &--left {

                .stagesWork__step--content {
                    width: 100%;
                }
            }

            &--right {

                .stagesWork__step--content {
                    width: 100%;
                }

                .stagesWork__step--done {
                    order: 1;
                }
            }

            &--content {
                position: static;
            }
        }

        &__text {
            width: 100%;
            padding: 0 15px;
            margin-top: 0px;
        }

    }

}

@media(max-width: 500px) {
    .stagesWork {

        &__arrow {

            &-img {
                width: 35px;
            }
        }

        &__weeks {
            width: 100%;
            padding-top: 45px;
            padding-bottom: 55px;

            &-text {
                position: absolute;
                text-align: start;
                bottom: 0;
            }

            .button {
                position: relative;
            }
        }

        &__step {

            &--left {

                .stagesWork__step--content {
                    padding: 20px 30px 20px 12px;
                }
            }

            &--right {

                .stagesWork__step--content {
                    padding: 20px 30px 20px 12px;
                }
            }
        }

    }
}
</style>