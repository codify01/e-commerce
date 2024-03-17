import { useState } from "react"

const StudentForm = ({action})=> {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const details = {firstname,lastname,email,password}
    let fName = setfirstname
    let lName = setlastname
    let mail = setemail
    let pass = setpassword
    const setdetails = {fName,lName,mail,pass}
    return (
        <>
            <div className="mx-3 lg:w-1/3 lg:mx-auto">
                <input type="text" placeholder="First Name" className="w-full mx-auto" onChange={(e)=>setfirstname(e.target.value)} value={firstname}></input>
                <input type="text" placeholder="Last Name" className="w-full mx-auto"onChange={(e)=>setlastname(e.target.value)} value={lastname}></input>
                <input type="Email" placeholder="Email" className="w-full mx-auto"onChange={(e)=>setemail(e.target.value)} value={email}></input>
                <input type="password" placeholder="Passwod" className="w-full mx-auto"onChange={(e)=>setpassword(e.target.value)} value={password}></input>
                <button className="btn w-full" onClick={()=>action(details, setdetails)}>Submit</button>
            </div>
        </>
    )
}

export default StudentForm