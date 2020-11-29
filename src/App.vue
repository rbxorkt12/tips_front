<template>
<div id="app">
    <Navbar></Navbar>
    <Listpost></Listpost>
</div>
</template>

<script>
// import Listpost from './components/Listpost'
import Navbar from './components/Navbar'
import Listpost from './components/Listpost'
export default {
    name: 'App',
    components: {
        Navbar,
        Listpost

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>
