import React from "react";

const AddProducts = () => {
        const [name,setName] = React.useState("");
        const [price,setPrice] = React.useState("");
        const [category,setCategory] = React.useState("");
        const [company,setCompany] = React.useState("");

        const [error,setError] = React.useState(false)

       
        // const addProduct= async ()=>{
        //     console.warn(name,price,category,company);
        //     // const userId = localStorage.getItem('user');
        //     // console.warn(userId);
        //     // const userId = JSON.parse(localStorage.getItem('user'));
        //     // console.warn(userId);
        //     // const userId = JSON.parse(localStorage.getItem('user'));
        //     // console.warn(userId._id);
        //     // const userId = JSON.parse(localStorage.getItem('user'))._id;
        //     // console.warn(userId);
        // }

        const addProduct= async ()=>{
            console.warn(!name);
            if(!name || !price || !category || !company){
                setError(true)
                return false;
            }

            console.warn(name,price,category,company);
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            let result =await fetch("http://localhost:5000/add-product",{
                method:'post',
                body :  JSON.stringify({name,price,category,company}),
                headers:{
                    'content-type':'application/json'
                }
            });
            
            result = await result.json();
            console.warn(result);
        }
    return (
        <>
            <div className='product'>
                <h1>Add Products</h1>
                <input className="inputbox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Prodct Name" />
               {error && !name && <span className="error">Enter Valid Name</span>}
                
                <input className="inputbox" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Product Price" />
                {error && !price && <span className="error">Enter Valid Price</span>}

                <input className="inputbox" value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter Product Category" />
                {error && !category &&<span className="error">Enter Valid Category</span>}

                <input className="inputbox" value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter Product Company" />
               {error && !company && <span className="error">Enter Valid Company Name</span>}

                <button className="addbutton" onClick={addProduct} type="button">Add Product</button>
            </div>
        </>
    )
}

export default AddProducts