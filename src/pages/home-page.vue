<template>
    <div id="home">
        <div class="col-3 offset-1">
            <Categories />
        </div>
        <div class="col-8">
            <AdvertsList :advertsList = "advertsList" />
        </div>
    </div>
</template>

<script>
    import Categories from "../components/catogories";
    import AdvertsList from "../components/adverts-list";
    import { /*mapState,*/ mapActions, mapGetters } from 'vuex'

    export default {
        name: "Home",
        data() {
            return {

            }
        },
        components: {
            Categories,
            AdvertsList
        },
        created() {
            this.getAllAdverts()
        },
        computed: {
            // allAdverts(){
            //     return this.$store.state.allAdverts
            // },
            // ...mapState({advertsList: 'allAdverts' }),
            ...mapGetters({advertsList: 'allAdverts'})
        },
        methods: {
            ...mapActions(["getAllAdverts"]),
            getAdverts () {
                this.getAllAdverts()
            }
            //dispatching
            // async retrieveAdverts(){
            //     this.advertsList = this.$store.state.allAdverts
            // },
        },
        // serverPrefetch() {
        //     return this.retrieveAdverts()
        // },
    }


</script>

<style scoped>

    #home{
        display: flex;
        flex-direction: row;
    }

</style>
