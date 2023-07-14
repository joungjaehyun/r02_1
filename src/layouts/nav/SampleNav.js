import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const SampleNav = () => {

    // const todoArr = useSelector(state => state.todo)
    // {todoArr.length}
    return (
        <div className="flex m-6 p-6 text-white font-extrabold ">

            <div className="m-5 text-3xl ">
                <Link to="/">Main</Link>

            </div>
 
            <div className="m-5 text-3xl ">
                <Link to="/about">About</Link>
            </div>
            <div className="m-5 text-3xl ">
                <Link to="/products/list">Products</Link>
            </div>
            <div className="m-5 text-3xl ">
                <Link to="/board/list">Board</Link>
            </div>
            <div className="ml-80  text-2xl text-right">
                <LoginNav></LoginNav>
            </div>
            <div className="ml-20 text-2xl ">
                <span className="bg-red-300 font-extrabold"></span>
            </div>
        </div>
    );
}

export default SampleNav;