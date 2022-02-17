<template>
    <div class="mu-tabs">
        <div class="mu-tabs-nav">
            <div class="mu-tabs-nav-item" :class="{selected: t === selected}" v-for="(t, index) in titles" :key="index">{{ t }}</div>
        </div>
        <div class="mu-tabs-content">
            <component
                class="mu-tabs-content-item"
                v-for="(c, index) in defaults"
                :is="c"
                :key="index"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tab from './Tab.vue'

export default defineComponent({
    props: {
        selected: {
            type: String
        }
    },
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

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.mu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $blue;
            }
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>