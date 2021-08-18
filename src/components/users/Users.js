import React, {useEffect, useState} from 'react';
import User from "./User";
import {getUser, getUsers} from "../services/user.services";


export default function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));

    }, []);
    console.log(users);
    const choose =(id) =>{
        getUser(id).then(value => setUser(value))
    }


    return (
        <div className={'wrap'}>
            {
                users.map(value => <User key={value.id} user={value} choose ={choose}/>)

            }
            <hr/>
                { user && <h2> {user.name} {user.username}</h2>
               }

        </div>
    )
}


