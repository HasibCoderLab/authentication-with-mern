import dp from "../assets/dp.jpg"

const SignUp = () => {
    return (
        <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className='w-[90%] max-w-125 h-125 bg-[#141f1f] rounded flex flex-col justify-center items-center gap-5'>
                <h1 className="text-white text-[20px] font-semibold "> Sign Up</h1>
                {/* ============= Form  =============  */}
                <form className=' w-full flex flex-col justify-center items-center gap-5'>



                    <div className="w-25 h-25 rounded-full bg-white relative ">
                        <img src={dp} alt="database Picture" className="w-full h-full rounded-full " />
                        <div className="absolute w-full h-full bg-black top-0 opacity-0 hover:opacity-30 flex items-center justify-center text-white text-[40px] font-semibold cursor-pointer ">
                            +
                        </div>
                    </div>

                    <div className='w-[80%] h-12.5 flex  justify-center items-center gap-2.5'>

                        {/* ======================  Input field ========== */}

                        <input type="text" placeholder='First  Name'
                         className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5' />

                        <input type="text" placeholder='Last  Name' 
                        className='w-[50%] h-full bg-white outline-none border-none rounded-lg px-2.5 py-1.5' />

                        {/* ======================  Input field email,pass,userName ========== */}
                    </div>
                    <input type="text" placeholder='UserName' 
                    className='w-[80%] l h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5' />

                    <input type="email" placeholder='Enter Email' 
                    className='w-[80%]  h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5' />

                    <input type="password" placeholder='Enter Password'
                     className='w-[80%] h-[50%] bg-white outline-none border-none rounded-lg px-2.5 py-1.5' />

                </form>
            </div>

        </div>
    )
}

export default SignUp