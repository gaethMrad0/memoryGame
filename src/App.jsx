import { useSelector } from "react-redux"
import AlertModal from "./components/AlertModal/AlertModal"
import Game from "./components/Game/Game"
import Replay from "./components/Replay/Replay";

function App() {
  const {showComponent} = useSelector((store) => store.alert);
  const {correctBlocks} = useSelector((store) => store.block);

  return (
    <div className="App">
      {showComponent && <AlertModal />}
      {correctBlocks.length === 20 && <Replay />}
      <Game />
    </div>
  )
}

export default App
