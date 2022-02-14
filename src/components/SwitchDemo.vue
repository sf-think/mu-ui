<template>
    <div>
        <!-- $event 的值为 emit 的第二个参数 -->
        <!-- <Switch :value="y" @update:input="y = $event" /> -->
        <!-- v3 v-model 简化版-->
        <Switch v-model:value="y"  />

    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import { defineComponent } from "vue";

export default defineComponent({
    components: { Switch },
    setup() {
        const y = ref(true)
        return { y }
    }
})
</script>