import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, type UserType } from "../features/user/userSlice";
import type { AppDispatch, RootState } from "../store/store";

export const User: React.FC = () => {
    const { user: users, status, error } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <h1>Users List</h1>
            <button onClick={() => dispatch(fetchUsers())}>FETCH USERS</button>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

            {users.map((user: UserType) => (
                <div key={user.id} className="user-container">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <img src={user.avatar} alt="user" width="100" />
                </div>
            ))}
        </>
    );
};
