import React,{ useState, useEffect,useContext } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/signUp.css"
import { Link, useNavigate } from "react-router-dom";
import { popUp } from "../functions/popUp"
import { validate } from "../functions/validate"
import { loginContext } from "../context/loginContext";


const SignUp = () => {
    
    const {data, setData, initial} = useContext(loginContext)
    
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    useEffect(() => {
        setData(initial)
    },[initial,setData])

    useEffect(()=> {
        setErrors(validate("signup",data))
    },[data , touched])

    const changeHandler = event => {
        const {name , type , value , checked} = event.target
        setData({...data , [name]: type === "checkbox" ? checked : value})
    }

    const focusHandler = event => {
        setTouched({...touched , [event.target.name] : true})
    }

    const navigate = useNavigate();

    const submitHandler = async event => {
        event.preventDefault();
        if (!Object.keys(errors).length){
            popUp("success","You have signed up successfully !")
            await new Promise( res => setTimeout(res , 3500))
            navigate('/store', {replace:true});
        }
        else{
            setTouched({...touched , 
            username : true,
            email : true ,
            password : true ,
            confirmPassword : true ,
            agree : true,
            })
            popUp("error","Invalid Data !")
        }
    }

    return (
        <div className="container" >
            <form onSubmit={submitHandler}>
                <h1>Sign Up</h1>
                <div className="formField">
                <label>Username</label>
                    <input className={(touched.username && errors.username) ? "uncompleted" : "formInput"} type="text" name="username" value={data.username} onChange={changeHandler} onFocus={focusHandler}/>
                    {touched.username && errors.username && <span>{errors.username}</span>}
                </div>
                <div className="formField">
                <label>Email</label>
                    <input className={(touched.email && errors.email) ? "uncompleted" : "formInput"} type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {touched.email && errors.email && <span>{errors.email}</span>}

                </div>
                <div className="formField">
                <label>Password</label>
                    <input className={(touched.password && errors.password) ? "uncompleted" : "formInput"} type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {touched.password && errors.password && <span>{errors.password}</span>}
                </div>
                <div className="formField">
                <label>Confirm Password</label>
                    <input className={(touched.confirmPassword && errors.confirmPassword) ? "uncompleted" : "formInput"} type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                    {touched.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className="formField">
                    <div className="checkBox">
                <label>Do you Agree with our terms ?</label>
                    <input className={(touched.agree && errors.agree) ? "uncompleted" : "formInput"} type="checkbox" name="agree" value={data.agree} onChange={changeHandler} onFocus={focusHandler} />
                    </div>
                    {touched.agree && errors.agree && <span>{errors.agree}</span>}
                </div>
                <div className="buttons">
                    <span>Already a user ? <Link to="/login">Login</Link></span>
                    <button>SignUp</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;