import { useReducer, useEffect } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import clientAxios from "../Config/axios";

const UserState = (props) => {
    const initialState = {
        users: [],
    };

    const [globalState, dispatch] = useReducer(UserReducer, initialState)

    const addUser = async (data) => {
        const { first_name, last_name, email} = data;
        try {
            const res = await clientAxios.post('http://localhost:3004/users',
                {
                    first_name,
                    last_name,
                    email
                }
            );
            dispatch({
                type: "ADD_USER",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        };
    };

    const readUser = async () => {
        try {
            const res = await clientAxios.get('http://localhost:3004/users')
            // console.log(res)
            dispatch(
                {
                    type: "READ_USERS",
                    payload: res.data
                }
            );
        } catch (error) {
            console.log(error)
        };
    };

    const deleteUser = async(data) => {

        const res = await clientAxios.get('http://localhost:3004/users'); 
        dispatch({
            type: "DELETE_USER",
            payload: data
        }) 
    };

    return (
        <UserContext.Provider
            value={{
                users: globalState.users,
                addUser,
                readUser,
                deleteUser 
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
};
export default UserState