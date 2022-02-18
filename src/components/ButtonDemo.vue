<template>
    <h2>Button 示例</h2>
    <Demo title="常规用法" :component="Button1Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
    &ltdiv&gt
        &ltButton&gt你好&lt/Button&gt
        &ltButton theme="link"&gt你好&lt/Button&gt
        &ltButton theme="text"&gt你好&lt/Button&gt
    &lt/div&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Button from "../lib/Button.vue";
export default {
    components: {
        Button
    }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>

    <Demo title="支持 size" :component="Button2Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
&ltdiv&gt
  &ltdiv&gt
    &ltButton size="big"&gt大大大&lt/Button&gt
    &ltButton&gt普普通&lt/Button&gt
    &ltButton size="small"&gt小小小&lt/Button&gt
  &lt/div&gt
  &ltdiv&gt
    &ltButton theme="link" size="big"&gt大大大&lt/Button&gt
    &ltButton theme="link"&gt普普通&lt/Button&gt
    &ltButton size="small" theme="link"&gt小小小&lt/Button&gt
  &lt/div&gt
  &ltdiv&gt
    &ltButton size="big" theme="text"&gt大大大&lt/Button&gt
    &ltButton theme="text"&gt普普通&lt/Button&gt
    &ltButton size="small" theme="text"&gt小小小&lt/Button&gt
  &lt/div&gt
&lt/div&gt
&lt/template&gt
                        </code>
                    </pre>
    </Demo>
    <Demo title="支持 level" :component="Button3Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
&ltdiv&gt
  &ltdiv&gt
    &ltButton level="main"&gt主要按钮&lt/Button&gt
    &ltButton&gt普通按钮&lt/Button&gt
    &ltButton level="danger"&gt危险按钮&lt/Button&gt
  &lt/div&gt
  &ltdiv&gt
    &ltButton theme="link" level="main"&gt主要链接按钮&lt/Button&gt
    &ltButton theme="link"&gt普通链接按钮&lt/Button&gt
    &ltButton theme="link" level="danger"&gt危险链接按钮&lt/Button&gt
  &lt/div&gt
  &ltdiv&gt
    &ltButton theme="text" level="main"&gt主要文字按钮&lt/Button&gt
    &ltButton theme="text"&gt普通文字按钮&lt/Button&gt
    &ltButton theme="text" level="danger"&gt危险文字按钮&lt/Button&gt
  &lt/div&gt
&lt/div&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>
    <Demo title="支持 disabled" :component="Button4Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
&ltButton disabled&gt禁用按钮&lt/Button&gt
&ltButton theme="link" disabled&gt禁用链接按钮&lt/Button&gt
&ltButton theme="text" disabled&gt禁用按钮&lt/Button&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>
    <Demo title="支持显示加载中" :component="Button5Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
&ltdiv&gt
  &ltButton loading&gt加载中&lt/Button&gt
  &ltButton&gt加载完毕&lt/Button&gt
&lt/div&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";

export default defineComponent({
    components: {
        Demo
    },
    setup() {
        return {
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo
        }
    }
})
</script>