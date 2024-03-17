
const StudentTable =({list})=> {

    return(
        <>
            <table className="">
                <thead>
                    <th>S/n</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Password</th>
                </thead>
                <tbody>
                    {
                        list.map((studentDetails, index)=>{
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{studentDetails.firstname}</td>
                                <td>{studentDetails.lastname}</td>
                                <td>{studentDetails.email}</td>
                                <td>{studentDetails.password}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>                   
        </>
    )
}
export default StudentTable