<script setup>
</script>

<template>
    <section class="stagesWork">
        <div class="global-title white">этапы работы</div>
        <div class="stagesWork__steps">
            <div class="stagesWork__arrow">
                <div class="stagesWork__step stagesWork__step--left">
                    <div class="stagesWork__step--content stagesWork__step--content--1">
                        <p class="stagesWork__step--name">1. подбор автомобиля</p>
                        <p class="stagesWork__step--text">Специалисты NLC подбирают вам авто по необходимым параметрам на
                            площадках Европы.</p>
                    </div>
                    <div class="stagesWork__step--done stagesWork__step--done--1">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
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
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <div class="stagesWork__step stagesWork__step--left">
                    <div class="stagesWork__step--content stagesWork__step--content--3">
                        <p class="stagesWork__step--name">3. проверка автомобиля</p>
                        <p class="stagesWork__step--text">Мы проводим полную проверку автомобиля перед его приобретением!
                        </p>
                        <ul class="stagesWork__step--list">
                            <li class="stagesWork__step--item">Видообзор машины;</li>
                            <li class="stagesWork__step--item">Назначаем встречи с продавцами;</li>
                            <li class="stagesWork__step--item">Проводим техническую и юридическую проверки авто.</li>
                        </ul>
                    </div>
                    <div class="stagesWork__step--done">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <div class="stagesWork__step stagesWork__step--right">
                    <div class="stagesWork__step--content stagesWork__step--content--4">
                        <p class="stagesWork__step--name">4. оплата автомобиля в Европе</p>
                        <p class="stagesWork__step--text">У компании NLC открыты представительства в Польше, Германии и
                            Италии. Мы быстро и беспрепятственно оплачиваем автомобиль и забираем его у дилера.</p>
                    </div>
                    <div class="stagesWork__step--done">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <div class="stagesWork__step stagesWork__step--left">
                    <div class="stagesWork__step--content stagesWork__step--content--5">
                        <p class="stagesWork__step--name">5. доставка автомобилей из Европы</p>
                        <p class="stagesWork__step--text">Мы доставляем автомобиль автовозом от дилера до клиента.</p>
                    </div>
                    <div class="stagesWork__step--done">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <div class="stagesWork__step stagesWork__step--right">
                    <div class="stagesWork__step--content stagesWork__step--content--6">
                        <p class="stagesWork__step--name">6. растаможка автомобиля</p>
                        <p class="stagesWork__step--text">Клиент получает полностью растаможенный, юридически и технически
                            чистый автомобиль, готовый к постановке на РФ учет. Также NLC делает ЭПТС и СБКТС.</p>
                    </div>
                    <div class="stagesWork__step--done">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <img class="stagesWork__arrow-img" src="../../assets/img/stagesWork/arrow.png" alt="">
            </div>
        </div>
        <p class="stagesWork__text">
            <span>Наш подход</span> заключается в том, чтобы полностью удовлетворить потребности каждого клиента и сделать
            процесс
            покупки автомобиля максимально простым и удобным. Мы гарантируем максимальную прозрачность сделок и лучшие цены
            на автомобили!
            <br><br>
            Свяжитесь с нами, и мы поможем вам подобрать автомобиль вашей мечты!
        </p>
        <div class="stagesWork__weeks">
            <p class="stagesWork__weeks-text">2 недели</p>
            <Button text="Подобрать машину" />
        </div>
        <div class="stagesWork__car">
            <img src="../../assets/img/stagesWork/car.png" alt="">
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

    &__text {
        margin-top: 41px;
        font-weight: 400;
        font-size: 15px;
        line-height: 137.11%;
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
            .stagesWork__step--done {
                order: -1;
            }

            .stagesWork__step--content {
                left: 40px;
                padding: 20px 38px 20px 41px;
                width: 521px;
            }
        }

        &--left {
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
        }
    }

    &__car {
        top: 203px;
        left: 0;
        position: absolute;
        width: 82%;
        height: 71%;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .button {
        position: absolute;
        top: 45px;
    }
}
</style>