import React from 'react'

const SignUp = () => {
    return (
        <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className='w-[90%] max-w-125 h-125 bg-[#141f1f] rounded flex flex-col justify-center items-center gap-5'>
                <h1 className="text-white text-[20px] font-semibold "> Sign Up</h1>
                <form className=' w-full flex flex-col justify-center items-center gap-5'>
                    <div>
                        <input type="text" placeholder='First  Name' />
                        <input type="text" placeholder='Last  Name' />

                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp