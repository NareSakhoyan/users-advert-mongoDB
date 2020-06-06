<template>
    <div id="categories">
        <div class="menu">
            <ul>
                <li v-for="(category, index) in categoriesList" :key="index" @click="selectCategory(category)">{{category}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Categories",
        data () {
            return {
                categoriesList: ['Apartments', 'Houses', 'Land', 'Commercial Properties ', 'Garages', 'Other']
            }
        },
        methods: {
            selectCategory(category){
                console.log(category)
            }
        }
    }
</script>

<style scoped>
    ul li{
        list-style-type: none;
        margin-bottom: 16px;
    }
    .menu{
        box-shadow: 2px 0 #2c3e50;
        overflow: hidden;
    }
</style>
