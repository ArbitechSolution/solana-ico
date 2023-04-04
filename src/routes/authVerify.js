
import jwt from "jsonwebtoken";

export const authVerify = () => {
    if(localStorage.token){
        let {exp} = jwt.decode(localStorage.token);
        console.log("expire", exp );
        if (exp * 1000 < Date.now()) {
         
            return false
        }else{
           return true
        }
    }else{
        window.location.href = "/login";
    }
}