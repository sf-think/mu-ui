<template>
    <div class="topnav">
        <div class="logo">
            <router-link to="/">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-logo" />
                </svg>
            </router-link>
        </div>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
            <use xlink:href="#icon-menu" />
        </svg>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue"
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        // inject 可以获取到父组件通过 provide 传过来的变量
        const asideVisible = inject<Ref<boolean>>('asideVisible') // get
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value
        }
        return { toggleAside }
    }
})
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    > .logo {
        max-width: 6em;
        margin-right: auto;
        > a > svg {
            width: 32px;
            height: 32px;
        }
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
    > .toggleAside {
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    @media (max-width: 500px) {
        > .logo {
            margin: 0 auto;
        }
        > .menu {
            display: none;
        }
        > .toggleAside {
            display: inline-block;
        }
    }
}
</style>