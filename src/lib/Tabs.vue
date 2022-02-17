<template>
    <div>Tabs 组件</div>
    <!-- 展示子内容 -->
    <component :is="defaults[0]"></component>
    <component :is="defaults[1]"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tab from './Tab.vue'

export default defineComponent({
    setup(props, context) {
        // 获取子组件内容
        const defaults = context.slots.default()
        defaults.forEach(tag =>{
            // Tab 组件本质是一个对象
            if(tag.type !== Tab) {
                throw new Error('Tabs 子组件必须为 Tab')
            }
        })
        return {
            defaults
        }
    }
})
</script>