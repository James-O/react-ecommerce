import {React,useState,useEffect} from 'react'

export default function Products() {
    const [products,setProducts]=useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(result=>
                // console.log(json)
                setProducts(result)
            )
    },[])
    
    function Store({products}){
        return(
            <div className='container'>
               {
                products.map((product)=>(
                    <div key={product.id} className='d-flex'>
                        <div className='col-md-3 card mb-3'>
                            <img src={product.image} className='w-25' alt='Product'/>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))
               }
            </div>
        )
    }

  return (
    <div>
        <h1>Products</h1>
        <p>
            {products && <Store products={products}/>}
        </p>
    </div>
  )
}
