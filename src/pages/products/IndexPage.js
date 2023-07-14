import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="mt-4 p-4 bg-gradient-to-l from-green-400 to-indigo-300 text-2xl text-white flex justify-center">
            <div className="underline font-extrabold m-2 p-2"><Link to="/products/list"> List</Link> </div> 
                <div className="underline font-extrabold m-2 p-2">
                    <Link to="/products/register">Register </Link></div>
                
            </div>
            <div className="  w-full border-2  bg-backImg bg-cover bg-no-repeat">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;