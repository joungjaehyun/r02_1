import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}



const ReadComponent = ({pno}) => {
    
    const [product, setProduct] = useState(initState)

    useEffect(()=>{

        getProduct(pno).then(data =>{
            setProduct(data)
        })


    },[pno])
    
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
                <ul className="list-none">
                    {product.images.map((fname,idx) =>
                    <li key={idx}>
                          <img src={`http://localhost/${fname}`}   alt="No image"></img>
                    </li>)}
                </ul>
            </div>
          
        </div>

        </div>
    );
}
 
export default ReadComponent;