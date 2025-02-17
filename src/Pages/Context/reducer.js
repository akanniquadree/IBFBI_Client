


export const reducer = (state, action) =>{
    switch (action.type) {
        case 'LOGIN_START':
            return{
                loading:true,
                user:null,
                error:''
            }
        case 'LOGIN_SUCCESS':
            return{
                loading:false,
                user:action.payload,
                error:''
            }
        case 'LOGIN_FAILURE':
            return{
                loading:false,
                user:null,
                error:action.payload
            }
    
        default:
           return state;
    }
}