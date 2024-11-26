import { userContext } from "./Profile"
import { useContext } from "react"
import { ProfileModal } from "./ProfileModal"
export const ProfileDetails=()=>{
       const user = useContext(userContext)
       return(<>
        {user.map((u,i)=>{
        return(<>
        <ul key={i} className="list-group bg-secondary">
            <li className="list-group-item">
                <div className="card-header">{u.name}</div>
            </li>
            <div className="card-body">
            <li className="list-group bg-secondary">{u.age}</li>
            <li className="list-group bg-secondary">{u.email}</li>
            <li className="list-group bg-secondary">{u.mobile}</li>
            <li className="list-group bg-secondary">{u.city}</li>
            </div>
            <li className="list-group-item">
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">Update</button> 
            </li>
        </ul>
        <hr/>
        <ProfileModal u={u}/>
        </>
    )
})}
</>)
}