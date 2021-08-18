export default function User({user, choose}){




    return (
        <div>


            {user.id} {user.name} <button onClick={()=>choose(user.id)}>This user</button>


        </div>
    )
}