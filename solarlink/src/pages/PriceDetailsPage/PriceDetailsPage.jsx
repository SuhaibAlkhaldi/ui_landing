import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetProductById} from "../../services/ProductService";

function PriceDetailsPage() {
  const {id} = useParams();
  const [product ,setProduct] = useState(null);
  const [category ,setcategory] = useState([]);
  const getPticebyId = async ()=>{
      let result = await GetProductById(+id);
      if(result.data.isSuccess)
      {
        setProduct(result.data.data)
          const pro =result.data.data;
        let catList = []
        pro.productDependants.map(w=> {
         if(!catList.find(f=>f.id === w.product.category.id))
         {
             catList.push(w.product.category)
         }

        });
         setcategory(catList);
      }
  }
  useEffect(() => {
    if(+id)
    {
      getPticebyId()
    }
  }, [id]);

    return (
        <div className={"h-100vh  "}>
            {/*<div className={"mb-4"}>&heart;</div>*/}

        {product && <div className={'w-100 d-flex align-items-center flex-column pt-4'}>
            <div className={"h4"}>{product.category.name}</div>
            <div>
                <img width={300} height={300} src={product.imageUrl}/>
            </div>
            <div className={"h5"}>
                <b>Name:</b> {product.name}
            </div>
            {category.map(w => <>
                <div className={"h5"}>
                    <b>{w.name} : </b>
                </div>
            </>)}
            <div className={"h5"}>
                <b>Price:</b> {product.fromPrice.toFixed(2)} JOD
            </div>

            <a href={"mailto:info@solerlink.com"} className={"btn btn-dark"}> Contact Us </a>


        </div>}
        </div>
    );
}

export default PriceDetailsPage;
