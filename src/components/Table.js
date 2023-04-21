import React, { useEffect, useState } from 'react'
const baseURL='https://api.escuelajs.co/api/v1/products'
 export function Table() {

    const [products , setData] = useState ([]);
    
    const GetData = () => {
        fetch(baseURL)
        .then(response => response.json())
        .then(response => setData(response))
        
    }
    useEffect(() => { GetData() },[])
    
  return (
   <>
   <table className="table">
   <thead>
     <tr>
       <th scope="col">ID</th>
       <th scope="col">Image</th>
       <th scope="col">Title</th>
       <th scope="col">Description</th>
       <th scope="col">UpdatedAt</th>
       <th scope="col">CreationAt</th>
       
     </tr>
   </thead>
   <tbody>
     
      {
         products.map(product => 
           (
           <tr>
           <th scope="row">{product.id}</th>
           <td> <img src={product.images} alt='photos' style={{width :'100px'}}/></td>
           <td>{product.title}</td>
           <td>{product.description}</td>
           <td>{product.updatedAt}</td>
           <td>{product.creationAt}</td>
           
           </tr>
           )
          )}
   </tbody>
 </table>
   </>
   )
}