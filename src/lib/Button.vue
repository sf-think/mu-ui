<template>
    <div>
        <!-- 批量绑定属性 -->
        <button v-bind="rest">
            <slot />
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    // 取消默认绑定
    inheritAttrs: false,
    setup(props, context){
        // ...rest 为拓展操作符，值为除了 size 其他的属性
        // $attrs 或 context.attrs 可以获取所有属性
        const {size, ...rest} = context.attrs
        return {size, rest}
    }
})
</script>