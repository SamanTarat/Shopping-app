import React,{ useState, useEffect,useContext} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/signUp.css"
import { Link, useNavigate } from "react-router-dom";
import { popUp } from "../functions/popUp"
import { validate } from "../functions/validate";
import { loginContext } from "../context/loginContext";

const Login = () => {

    const {data, setData , initial} = useContext(loginContext)


    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    useEffect(() => {
        setData(initial)
    }, [initial,setData])

    useEffect(()=> {
        setErrors(validate("login",data))
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
            popUp("success","You have logged in successfully !");
            await new Promise( res => setTimeout(res , 3500))
            navigate('/store' , {replace:true});
            setData({...data, username : `${data.email.slice(0,3)}`})
        }
        else{
            setTouched({...touched , 
            email : true ,
            password : true ,

            })
            popUp("error","Credentials are invalid")
        }
    }


    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <h1>Login</h1>
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
                <div className="buttons">
                    <span>Not a member ? <Link to="/signup" >SignUp</Link></span>
                    <button>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;