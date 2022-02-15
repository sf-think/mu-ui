<template>
    <div>Tabs 的文档</div>
    <Tabs></Tabs>
    <Tab></Tab>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default defineComponent({
    components: { Tabs, Tab }

})
</script>