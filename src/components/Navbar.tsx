"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { logout } from "@/store/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isAuthSubmenuOpen, setAuthIsSubmenuOpen] = useState(false);
  const [isProfileSubmenuOpen, setIsProfileSubmenuOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToDetails = () => {
    router.push("/Page/more-details?ref=navbar&user=123");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToTableView = () => {
    router.push("/Page/table-page");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToDashboard = () => {
    router.push("/Page/dashboard");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToProfile = () => {
    router.push("/Page/Myprofile");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToUpload = () => {
    router.push("/Page/upload");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToproducts = () => {
    router.push("/Page/products");
    setIsOpen(false);
    setIsSubmenuOpen(false);
  };

  const goToRegister= () => {
    router.push("/Auth/registration");
    setIsOpen(false);
    setAuthIsSubmenuOpen(false);
  };

  const goToLogin= () => {
    router.push("/Auth/login");
    setIsOpen(false);
    setAuthIsSubmenuOpen(false);
  };

  // 🔹 点击其他区域关闭 submenu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".submenu-container")) {
        setIsSubmenuOpen(false);
        setAuthIsSubmenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout()); 

    if (typeof window !== "undefined") {
      localStorage.removeItem("reduxState");
    } 

    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md z-40 rounded-xl px-6 py-3 mx-4 mt-4 mb-0 flex justify-between items-center sticky top-0 relative">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium relative items-center">
        <li><Link href="/Page/#hero">Home</Link></li>
        <li><Link href="/Page/#about">About</Link></li>
        <li><Link href="/Page/#projects">Projects</Link></li>
        <li><Link href="/Page/#contact">Contact</Link></li>
        <li
          className="relative submenu-container"
          onMouseEnter={() => {
            clearTimeout(closeTimeout);
            setAuthIsSubmenuOpen(true);
            setIsSubmenuOpen(false);
            setIsProfileSubmenuOpen(false);
          }}
          onMouseLeave={() => {
            closeTimeout = setTimeout(() => setAuthIsSubmenuOpen(false), 200); // 200ms 延迟
          }}
        >
          <button className="hover:text-blue-600 cursor-pointer flex items-center gap-1">
            Auth ▾
          </button>

          {isAuthSubmenuOpen && (
            <ul
              className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-lg py-2 text-gray-700 text-sm z-50 w-48 min-w-[150px]"
              onMouseEnter={() => clearTimeout(closeTimeout)}
              onMouseLeave={() => {
                closeTimeout = setTimeout(() => setAuthIsSubmenuOpen(false), 200);
              }}
            >
              <li>
                <button
                  onClick={goToRegister}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Registration
                </button>
              </li>
              <li>
                <button
                  onClick={goToLogin}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Login
                </button>
              </li>
              {/* 可以继续添加更多 submenu */}
            </ul>
          )}
        </li>

        {/* Others submenu (Desktop hover with delay) */}
        <li
          className="relative submenu-container"
          onMouseEnter={() => {
            clearTimeout(closeTimeout);
            setIsSubmenuOpen(true);
            setAuthIsSubmenuOpen(false);
            setIsProfileSubmenuOpen(false);
          }}
          onMouseLeave={() => {
            closeTimeout = setTimeout(() => setIsSubmenuOpen(false), 200); // 200ms 延迟
          }}
        >
          <button className="hover:text-blue-600 cursor-pointer flex items-center gap-1">
            Others ▾
          </button>

          {isSubmenuOpen && (
            <ul
              className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-lg py-2 text-gray-700 text-sm z-50 w-48 min-w-[150px]"
              onMouseEnter={() => clearTimeout(closeTimeout)}
              onMouseLeave={() => {
                closeTimeout = setTimeout(() => setIsSubmenuOpen(false), 200);
              }}
            >
              <li>
                <button
                  onClick={goToTableView}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Table View
                </button>
              </li>
              <li>
                <button
                  onClick={goToDashboard}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={goToProfile}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  My Profile
                </button>
              </li>
              <li>
                <button
                  onClick={goToUpload}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Upload
                </button>
              </li>
              <li>
                <button
                  onClick={goToproducts}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Products
                </button>
              </li>
              {/* 可以继续添加更多 submenu */}
            </ul>
          )}
        </li>
        {/* <div className="hidden md:flex items-center ml-4">
          <img
            src="/asset/akaza.jpg" // 替换成你的头像路径
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
          />
        </div> */}

        <li className="relative submenu-container">
          <img
            src="/asset/akaza.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
            onMouseEnter={() => {
              clearTimeout(closeTimeout);
              setIsProfileSubmenuOpen(true);
              setIsSubmenuOpen(false);
              setAuthIsSubmenuOpen(false);
            }}
            onMouseLeave={() => {
              closeTimeout = setTimeout(() => setIsProfileSubmenuOpen(false), 200); // 200ms 延迟
            }}
          />

          {isProfileSubmenuOpen && (
            <ul
              className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 text-gray-700 text-sm z-50 w-36"
              onMouseEnter={() => clearTimeout(closeTimeout)}
              onMouseLeave={() => {
                closeTimeout = setTimeout(() => setIsProfileSubmenuOpen(false), 200); // 200ms 延迟
              }}
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={toggleMenu}>
        {isOpen ? "✖️" : "☰"}
      </button>
      {/* <div className="md:hidden flex items-center ml-4">W
        <img
          src="/asset/akaza.jpg" // 替换成你的头像路径
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
        />
      </div> */}

      {/* Mobile Menu */}
      {isOpen && (
      <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium md:hidden rounded-b-xl">

        {/* Mobile Profile Picture */}
        <li className="flex justify-center">
          <img
            src="/asset/akaza.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
        </li>

        {/* Menu Items */}
        <li><Link href="/Page/#hero" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link href="/Page/#about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link href="/Page/#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link href="/Page/#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

        {/* Auth Submenu */}
        <li className="submenu-container">
          <button 
            onClick={() => setAuthIsSubmenuOpen(prev => !prev)}
            className="flex justify-between items-center w-full hover:text-blue-600"
          >
            Auth <span>{isAuthSubmenuOpen ? "▲" : "▼"}</span>
          </button>

          {isAuthSubmenuOpen && (
            <ul className="mt-2 bg-gray-50 rounded-lg text-gray-700 text-sm flex flex-col space-y-2 px-4 py-2">
              <li>
                <button
                  onClick={goToRegister}
                  className="text-left w-full hover:text-blue-600"
                >
                  Registration
                </button>
              </li>
              <li>
                <button
                  onClick={goToLogin}
                  className="text-left w-full hover:text-blue-600"
                >
                  Login
                </button>
              </li>
            </ul>
          )}
        </li>
        
        {/* Others Submenu */}
        <li className="submenu-container">
          <button
            onClick={() => setIsSubmenuOpen(prev => !prev)}
            className="flex justify-between items-center w-full hover:text-blue-600"
          >
            Others <span>{isSubmenuOpen ? "▲" : "▼"}</span>
          </button>
        
          {isSubmenuOpen && (
            <ul className="mt-2 bg-gray-50 rounded-lg text-gray-700 text-sm flex flex-col space-y-2 px-4 py-2">
              <li>
                <button onClick={goToTableView} className="text-left w-full hover:text-blue-600">
                  Table View
                </button>
              </li>
              <li>
                <button onClick={goToDashboard} className="text-left w-full hover:text-blue-600">
                  Dashboard
                </button>
              </li>
              <li>
                <button onClick={goToProfile} className="text-left w-full hover:text-blue-600">
                  My Profile
                </button>
              </li>
              <li>
                <button onClick={goToUpload} className="text-left w-full hover:text-blue-600">
                  Upload
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    )}

    </nav>
  );
}
