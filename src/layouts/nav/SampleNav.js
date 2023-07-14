import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SampleNav = () => {

    const todoArr = useSelector(state => state.todo)

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
            <div className="m-5 text-3xl ">
            <span className="bg-red-300 font-extrabold">{todoArr.length}</span>
            </div>
        </div>
    );
}

export default SampleNav;