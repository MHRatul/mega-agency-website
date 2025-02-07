import { createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const auth =getAuth()
    const value = {}
    return (
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;