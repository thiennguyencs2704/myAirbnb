import React, { useRef, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import { useClickAway } from "react-use";

const AuthNav: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickAway(menuRef, () => {
    setShowMenu(false);
  });

  return (
    <>
      <div className="absolute z-30 flex items-center space-x-2 right-12 xl:right-16 whitespace-nowrap">
        <button className="hover:bg-white/20 rounded-full h-[42px] px-3 -mr-3">
          <p>Become a host</p>
        </button>

        <button className="h-[42px] px-[12px] rounded-full hover:bg-white/20">
          <GlobeAltIcon className="w-5 h-5 rounded-full" />
        </button>

        <div ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="h-[42px] w-[77px] flex items-center justify-between border border-gray-300 shadow-md rounded-full text-gray-500 bg-white"
          >
            <MenuIcon className="w-5 h-5 ml-2" />
            <UserCircleIcon className="h-9 w-9 mr-[6px]" />
          </button>

          {showMenu && (
            <div className="absolute z-30 shadow-lg rounded-xl right-0 top-[52px] w-[240px] h-auto text-gray-900 bg-white py-2">
              <div className="grid w-full grid-rows-2 pb-2">
                <a className="authMenu">Sign up</a>
                <a className="authMenu">Log in</a>
              </div>

              <div className="grid grid-rows-3 pt-2 border-t border-gray-300">
                <a className="authMenu">Host your home</a>
                <a className="authMenu">Host an experience</a>
                <a className="authMenu">Help</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthNav;
