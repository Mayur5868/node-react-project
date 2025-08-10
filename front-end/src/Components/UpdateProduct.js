import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {

    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error,setError] = React.useState(false)
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        // console.warn(params);
        getProductDetails();
    },[])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result =await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
        // console.warn(result);
    }
    const updateProduct = async () => {
        console.warn(!name);
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"Put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result = await result.json()
        console.warn(result)
        navigate('/')
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input className="inputbox" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Prodct Name" />
            {error && !name && <span className="error">Enter Valid Name</span>}

            <input className="inputbox" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter Product Price" />
            {error && !price && <span className="error">Enter Valid Price</span>}

            <input className="inputbox" value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter Product Category" />
            {error && !category && <span className="error">Enter Valid Category</span>}

            <input className="inputbox" value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter Product Company" />
            {error && !company && <span className="error">Enter Valid Company Name</span>}

            <button className="addbutton" onClick={updateProduct} type="button">Update Product</button>
        </div>
    )
}

export default UpdateProduct;
