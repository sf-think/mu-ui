<template>
    <div>
        <h1>Switch 组件示例</h1>
        <Demo title="常规用法" :component="Switch1Demo">
            <pre class="hljs">
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
        </Demo>
        <Demo title="disabled 用法" :component="Switch2Demo">
            <pre class="hljs">
                        <code>
&lttemplate&gt
    &ltSwitch v-model:value="bool" disabled/&gt
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
        </Demo>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from './Demo.vue'

import { defineComponent } from "vue";


export default defineComponent({
    components: { Button, Demo },
    setup() {
        return {
            Switch1Demo,
            Switch2Demo,
        }
    }
})
</script>


<style lang="scss" scoped>
</style>