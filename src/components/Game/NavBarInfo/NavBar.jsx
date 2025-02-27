import HelloUser from "./HelloUser"
import WrongCounter from "./WrongCounter/WrongCounter"

function NavBar() {
  return (
    <nav className="w-full p-[15px] bg-[#303030] rounded-3xl flex justify-between mb-[20px] items-center border-blue-400">
        <HelloUser />
        <WrongCounter />
    </nav>
  )
}

export default NavBar