import { useState, useEffect } from 'react';
const useAdmin=user=>{
const [adminLoading,setAdminLoading]=useState(true);
    const [admin,setAdmin]=useState(false);
    useEffect(()=>{
        const email=user?.email;
        if(email){
            fetch(` https://doctors-potal-server-module-72-production.up.railway.app/admin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
               
            })
            .then(res=>res.json())
            .then(data=>{
                
                setAdmin(data.admin);
                setAdminLoading(false);
            })
        }
    },[user])
    return [admin,adminLoading]
}

export default useAdmin;