import axios from "axios"
import { useEffect, useState } from "react"



const Main = () => {
    interface USER{
        _id: number,
        name: string,
        age: number,
        img: string
    }


    const API = 'https://api.elchocrud.pro/api/v1/0051f45bdc30506f71cc48b49e206865/user'

    const [user,setUser] = useState<USER[]>([])

    console.log(user);
    

    const FetchTODO = async () => {
        const { data } = await axios.get(API)
        setUser(data);

    }

    const Delete = async(id: number) =>{
         await axios.delete(`${API}/${id}`)
    }

    

    useEffect(() => {
        FetchTODO()
    }, [])
    return (
        <div className="flex flex-wrap gap-5 m-5">
            {
                user.map(el => (
                    <div key={el._id} className="w-[300px]">
                        <img className="w-[200px]" src={el.img} alt={el.name} />
                        <h2 className="text-[25px]">{el.name}</h2>
                        <h4>{el.age}</h4>
                        <div className="">
                        <button type="button"  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Edit
                        </button>
                        <button onClick={()=>Delete(el._id)} type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Delete
                        </button>


                        </div>
                       
                    </div>
                ))
            }
        </div>
    )
}

export default Main