<template>
    <div id="advert">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters" >
                <div class="col-md-4">
                    <div class="text-center">
<!--                    <img :src="getImage(card.imgSrc)" class="card-img" alt="...">-->
                        <img :src="advertDetails.imgSrc" class="card-img" alt="...">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body" >
                        <router-link v-if="showLink" :to="`../adverts/${advertDetails.id}`"><h5 class="card-title" >{{advertDetails.title}}</h5></router-link>
                        <h5 v-else class="card-title" >{{advertDetails.title}}</h5>
                        <p class="card-text">{{advertDetails.shortDescription}}</p>
                        <p class="card-text">{{advertDetails.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Advert",
        props: {
            advertDetails: Object
        },
        data() {
            return {
                showLink: this.$route.name == "Profile"
            }
        },
        methods: {
            // getImage(src){
            //     if (!src){
            //         src = './logo.png'
            //     }
            //     let image = require.context('@/assets/', false)
            //
            //     return image(src)
            // }
        }
    }
</script>

<style scoped>
</style>
