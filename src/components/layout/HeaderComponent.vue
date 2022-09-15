<template>
    <div class="container">
        <nav class="header-nav navbar">
            <div class="header-div container-fluid">
                <a class="header-a" href="#">Exchange Rate</a>
                <nav>
                    <router-link class="header-router" to="/">Home</router-link>
                    <router-link class="header-router" to="/about">About</router-link>
                </nav>
                <a
                    class="header-a"
                    href="https://github.com/ahmedmelihozdemir"
                    >GITHUB</a
                >
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header-nav{
    font: 300 1.5rem 'Courier New', Courier, monospace;
    background-color: transparent;
    padding: 10px;
    display:fixed;
    a {
        padding: 30px;
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
    .header-div{
        display: flex;
        justify-content: space-between;
        background-color: rgba(167, 107, 228, 0.455);
        border-radius: 10px;
        .header-a{
            color: purple;
            text-decoration: none;
            &:hover{
                color: #2e92d5;
            }
        }
        .header-router{
            padding: 30px;
            font-weight: normal;
            color: #2c3e50;
            text-decoration: none;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
</style>
