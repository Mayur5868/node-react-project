import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
    const [error,setError] = React.useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/")
    }
  })

  const handleLogin = async () => {

    if (!email || !password) {
      setError(true)
      return false;
    }
    console.warn("email", "password", email, password)
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/')
    }
    else {
      alert("please enter correct details");
    }
  }
  return (
    <div className='login'>
      <h1>Login Page</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className='inputbox' placeholder='Enter Email' />
      {error && !email && <span className="error">Enter Valid Email</span>}

      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='inputbox' placeholder='Enter Password' />
      {error && !password && <span className="error">Enter Valid Password</span>}

      <button onClick={handleLogin} className='appbutton' type='button'>Login</button>
    </div>
  )
}
export default Login