import { toast } from "react-toastify";

export const popUp = (type , text) => {
    if (type === "success"){
        toast.success(text,{theme:"dark" , autoClose:3000})
    }
    else {
        toast.error(text , {theme:"dark" , autoClose:3000})
    }
}