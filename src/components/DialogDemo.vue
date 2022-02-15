<template>
    <div>Dialog 的文档</div>
    <div>示例 1</div>
    <Button @click="toggle">toggle</Button>
    <!-- 旧写法 -->
    <!-- <Dialog :visible="x" @update:visible="x = $event"></Dialog> -->
    <!-- 简化版 -->
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2"></Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { defineComponent, ref } from "vue";

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
        return { x, toggle, f1, f2 }
    }
})

</script>

<style lang="sass">

</style>
