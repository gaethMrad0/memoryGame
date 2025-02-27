import { useEffect, useRef, useState } from "react"
import Block from "./Block"
import { data } from "./data"
import { useDispatch, useSelector } from "react-redux";
import { randomOrder, setCorrectBlocks } from "./blockSlice";
import { increment } from "../NavBarInfo/WrongCounter/counterSlice";

function Blocks() {
  const {orderRange, duration} = useSelector((store) => store.block);
  const [flipped, setFlipped] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false)
  const blocks = useRef([]);
  const dispatch = useDispatch();

  const flippedBlock = (index) => {
    setFlipped((prev) => [...prev, blocks.current[index]]);
    if (isFlipped) {
      setTimeout(() => {
        blocks.current[index].classList.add("is-flipped")
      }, duration)
    }
  }

  useEffect(() => {
    dispatch(randomOrder())
  }, [dispatch])

  useEffect(() => {
    if (flipped.length === 2) {
      setTimeout(() => {
        if (flipped[0].dataset.name != flipped[1].dataset.name) {
          dispatch(increment());
          flipped.forEach(ele => {
            ele.classList.remove("is-flipped")
            setIsFlipped(!isFlipped)
          })
        } else {
          dispatch(setCorrectBlocks(flipped))
        }
        setFlipped([]);
      }, 500)
    }
  }, [dispatch, flipped, isFlipped])

  return (
    <div className="blocks grid mb-[20px] grid-cols-2 gap-[10px] md:grid-cols-5">
        {data.map((data, index) => {
            return (
                <Block ref={(e) => blocks.current[index] = e} key={index} onClick={() => flippedBlock(index)} backContent={data.imageUrl} alt={data.alt} order={orderRange[index]}/>
            )
        })}
    </div>
  )
}

export default Blocks