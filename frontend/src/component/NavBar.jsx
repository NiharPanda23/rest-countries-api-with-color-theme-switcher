import { useState, useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";




const NavBar = () => {

  var [icon, setIcon] = useState(true);
  // var [text, setText] = useState(true);


  var handelIconChange =() => {
    setIcon(!icon);
  };

  return (
    <div className="w-auto flex justify-between border px-16 py-6 shadow-xl ">
      <h1 className="text-4xl font-bold font-Nunito">Where in the world?</h1>
      <div className="flex justify-between mt-2">
        <div onClick={handelIconChange}>
          {icon === true ? <span><IoMdSunny className="w-6 h-6 cursor-pointer"/></span> : <span><IoMdMoon className="w-6 h-6 cursor-pointer"/></span>}
        </div>
        <div className="ml-4 text-[16px] font-Nunito">{icon === true ? <h3 className="text-[16px] font-Nunito">Dark Mode</h3> : <h3 className="text-[16px] font-Nunito">Light Mode</h3>}</div>
      </div>
    </div>
  )
}

export default NavBar