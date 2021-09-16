import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function FormUser() {

    const ctx = useContext(UserContext)
    const { users, addUser } = ctx

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const sendData = (e) => {
        e.preventDefault()
        if(users.length > 2) {
            alert("No puedes agregar más usuarios")
        }
        else {
            addUser(user)
        }
    }



    return (

        // <div className=" mt-5">
        //     <h1>Crea un usuario</h1>
        //     <form
        //         onSubmit={ (event) => {
        //             sendData(event)
        //         }} 
        //     >
        //     <h2>Nombre:</h2>
        //     <input 
        //     name="first_name"
        //     onChange={ (event) => {
        //         handleChange(event)
        //     }}
        //     placeholder="Escribe tu nombre"
        //     />
        //     <h2>Apellido:</h2>
        //     <input 
        //     name="last_name"
        //     onChange={ (event) => {
        //         handleChange(event)
        //     }}
        //     placeholder="Escribe tu apellido"
        //     />
        //     <h2>Email:</h2>
        //     <input  
        //     name="email"
        //     onChange={ (event) => {
        //         handleChange(event)
        //     }}
        //     placeholder="Escribe tu email"
        //     className="form-label"
        //     />
        //     <button type="submit" className="btn btn-primary" >
        //         <span >Crear Usuario</span>
        //     </button>
        //     </form>
        // </div>
        <>
            <h1>Crea un usuario</h1>
            <form onSubmit={(event) => {
                sendData(event)
            }}
            >
                
                <div className="mb-3">
                    <label  className="form-label">Nombre:</label>
                    <input className="form-control" id="exampleFormControlTextarea1" rows="3" name="first_name" placeholder="Escribe tu nombre" onChange={(event) => {
                        handleChange(event)
                    }} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Apellido:</label>
                    <input className="form-control" id="exampleFormControlTextarea1" rows="3" name="last_name" placeholder="Escribe tu apellido" onChange={(event) => {
                        handleChange(event)
                    }} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" onChange={(event) => {
                        handleChange(event)
                    }} />
                </div>
                <button type="submit" className="btn btn-primary" >
                    <span >Crear Usuario</span>
                </button>
            </form>
        </>
    )
}

