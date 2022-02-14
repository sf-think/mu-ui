<template>
    <div>Button 示例</div>
    <h1>示例 1</h1>
    <div>
        <Button>Hello</Button>
        <Button @click="onClick">Hello</Button>
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
    <div>
        <Button theme="link" size="big">大按钮</Button>
        <Button theme="link">普通按钮</Button>
        <Button theme="link" size="small">小按钮</Button>
    </div>
    <div>
        <Button theme="text" size="big">大按钮</Button>
        <Button theme="text">普通按钮</Button>
        <Button theme="text" size="small">小按钮</Button>
    </div>
    <h1>示例3</h1>
    <div>
        <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
        <div>
            <Button theme="link" level="main">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" level="danger">危险链接按钮</Button>
        </div>
        <div>
            <Button theme="text" level="main">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button theme="text" level="danger">危险文字按钮</Button>
        </div>
    </div>
    <h1>示例4</h1>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <h1>示例5</h1>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
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