import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {
  return ( 
    <BasicLayout>
      <div className="mt-4 p-4 bg-gradient-to-r from-green-500 to-amber-300 text-2xl text-white flex justify-center">
        <div className="underline font-extrabold m-2 p-2">List</div>
        <div className="underline font-extrabold m-2 p-2">Register</div>
      </div>
      <div className="h-[50vh] bg-backImg bg-no-repeat bg-cover w-full border-2 ">
        <Outlet></Outlet>
      </div>
    </BasicLayout>
  );
}
 
export default IndexPage;