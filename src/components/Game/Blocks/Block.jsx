// eslint-disable-next-line react/prop-types
function Block({ backContent, alt, order, ref, onClick }) {
  return (
    <div ref={ref} onClick={onClick} className="block perspective-[1000px] h-[150.31px]" style={{order: order}} data-name={alt}>
        <div className="flip-card-inner cursor-pointer relative w-full h-full transform-3d duration-500 border-[4px] border-blue-500">
            <div className="face select-none front flex justify-center items-center text-[90px] text-white absolute font-bold w-full h-full backface-hidden bg-[#303030]">
                ?
            </div>
            <div className="face back flex justify-center items-center absolute top-0 left-0 w-full h-full backface-hidden rotate-y-[180deg] bg-[#597a90]">
                <img className="!w-[100px] !h-[100px]" src={backContent} alt={alt} />
            </div>
        </div>
    </div>
  )
}

export default Block