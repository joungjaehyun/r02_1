import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie, removeCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";
import { act } from "react-dom/test-utils";


export const postLoginThunk = 
    createAsyncThunk('postLoginThunk', (params)=>{
        return postLogin(params)
    })

const loadCookie = () => {
    
    const loginObj = getCookie("login")

    console.log("login...................Obj................")
    console.log(loginObj)

    if(!loginObj){
        return initState
    }
    return loginObj
}

const initState= {
    email:'',
    nickname:'',
    admin:false,
    loading: false,
    errorMsg:null,
    
}

const loginSlice = createSlice({

    name:'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, action) => {
            const payload = action.payload
            console.log("requestLogin" , payload)
            
            setCookie("login",JSON.stringify(payload), 1)

            return payload
        },
       
         logout: (state) =>{
                removeCookie('login')
 
    
                return initState
            }
    },// extraReducer는 Return을 하지않아도 다음상태를 잡아준다.
    extraReducers: (builder) =>{
        builder.addCase(postLoginThunk.fulfilled, (state,action)=>{
 
            console.log("fulfilled", action.payload)
            const {email,nickname,admin, errorMsg} = action.payload
            
            if(errorMsg){
                state.errorMsg= errorMsg
                state.loading = false
                return
            }
            
          
            setCookie("login",JSON.stringify(action.payload), 1)

            return {...action.payload, loading: false}
        })
        .addCase(postLoginThunk.pending, (state,action)=>{

            console.log("pending")
            state.loading = true
        })
        .addCase(postLoginThunk.rejected,(state,action)=>{
            
            console.log("rejected")
        })
    }

    
})

export const {requestLogin} = loginSlice.actions
export const {logout} = loginSlice.actions
export default loginSlice.reducer