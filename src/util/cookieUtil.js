//  cookie에 로그인정보를 담는기능 및 가져오는 기능 삭제하는 기능
import { Cookies } from "react-cookie";

const cookies = new Cookies()

export const setCookie = (cookieName, value, days) =>{

    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate() + days)

    cookies.set(cookieName,value, {path: "/", expires: expires})
}

export const getCookie = (cookieName) => {

    return cookies.get(cookieName)
}

export const removeCookie = (cookieName, path="/") =>{

    cookies.remove(cookieName,{path: path})
}