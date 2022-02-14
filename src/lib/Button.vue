<template>
    <button class="mu-button" :class="`mu-theme-${theme}`">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    },
})
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.mu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    // 合并空白符
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    // sass fade-out 函数，使颜色更加透明
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    // 除第一个 mu-button 以外的 mu-button
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }
    &:focus {
        outline: none;
    }
    // 兼容 firefox
    &::-moz-focus-inner {
        border: 0;
    }
}
</style>