<template>
    <div>Tabs 的文档</div>
    <Tabs>
        <Tab title="导航 1">内容 1</Tab>
        <Tab title="导航 2">内容 2</Tab>
    </Tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default defineComponent({
    components: { Tabs, Tab }

})
</script>