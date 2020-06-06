<template>
    <div id="header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
                Logo
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li class="nav-item active"><router-link class="nav-link" to="/">About</router-link></li>
                </ul>
                <router-link  v-if="loggedIn" v-bind:to="`/profile/${userID}`">
                    <a class="navbar-brand">
                        <img src="../assets/profile.png" width="30" height="30" alt="" loading="lazy">
                    </a>
                </router-link>
                <router-link v-if="loggedIn" to="/logout"><button type="button" class="btn btn-success" @click="logout()">Log out</button></router-link>
                <router-link v-if="!loggedIn" to="/login"><button type="button" class="btn btn-success loginButton">Log in</button></router-link>
                <router-link v-if="!loggedIn" to="/register"><button type="button" class="btn btn-primary">Sign Up</button></router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    import auth from "../auth";

    export default {
        name: "Header",
        data () {
            return {
                loggedIn: auth.loggedIn(),
                userID: auth.loggedIn()? this.getUserID():0
            }
        },
        methods: {
            getUserID(){
                let tmp = auth.getToken();
                return tmp.slice(5, tmp.length);
            },
            setUserID() {
                this.userID = this.getUserID();
            },
            logout(){
                auth.logout()
            },
        },
        created () {
            auth.onChange = loggedIn => {
                this.loggedIn = loggedIn
            }
        },
        updated() {
            if (this.loggedIn){
                this.setUserID();
            }
        },

    }
</script>

<style>
    #header{
        height: 100px;
        width: auto;
    }
    .loginButton{
        margin-right: 10px;
    }
</style>
