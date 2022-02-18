<template>
    <h1>Tabs 组件示例</h1>
    <Demo :component="Tabs1Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
    &ltTabs v-model:selected="x"&gt
        &ltTab title="导航1"&gt内容1&lt/Tab&gt
        &ltTab title="导航2"&gt内容2&lt/Tab&gt
    &lt/Tabs&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Tabs,
        Tab
    },
    setup() {
        const x = ref('导航2')
        return {
            x
        }
    }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default defineComponent({
    components: { Demo },
    setup() {
        return {
            Tabs1Demo
        }
    }
})
</script>