<template>
    <div id="app">
        <Header />
        <HomePage />
    </div>
</template>

<script>
    import auth from './auth'
    import HomePage from './pages/home-page'
    import Header from "./components/header";

    export default {
        name: 'App',
        components: {HomePage, Header},
        data () {
            return {
                loggedIn: auth.loggedIn(),
            }
        },
        created () {
            auth.onChange = loggedIn => {
                this.loggedIn = loggedIn
            }
        },
        beforeCreate() {

        }
    }
</script>

<style>

</style>

