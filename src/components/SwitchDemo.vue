<template>
    <div>
        <!-- $event 的值为 emit 的第二个参数 -->
        <!-- <Switch :value="y" @update:input="y = $event" /> -->
        <!-- v3 v-model 简化版-->
        <Switch v-model:value="bool"  />

    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import { defineComponent } from "vue";

export default defineComponent({
    components: { Switch },
    setup() {
        // ref 创建一个内部数据 
        const bool = ref(true)
        return { bool }
    }
})
</script>