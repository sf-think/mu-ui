<template>
    <button class="mu-Switch" @click="toggle" :class="{ 'mu-checked': value }">
        <span></span>
    </button>
</template>

<script lang="ts">
import { ref } from "vue"
import { defineComponent } from "vue";

export default defineComponent({
    // props 接收父组件传过来的 value
    props: {
        value: Boolean
    },
    // 在 setup 里 return 一个函数的作用与 methods 一致
    setup(props, context) {
        const toggle = () => {
            // 事件名必须以 update: 开头
            context.emit('update:value', !props.value)
        }
        return { toggle }
    }
})
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.mu-Switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    > span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: all 250ms;
    }
    &.mu-checked {
        background: #1890ff;
        > span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        > span {
            width: $h2 + 4px;
        }
    }
    &.mu-checked:active {
        > span {
            margin-left: -4px;
        }
    }
}
</style>