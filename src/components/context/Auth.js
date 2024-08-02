"use client"

import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

const SessionContext = React.createContext();

function SessionProvider(props) {
    const [session, setSession] = useState()
    useEffect(() => {
        async function decodeJWT(token) {
            try {
                if (token) {
                    const decoded = jwt.decode(token);
                    console.log('decoded session', decoded)
                    return setSession(decoded);
                } else {
                    return setSession('unlogged');
                }
            } catch (error) {
                console.error('Error decoding JWT:', error);
                return setSession('unlogged');
            }
        }

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            decodeJWT(token);
        }
        else {
            console.log('object no data')
        }
    }, [typeof window !== 'undefined' && localStorage.getItem('token')]);

    return (
        <SessionContext.Provider
            value={{
                session
            }}>
            {props.children}
        </SessionContext.Provider>
    );
}

export { SessionProvider, SessionContext };