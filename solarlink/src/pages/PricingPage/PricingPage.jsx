import React, {useEffect, useState} from 'react';
import {GetAllProducts} from "../../services/ProductService";


function PricingPage() {
    const [product , setProduct] = useState([]);
    const [groups , setGroups] = useState([]);
    const getAllProduct = async ()=>{
        let result = await GetAllProducts();
        ///console.lof()
        if(result.data.isSuccess)
        {
            const data =result.data.data;
            setProduct(data);
            let list = [];
            data.map(w=>{
                if(!list.find(f=>f.id === w.category.id))
                {
                    list.push({...w.category});
                }
            });
            setGroups(list.sort((a,b)=> a.id - b.id))
        }
    }
    useEffect(()=>{
        getAllProduct()
    },[])
    return (
       <div className={"my-5"}>
           {groups.map(g => <>
               <h4 className={"text-center my-2"}>{g.name}</h4>
               <div className={"d-flex  justify-content-center flex-wrap"}>
               {product &&product.filter(f=>f.category.id === g.id).map(p=>
                   <div className={"d-flex flex-column m-3 align-items-center btn"}  onClick={()=>{
                       
                   }}>
                   <div><img src={p.imageUrl} width={240} height={240} /></div>
                   <div>{p.name}</div>
                   <div>From <span className={"fw-light"}> <i>{p.fromPrice.toFixed(2)} JOD</i> </span></div>
               </div>)}

               </div>

           </>)}


       </div>
    );
}

export default PricingPage;
