import React, { useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function ListUsers() {

    const ctx = useContext(UserContext)
    const { users, readUser, deleteUser } = ctx;


    useEffect(() => {
        const getResponse = async () => {
            await readUser();
            return;
        }
        getResponse()
    }, [])



    return (
        <>
            <div className="mt-4">
                <h1 className="text-center">Listado de usuarios</h1>
                {users.map((user) => {
                    return (

                        <div key={user.id} className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                <p className="card-text blockquote">{user.email}</p>
                                <button className="btn btn-primary" type="button" onClick={() => deleteUser(user.id)}>Eliminar</button>
                            </div>
                            <div className="card-footer text-muted"></div>
                        </div>
                    )
                })}
            </div>
        </>
    )

}


