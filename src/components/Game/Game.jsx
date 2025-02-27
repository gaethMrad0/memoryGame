import Blocks from "./Blocks/Blocks"
import NavBar from "./NavBarInfo/NavBar"

function Game() {
  return (
    <main className="game pt-[20px]">
        <div className="container w-full px-[1rem] mx-auto lg:w-[50%] lg:px-0">
            <NavBar />
            <Blocks />
        </div>
    </main>
  )
}

export default Game