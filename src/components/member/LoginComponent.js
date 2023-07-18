import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";
import KakaoLoginComponent from "./KakaoLoginComponent";



const initState = {
    email: 'user00@aaa.com',
    pw: '1111'
}

const LoginComponenet = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({ ...initState })
    
    const dispatch = useDispatch()
    
    const errorMsg = loginState.errorMsg

    console.log("ERRORS " + errorMsg)

    

    return (
        <div className="m-3 p-3  flex justify-center">
            {/* Modal로 처리해 줘야된다. */}
            <div className="text-3xl bg-red-500">
              {loginState.loading ? '로그인중':''}
            </div>
            {errorMsg ?  <div className="text-3xl bg-red-500">please check Email and password</div> : <></>}
            <div>
                <div className="m-2 p-2 border-4 border-orange-300/75">
                    <div className="text-black font-bold">
                        <span>ID Login</span>
                    </div>
                    <div className="m-2 p-2">
                        
                        <input className="bg-black" type="text" name="email" value={loginInfo.email} onChange={() => { }}></input>
                    </div>
                    <div className="m-2 p-2">

                        <input className="bg-black" type="password" name="pw" value={loginInfo.pw} onChange={() => { }}></input>
                    </div>
                <div className="flex m-2 p-2 justify-center">
                <div>
                    <button className="border-2 m-2 bg-black" onClick={() => dispatch(postLoginThunk(loginInfo))
                    }>LOGIN</button>
                </div>
                <div>
                <KakaoLoginComponent></KakaoLoginComponent>
                </div>
                </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={require('../../image/backimage.jpg')} ></img>
                </div>
            </div>
        </div>
    );
}

export default LoginComponenet;