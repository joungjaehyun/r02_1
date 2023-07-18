import axios from "axios"

const REST_KEY= '160a48a88fd46b9c93200f134efc7a90'
const REDIRECT_URI= 'http://localhost:3000/member/kakao'

const AUTH_TOKEN_URL = "https://kauth.kakao.com/oauth/token"

export const getAccessToken =  async (authCode) =>{

    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    const params = {
        grant_type: 'authorization_code', 
        client_id: REST_KEY, 
        redirect_uri: REDIRECT_URI 
    }
    const res = await axios.post(AUTH_TOKEN_URL,params,header)

    const {access_token} = res.data

    return access_token

}