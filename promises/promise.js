// promise concept (resolve,reject)

function sendEmail(){
    console.log('email send to the user!')
}
function register(){
    console.log('registration proccessed!!')
    let registrationSuccessful = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         console.log('registration is successful!');
         resolve();
        },2000)
}).then(()=>{
    sendEmail()
})
} 
