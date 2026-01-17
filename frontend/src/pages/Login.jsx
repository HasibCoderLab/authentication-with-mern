import { useContext, useState } from "react"
import dp from "../assets/dp.jpg"
import { dataContext } from "../context/UserContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    
          
    let { serverUrl,userData, setUserData,getUserData } = useContext(dataContext);

    // ========= useStates ============

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(
                serverUrl + "/api/login",
                { email, password },
                { withCredentials: true }
            );
            console.log(data);
            

           await getUserData();
            setUserData(data.user);
            
             if (userData) {               
                navigate("/home");
            }

            console.log(data);
        } catch (error) {
            console.log(error.response?.data || error.message);
            alert(error.response?.data?.message || "Login failed");
        }


    }


    return (
        <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className='w-[90%] max-w-125 h-125 bg-[#141f1f] rounded flex flex-col justify-center items-center gap-5'>
                <h1 className="text-white text-[20px] font-semibold "> Log in</h1>
                {/* ============= Form  =============  */}
                <form className=' w-full flex flex-col justify-center items-center gap-5' onSubmit={handleLogin}>


                    {/* ================ infut field ============= */}

                    <input type="email" placeholder='Enter Email'
                        className='w-[80%]  h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder='Enter Password'
                        className='w-[80%] h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5'
                        value={password} onChange={(e) => setPassword(e.target.value)}


                    />
                    <button className="bg-[#07c7e4] text-black px-2.5 py-1.5 rounded-lg cursor-pointer
                    "
                    >Login </button>
                    <p className=" cursor-pointer text-white"> Want create  new account ? <span className="text-cyan-400" onClick={() => navigate("/signup")}> Sign Up </span>
                    </p>
                </form >
            </div>

        </div>
    )
}

export default Login