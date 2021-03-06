import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const email = sendemail => {
    return axios
    .post('users/sendemail', {
        correo: sendemail.email
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log('error' + err)
    })
}