<template>
    <h2>Dialog 的文档</h2>
    <Demo title="常规使用" :component="Dialog1Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
&ltdiv&gt
  &ltButton @click="toggle"&gt打开对话框&lt/Button&gt
  &ltDialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"&gt
    &lttemplate v-slot:content&gt
      &ltstrong&gthi&lt/strong&gt
      &ltdiv&gthi2&lt/div&gt
    &lt/template&gt
    &lttemplate v-slot:title&gt
      &ltstrong&gt加粗的标题&lt/strong&gt
    &lt/template&gt
  &lt/Dialog&gt
&lt/div&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () =&gt {
      x.value = !x.value
    }
    const f1 = () =&gt {
      return false
    }
    const f2 = () =&gt {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>

    <Demo title="一键打开 Dialog" :component="Dialog2Demo">
        <pre class="hljs">
                        <code>
&lttemplate&gt
&ltdiv&gt
  &ltButton @click="showDialog"&gt打开对话框&lt/Button&gt
&lt/div&gt
&lt/template&gt

&ltscript lang="ts"&gt
import Button from '../lib/Button.vue'
import {
  ref,
  h
} from 'vue'
import {
  openDialog
} from '../lib/openDialog'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () =&gt {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
&lt/script&gt
                        </code>
                    </pre>
    </Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';

import { defineComponent, ref, h } from "vue";

export default defineComponent({
    components: {
        Demo
    },
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo
        }

    }
})

</script>

<style lang="sass">

</style>
