import { useSelector } from "react-redux"

function WrongCounter() {
  const {wrongCount} = useSelector((store) => store.counter);

  return (
    <div className="text-[20px] text-white">Wrong : <span className="font-bold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">{wrongCount}</span></div>
  )
}

export default WrongCounter