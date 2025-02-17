import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

const initialState = {
    loading:false,
    user:null,
    error:''
}
export const AuthContext = createContext(initialState)
export default function UserContext({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{
        loading:state.loading,
        user:state.user,
        error:state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
  )
}
