import UserDataService from "./services/UserDataService";

export default {
    login (email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken () {
        return localStorage.token
    },

    logout (cb) {
        delete localStorage.token
        // delete localStorage.userID
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn () {
        return !!localStorage.token
    },

    onChange () {}
}

function pretendRequest (emailParam, passParam, cb) {
    console.log('finding by email')
    UserDataService.findWithEmail(emailParam)
        .then(response => {
            let tmp = response.data[0];
            if (tmp){
                const {id, email, pass} = tmp;
                setTimeout(() => {
                    if (emailParam === email && passParam === pass) {
                        cb({
                            authenticated: true,
                            token: Math.random().toString(36).substring(7).slice(0, 5).concat(id)
                        })
                    } else {
                        cb({ authenticated: false })
                    }
                }, 0)
                console.log(response.data);
            }
            else {
                cb({ authenticated: false })
            }

        })
        .catch(e => {
            console.log(e)
        })

}

