<template>
    <div class="mu-tabs">
        <div class="mu-tabs-nav" ref="container">
            <div
                class="mu-tabs-nav-item"
                :class="{ selected: t === selected }"
                v-for="(t, index) in titles"
                :key="index"
                :ref="el => { if (el) navItems[index] = el }"
                @click="select(t)"
            >{{ t }}</div>
            <div class="mu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="mu-tabs-content">
            <component :key="current.props.title" :is="current" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, ref } from 'vue';
import Tab from './Tab.vue'

export default defineComponent({
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const navItems = ref([])
        const indicator = ref(null)
        const container = ref(null)
        const x = () => {
            const divs = navItems.value
            // 获取选中元素
            const result = divs.filter(div => div.classList
                .contains('selected'))[0]
            // el.getBoundingClientRect() 获取元素宽高和位置
            const { width } = result.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            // 析构赋值重命名
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
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
        })
        // 获取 title 内容
        const titles = defaults.map(tag => {
            return tag.props.title

        })
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            defaults, current, titles, select, navItems, indicator, container
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
    }
}
</style>