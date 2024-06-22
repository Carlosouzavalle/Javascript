/* Uma função callback ela é passada para ser executada dps de alguns segundos */
const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {  
        const error = false


        if(error) {
            return onError(new Error('error in loggin!'))
        }
        console.log('User Logged!')
        onSucess([ email ])
    }, 1500);

}


const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000);
}

const user = loginUser('teste123@gmail.com', '123456', (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({videos})
    })
}, (error) => {
    console.log({error})
})



console.log([user])


