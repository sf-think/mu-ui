<template>
    <div>Tabs 组件</div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <!-- 展示子内容 -->
    <component v-for="(c, index) in defaults" :is="c" :key="index"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tab from './Tab.vue'

export default defineComponent({
    setup(props, context) {
        // 获取子组件内容
        const defaults = context.slots.default()
        defaults.forEach(tag => {
            // Tab 组件本质是一个对象
            if (tag.type !== Tab) {
                throw new Error('Tabs 子组件必须为 Tab')
            }
        })
        // 获取 title 内容
        const titles = defaults.map(tag => {
            return tag.props.title

        })
        return {
            defaults, titles
        }
    }
})
</script>