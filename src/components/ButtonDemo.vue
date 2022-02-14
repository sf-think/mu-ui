<template>
    <div>Button 示例</div>
    <h1>示例 1</h1>
    <div>
        <Button>Hello</Button>
        <Button theme="button">Hello</Button>
        <Button theme="link">Hello</Button>
        <Button theme="text">Hello</Button>
    </div>
    <h1>示例 2</h1>
    <div>
        <Button size="big">大按钮</Button>
        <Button>普通按钮</Button>
        <Button size="small">小按钮</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../lib/Button.vue";

export default defineComponent({
    components: { Button },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return { onClick }
    }
})
</script>