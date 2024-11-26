import { ProfileCard } from "./ProfileCard"

export const Container=()=>
    {
        return(<>
        <div className="alert alert-dark bg-dark text-white">
        <p className="display-6">Profile</p>
        <ProfileCard/>
        </div>
        </>)
    }