import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = React.useState(false)

    const navigate = useNavigate();

    // const collectionData= ()=>{
    //     console.warn(name,email,password);
    // }

    // const collectionData= async ()=>{
    //     console.warn(name,email,password);
    //     const data = await fetch("http://localhost:5000/register",{
    //         method:'post',
    //         body:JSON.stringify({name,email,password})
    //     });
    // }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const collectionData = async () => {

        if (!name || !email || !password) {
            setError(true)
            return false;
        }
        console.warn(name, email, password);
        let userDetails = { name: name, email: email, password: password };
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify(userDetails),
            //body: {name:name, email:email, password:password}
            headers: {
                'content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn();

        //storage data user
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
            navigate('/')
        }
        else {
            alert("please enter correct details");
          }
    }
    return (
        <>
            <div className="register">
                <h1>SignUp Page</h1>
                <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                {error && !name && <span className="error">Enter Valid Name</span>}

                <input className="inputbox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                {error && !email && <span className="error">Enter Valid Email</span>}

                <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                {error && !password && <span className="error">Enter Valid Password</span>}

                <button className="appbutton" onClick={collectionData} type="button">SignUp</button>
            </div>
        </>
    )
}
export default SignUp