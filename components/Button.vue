<script setup lang="ts">
defineProps<{
    text?: string
}>()
</script>

<template>
    <button class="button">{{ text }}</button>
</template>

<style lang="scss">
.button {
    background: linear-gradient(98.02deg, #78091D -42.19%, #E10024 101.54%);
    box-shadow: 0px 15px 71px rgba(177, 55, 87, 0.58);
    border-radius: 108px;
    text-align: center;
    padding: 29px 56px;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background: linear-gradient(#EF002B);
    }

    &--black {
        font-size: 15px;
        line-height: 128.61%;
        color: #000000;
        padding: 21px 100px 22px 100px;
        border: 1px solid #000000;
        background: transparent;
        box-shadow: none;

        &:hover {
            background: #000000;
            color: #FFFFFF;
        }


        &:focus {
            border: 1px solid #000000;
        }
    }

    &--white {
        color: #FFFFFF;
        border: 1px solid #ffffff;
        background: transparent;
        box-shadow: none;
        padding: 21px 178px 22px 178px;
    }
}
</style>