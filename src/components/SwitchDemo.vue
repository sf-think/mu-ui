<template>
    <div>
        <h1>Switch 组件示例</h1>
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
                <component :is="Switch1Demo"></component>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <article class="markdown-body">
                    <pre>
                        <code>
&lttemplate&gt
    &ltSwitch v-model:value="bool" /&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Switch from '../lib/Switch.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Switch,
    },
    setup() {
        const bool = ref(false)
        return {
            bool
        }
    }
}
&lt/script&gt
                        </code>
                    </pre>
                </article>
            </div>
        </div>
        <div class="demo">
            <h2>支持 disabled</h2>
            <div class="demo-component">
                <component :is="Switch2Demo"></component>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <article class="markdown-body">
                    <pre>
                        <code>
&lttemplate&gt
    &ltSwitch v-model:value="bool" disabled /&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Switch from '../lib/Switch.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Switch,
    },
    setup() {
        const bool = ref(false)
        return {
            bool
        }
    }
}
&lt/script&gt
                        </code>
                    </pre>
                </article>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'

import { defineComponent } from "vue";

export default defineComponent({
    components: { Button },
    setup() {
        // ref 创建一个内部数据 
        const bool = ref(true)
        return {
            bool,
            Switch1Demo,
            Switch2Demo
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