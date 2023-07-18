

import { Link } from "react-router-dom";

const REST_KEY= '160a48a88fd46b9c93200f134efc7a90'
const REDIRECT_URI= 'http://localhost:3000/member/kakao'

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return ( 
        <div className="text-xl text-white flex justify-center items-center">
            <Link  to={kakaoURL}><img  src={require("../../image/kakao_login_medium.png")}></img></Link>
        </div>
    );
}
 
export default KakaoLoginComponent;