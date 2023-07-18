import LoginComponenet from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";

const LoginPage = () => {
    return ( 
        <div className="bg-backImg bg-no-repeat bg-cover text-center text-2xl text-white ">
        <BasicLayout>
            <div className="font-bold">Login Page</div>
      
            <LoginComponenet></LoginComponenet>
      
        </BasicLayout>
        </div>
     );
}
 
export default LoginPage;