<template>
    <main class="page-search">
        <h1 class="main-title">Resultados...</h1>

        <p>Contenido</p>
    </main>
</template>

<script>


export default {
    name:'SearchResults',
}
</script>


<style lang="scss" >

    .page-search{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }
    }

</style>