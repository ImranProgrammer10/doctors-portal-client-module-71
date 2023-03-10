import React, { useEffect, useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AllBooking = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
   
 

    useEffect(() => {
        fetch(' https://doctors-potal-server-module-72-production.up.railway.app/booking/admin')
            .then(res => res.json()).then(data => setAppointments(data));
    }, [])

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooking;