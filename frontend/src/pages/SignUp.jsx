import { useContext, useState } from "react"
import dp from "../assets/dp.jpg"
import { dataContext } from "../context/userContext"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {


    const navigate = useNavigate();

    let { serverUrl } = useContext(dataContext);

    // ========= useStates ============
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                serverUrl + "/api/signup",
                { firstName, lastName, userName, email, password },
                { withCredentials: true }
            );

            console.log(res.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }

    }


    return (
        <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className='w-[90%] max-w-125 h-125 bg-[#141f1f] rounded flex flex-col justify-center items-center gap-5'>
                <h1 className="text-white text-[20px] font-semibold "> Sign Up</h1>
                {/* ============= Form  =============  */}
                <form className=' w-full flex flex-col justify-center items-center gap-5' onSubmit={handleSignUp}>



                    <div className="w-25 h-25 rounded-full bg-white relative ">
                        <img src={dp} alt="database Picture" className="w-full h-full rounded-full " />
                        <div className="absolute w-full h-full bg-black rounded-full top-0 opacity-0 hover:opacity-30 flex items-center justify-center text-white text-[40px] font-semibold cursor-pointer ">
                            +
                        </div>
                    </div>

                    <div className='w-[80%] h-12.5 flex  justify-center items-center gap-2.5'>

                        {/* ======================  Input field ========== */}

                        <input type="text" placeholder='First  Name'
                            className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5'
                            value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />

                        <input type="text" placeholder='Last  Name'
                            className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5'
                            value={lastName} onChange={(e) => setLastName(e.target.value)}
                        />

                        {/* ======================  Input field email,pass,userName ========== */}
                    </div>
                    <input type="text" placeholder='UserName'
                        className='w-[80%] l h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5'
                        value={userName} onChange={(e) => setUserName(e.target.value)}
                    />

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
                    >SignUp </button>

                    <p className=" cursor-pointer text-cyan-900">Already Have an Account ? <span className="text-cyan-400" onClick={() => navigate("/login")}> login </span>
                    </p>          
                          </form >
            </div>

        </div>
    )
}

export default SignUp