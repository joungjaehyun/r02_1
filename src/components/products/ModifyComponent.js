import { useEffect, useState } from "react"
import { deleteProduct, getProduct } from "../../api/productAPI"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}



const ModifyComponent = ({ pno, moveList, moveRead }) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        })


    }, [pno])
    const handleClickDelete = ()=>{

        deleteProduct(pno).then(data=>{
            alert("상품삭제")
            moveList()
        })
    }



    return (

        <div>

            <div className="m-2 p-2 text-white font-bold">
                <div className="m-2 p-2">
                    <span>  상품명 :  {product.pname}</span>
                </div>
                <div className="m-2 p-2 ">
                    <span>상품설명:  value={product.pdesc} </span>
                </div>
                <div className="m-2 p-2 ">
                    <span> 가격:   {product.price} </span>
                </div>
                <div className="m-2 p-2 ">
                    <ul className="list-none flex">
                        {product.images.map((fname, idx) =>
                            <li key={idx} className="m-2">
                                <img src={`http://localhost/s_${fname}`} alt="No image"></img>
                            </li>)}
                    </ul>
                </div>
            </div>

            <div>
                <button
                    className="bg-sky-400 border-2 m-2 p-2 text-white font-bold"
                    onClick={moveList}
                >
                    List
                </button>
                <button
                    className="bg-red-400 border-2 m-2 p-2 text-white font-bold"
                    onClick={handleClickDelete}
                >
                    Delete
                </button>
            </div>
        </div>

    );
}

export default ModifyComponent;