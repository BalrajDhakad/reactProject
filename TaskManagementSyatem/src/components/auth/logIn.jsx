import { useState } from "react"


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Submitted")
    console.log(email, 'and', password)

    setEmail("")
    setPassword("")
  } 


  return (
    <>
      <div className="main flex flex-col w-screen h-screen justify-center items-center gap-10">
        <div className="whole bg-gray-800 border-2 rounded-xl border-red-400 px-16">
          <h1 className="text-white text-center text-4xl mt-28 mb-16">LogIn</h1>

          <form 
            action="Login" 
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              submitHandler(e)
            }}
          >

            <input 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email" 
              placeholder="Enter email" 
              className="pr-10 pl-3 py-2 rounded outline-none bg-gray-700 text-red-200"
              required
            />

            <input 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password" 
              placeholder="Enter password" 
              className="pr-10 py-2 pl-3 rounded bg-gray-700 outline-none text-red-200"
              required
            />

            <div className="checkbox">
              <input
                type="checkbox" 
                className="mr-3"
                required
              />
              <label className="text-white">Agree</label>
            </div>
            <button 
              className="bg-red-400 rounded-md mb-16 mt-10 py-3 text-white"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login
