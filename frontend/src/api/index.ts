import axios from "axios";

const api=axios.create({
    baseURL:'http://localhost:3000',
});
api.interceptors.request.use((config)=>{
    config.headers.Authorization=localStorage.getItem('token');
    const token="";
    config.headers.Authorization=`Bearer ${token}`;
    config.headers['Content-Type']='application/json';
    return config;

})
export{api};