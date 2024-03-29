import { useState, useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";




const NavBar = () => {

  const [icon, setIcon] = useState(true);
  var [theme, setTheme] = useState("light");
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handelThemeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  var handelIconChange =() => {
    setIcon(!icon);
  };

  return (
    <div className="w-auto flex justify-between border px-16 py-6 text-Dark_300-0 shadow-xl bg-Light_200-0 dark:bg-Dark_100-0 dark:text-Light_200-0 dark:border-Dark_100-0 dark:shadow-xl dark:shadow-slate-700 ">
      <h1 className="text-4xl font-bold font-Nunito">Where in the world?</h1>
      <div className="flex justify-between mt-2">
        <div onClick={handelIconChange}>
          {icon === true ? <span><IoMdMoon className="w-6 h-6 cursor-pointer" onClick={handelThemeSwitcher}/></span> : <span><IoMdSunny className="w-6 h-6 cursor-pointer" onClick={handelThemeSwitcher}/></span>}
        </div>
        <div className="ml-4 text-[16px] font-Nunito">{icon === true ? <h3 className="text-[16px] font-Nunito">Dark Mode</h3> : <h3 className="text-[16px] font-Nunito">Light Mode</h3>}</div>
      </div>
    </div>
  )
}

export default NavBar