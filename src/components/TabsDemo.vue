<template>
    <div>Tabs 的文档</div>
    <Tabs selected="导航1">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
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