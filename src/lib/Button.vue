<template>
    <button class="mu-button" :class="classes">
        <slot />
    </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: "normal"
        }, level: {
            type: String,
            default: "normal",
        },
    },
    setup(props) {
        const { theme, size, level } = props
        const classes = computed(() => {
            return {
                [`mu-theme-${theme}`]: theme,
                [`mu-size-${size}`]: size,
                [`mu-level-${level}`]: level,
            }
        })
        return { classes }
    }
})
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
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
    transition: background 250ms;

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
    &.mu-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;
        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
    }
    &.mu-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
    &.mu-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }
    &.mu-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    &.mu-theme-button {
        &.mu-level-main {
            background: $blue;
            color: white;
            border-color: $blue;
            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }
        &.mu-level-danger {
            background: $red;
            border-color: $red;
            color: white;
            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }
    &.mu-theme-link {
        &.mu-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
    &.mu-theme-text {
        &.mu-level-main {
            color: $blue;
            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }
        &.mu-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
}
</style>