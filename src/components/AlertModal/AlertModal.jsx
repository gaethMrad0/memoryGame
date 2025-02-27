import { useDispatch } from "react-redux"
import { addNameByAmount, hiddenComponent } from "./alertSlice";

function AlertModal() {
  const dispatch = useDispatch();

  const addName = () => {
    const name = prompt("Enter Your Name:")
    dispatch(addNameByAmount(name))
    dispatch(hiddenComponent())
  }

  return (
    <section className="absolute top-0 left-0 z-10 w-full h-screen bg-blue-500/50 backdrop-blur-[2px] flex justify-center items-center">
        <button onClick={addName} className="px-[20px] py-[10px] rounded-2xl cursor-pointer bg-red-400 text-white text-[20px]">Start Game</button>
    </section>
  )
}

export default AlertModal