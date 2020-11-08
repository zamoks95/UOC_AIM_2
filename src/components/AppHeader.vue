<template>
    <header class="header">
        Cabecera
    </header>
</template>


<script>
    export default {
        name:'AppHeader',
    }
</script>


<style lang="scss">
    .header {
        background: white;
        top: 0px;
        box-shadow: 0 4px 8px 0 rgba(13, 10, 44, 0.04);  
        position: fixed;
        width: 100%;
        z-index: 100;
    }
</style>