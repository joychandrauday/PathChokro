import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../Provider/Provider";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
const Header = () => {
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>নীড়পাতা</NavLink>
      </li>
      <li>
        <NavLink to={"/event"}>পরবর্তী চক্র</NavLink>
      </li>
      <li>
        <NavLink to={"/story"}>আমাদের কথা</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>বই সমূহ</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>যোগাযোগ</NavLink>
      </li>
      {user ? (
        <div className="lg:flex">
          <li>
            <NavLink to={"/dashboard"}>ড্যাশবোর্ড</NavLink>
          </li>
        </div>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[99999999] p-2 shadow bg-base-100 rounded-box w-44"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            
            <a href="/" className=" relative text-xl flex items-center">
              <img
                src="https://i.ibb.co/c2tW6ZT/Colorful-Modern-Infinity-Technology-Free-Logo-1-2.png"
                alt=""
                className="w-3/6 logo"
              />
            </a>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          
        </div> */}
        <div className="navbar">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          <label className="swap swap-rotate pr-8">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-end flex items-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={999}
                className="menu menu-sm dropdown-content lg:mt-32 z-[999] p-2 shadow bg-base-100 rounded-box w-44"
              >
                <li>
                  <h1 className="text-basic block  font-extrabold">
                    welcome <div className="text-second">{user?.displayName}</div>
                  </h1>
                </li>
                <li>
                  <a onClick={() => logOut(auth)}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="lg:relative absolute lg:right-0 right-16">
              <Link
                to={"/sign-up"}
                className="lg:btn p-3 lg:p-0 lg:bg-[#00008b] lg:text-white lg:rounded-full lg:px-7 hover:bg-blue-950"
              >
                সাইন আপ
              </Link>
              <Link
                to={"/sign-in"}
                className="lg:btn p-3 lg:p-0 lg:bg-transparent lg:border-[#00008b] lg:text-[#00008b] lg:rounded-full lg:px-7 hover:bg-blue-950 hover:text-white"
              >
                সাইন ইন
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
