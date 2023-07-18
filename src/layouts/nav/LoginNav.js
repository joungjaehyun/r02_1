import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartNav from "./CartNav";
import { logout } from "../../reducers/loginSlice";
import KakaoLoginComponent from "../../components/member/KakaoLoginComponent";



const LoginNav = () => {

   const { email, nickname } = useSelector(state => state.login)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   console.log("LoginNav...........", email, nickname)
   
   const handleLogOut = () => {
      
      dispatch(logout())
      navigate("/")
      
      
   }


   if (email !== '') {
      return(
      <div className="font-serif">
         <div>{email} - {nickname} </div>
         <CartNav></CartNav>
         <div><button onClick={handleLogOut}>Logout</button></div>
      </div>)
   }


   return (
      <div>
         <Link to="/member/login"> <div>LOGIN</div></Link>
        
      </div>
   );
}

export default LoginNav;