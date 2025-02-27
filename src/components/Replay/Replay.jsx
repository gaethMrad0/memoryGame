function Replay() {
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-screen bg-blue-700/50 backdrop-blur-[4px] flex justify-center items-center">
        <button onClick={() => window.location.reload()} className="px-[20px] py-[10px] rounded-2xl cursor-pointer bg-red-400 text-white text-[20px]">Replay</button>
    </div>
  )
}

export default Replay