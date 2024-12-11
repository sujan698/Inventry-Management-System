import { createContext, useState } from "react";

interface AuthContextType{
    token? :string|null;
    isAuthenticated:boolean;
    login:(token:string)=>void;
    logout?:()=>void;
}
 const AuthContext= createContext<AuthContextType>({
    token:null,
    isAuthenticated:false,
    login:()=>{},
    logout:()=>{}

})
 //check if the user is authenticated
 const AuthProvider=({children}:any)=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);
const token =localStorage.getItem('token');

    const login=(token:string)=>{
        if(token){
        localStorage.setItem("token",token);
        setIsAuthenticated(true);
        }
    }
    const logout=()=>{
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }
    return(
        <AuthContext.Provider value={{token,isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

 export {AuthProvider, AuthContext};


 //steps to create contextAPI
 //create a context variable using createcontext() function
 //create a provider component that will wrap the entire application
 // export the context variable and the provider
 //user ko context api banaune  ani user ko id bata user ko information herna milne banaune