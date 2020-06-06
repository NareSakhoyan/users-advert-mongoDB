<template>
    <div id="advertsList">
        <Advert v-for="(i, index) of this.advertsList" :advertDetails="i" :key="`advert${index}`"/>
    </div>
</template>

<script>
    import Advert from "./advert";

    export default {
        name: "AdvertList",
        props: {
            advertsList: Array
        },
        components: {Advert}
    }
</script>

<style scoped>

</style>
