import { useState, useEffect } from 'react';
const useToken=user=>{
     const [token,setToken]=useState('');
     useEffect(()=>{
 const email=user?.user?.email;
 const currentuser={email:email};
 if(email){
    fetch(` https://doctors-potal-server-module-72-production.up.railway.app/user/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentuser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('data inside useToken',data);
        const accessToken=data.token;
        localStorage.setItem('accessToken',accessToken);
        setToken(accessToken);
    })
 }
     },[user]);
     return [token];

}

export default useToken;