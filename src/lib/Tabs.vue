<template>
    <div class="mu-tabs">
        <div class="mu-tabs-nav" ref="container">
            <div
                class="mu-tabs-nav-item"
                :class="{ selected: t === selected }"
                v-for="(t, index) in titles"
                :ref="el => { if (el) navItems[index] = el }"
                :key="index"
                @click="select(t)"
            >{{ t }}</div>
            <div class="mu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="mu-tabs-content">
            <component
                class="mu-tabs-content-item"
                :class="{ selected: c.props.title === selected }"
                v-for="(c, index) in defaults"
                :is="c"
                :key="index"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue';
import Tab from './Tab.vue'

export default defineComponent({
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const navItems = ref<HTMLDivElement[]>([])
        const indicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)
        const x = () => {
            const divs = navItems.value
            // 获取选中元素
            const result = divs.filter(div => div.classList
                .contains('selected'))[0]
            // 获取元素宽度
            const { width } = result.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            const { left: left1 } = container.value.getBoundingClientRect()
            const { left: left2 } = result.getBoundingClientRect()
            const left = left2 - left1
            indicator.value.style.left = left + 'px'
        }

        onMounted(x)
        onUpdated(x)

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
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            defaults, titles, select, navItems, indicator, container
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
        position: relative;

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
        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content {
        padding: 8px 0;
        &-item {
            display: none;
            &.selected {
                display: block;
            }
        }
    }
}
</style>