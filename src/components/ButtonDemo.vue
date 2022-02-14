<template>
    <div>Button 示例</div>
    <h1>示例 1</h1>
    <div>
        <Button>Hello</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../lib/Button.vue";

export default defineComponent({
    components: { Button },

})
</script>