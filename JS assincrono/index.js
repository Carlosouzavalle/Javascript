/* Uma função callback ela é passada para ser executada dps de alguns segundos */
const loginUser = (email, password, callback) => {
    setTimeout(() => {  
        console.log('User Logged!')
        callback([ email ])
    }, 1500);
}

const user = loginUser('teste123@gmail.com', '123456', (user) => {
    console.log({user})
})
console.log([user])


