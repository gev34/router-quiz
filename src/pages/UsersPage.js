import { useEffect, useState } from "react"

export const UsersPage = () => {

    const [data , setData] = useState();

    useEffect(() => {
        fetch('https://reqres.in/api/users?')
        .then(res => res.json())
        .then(res => setData(res.data))
    } , [])

    console.log(data)

    return (
        <>
            <h1>Users</h1>
           <div className="container">
            {data && data.map((user) => {
                return (
                    <div className="user">
                        <img  src={user.avatar} alt = "nkar"/>
                        <h3>{user.first_name}</h3>
                        <h3>{user.last_name}</h3>
                    </div>
                )
            })}
            </div>
        </>
    )
}