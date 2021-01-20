export default{
    login(){},
    signup(context,payload){
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDIamecV6plqHkyX_yACSFr2mxKXsSjTuc',{
            method:'POST',
            body:JSON.stringify({
                email :payload.email,
                password : payload.password,
                returnSecureToken : true
            })

        })

    }
}