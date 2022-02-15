<template>
    <div>Dialog 的文档</div>
    <div>示例 1</div>
    <Button @click="toggle">toggle</Button>
    <!-- 旧写法 -->
    <!-- <Dialog :visible="x" @update:visible="x = $event"></Dialog> -->
    <!-- 简化版 -->
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
        <template v-slot:title>
            <strong>标题</strong>
        </template>
        <template v-slot:content>
            <p>第一行字</p>
            <p>第二行字</p>
        </template>
    </Dialog>
    <h1>示例 2</h1>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";

import { defineComponent, ref, h } from "vue";
import { openDialog } from "../lib/openDialog";

export default defineComponent({
    components: {
        Dialog, Button
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            return false
        }
        const f2 = () => {
        }
        const showDialog = () => {
            openDialog({
                title: "标题",
                content: "内容",
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return { x, toggle, f1, f2, showDialog }
    }
})

</script>

<style lang="sass">

</style>
