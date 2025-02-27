import { useSelector } from "react-redux"

function HelloUser() {
  const {name} = useSelector((store) => store.alert)
    
  return (
    <h1 className="text-[20px] text-white">Hello : <span className="font-bold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">{name}</span></h1>
  )
}

export default HelloUser