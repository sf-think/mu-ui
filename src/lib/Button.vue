<template>
    <button class="mu-button" :class="`theme-${theme}`">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    },
})
</script>

<style lang="scss" scoped>
</style>