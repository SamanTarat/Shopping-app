export const validate = (type , data) => {
    
    const errors = {};

    if (type === "signup"){
        if (!data.username.trim()){
            errors.username = "Enter any username"
        }else {
            delete errors.username;
        }
    
        if (!data.confirmPassword){
            errors.confirmPassword = "Confirm your password"
        }else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "passwords do not match"
        }else {
            delete errors.confirmPassword;
        }
    
        if (!data.agree){
            errors.agree = "Please accept our terms of services"
        }else{
            delete errors.agree;
        }
    
    }


    if (!data.email){
        errors.email = "Email required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Invalid Email Address"
    }else {
        delete errors.email
    }

    if (!data.password){
        errors.password = "password required"
    }
    else if(data.password.length < 8){
        errors.password = "password should be at least 8 characters"
    }    
    else {
        delete errors.password;
    }

    return errors;
}