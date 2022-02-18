<template>
    <div class="demo">
        <h2>{{ title }}</h2>
        <div class="demo-component">
            <component :is="component"></component>
        </div>
        <div class="demo-actions">
            <Button @click="toggleCode">查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <article>
                <slot />
            </article>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import Button from '../lib/Button.vue'
import hljs from "highlight.js"

import { defineComponent } from "vue";


export default defineComponent({
    components: { Button },
    props: {
        component: Object,
        title: String,
    },
    setup() {
        // ref 创建一个内部数据 
        const bool = ref(true)
        onMounted(() => {
            hljs.initHighlightingOnLoad();
        }),
            onUpdated(() => {
                hljs.initHighlightingOnLoad();
            })

        const toggleCode = () => {
            codeVisible.value = !codeVisible.value
        }
        const codeVisible = ref(false)

        return {
            bool,
            codeVisible,
            toggleCode
        }
    }
})
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }
    &-component {
        padding: 16px;
    }
    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
        > pre {
            line-height: 1.1;
            font-family: Consolas, "Courier New", Courier, monospace;
            margin: 0;
        }
    }
}
</style>
<style lang="scss">
@import "highlight.js/styles/default.css";
</style>