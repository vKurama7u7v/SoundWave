import React, { useState } from "react";

function TopBarComponent(props) {
  const { user, isActive, onSetActive, mode, onSetMode } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onSetDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="topbar">
        <nav>
          <div className="left">
            {/*  */}
            <i
              className={isActive ? "uil uil-multiply" : "uil uil-align-left"}
              onClick={() => onSetActive()}
            ></i>
          </div>

          {/* <div className="center">pendiente</div> */}

          <div className="right">
            <div class="flex justify-center">
              <div class="relative inline-block">
                {/* <!-- Button --> */}

                <button
                  x-ref="button"
                  type="button"
                  onClick={() => onSetDropdown()}
                >
                  <div class="flex items-center gap-3">
                    <div class="text-sm text-right">
                      <div class="font-medium text-gray-700">
                        {user ? user.display_name : <></>}
                      </div>
                      <div class="text-gray-400 capitalize">
                        {user ? user.product : <></>}
                      </div>
                    </div>
                    <div class="relative h-10 w-10">
                      <img
                        class="h-full w-full rounded-full object-cover object-center ring ring-white"
                        src={user ? user.images[1].url : ""}
                        alt=""
                      />
                      <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                  </div>
                </button>

                {/* <!-- Panel --> */}
                <div
                  id="dropdown-profile"
                  class={
                    isOpen
                      ? "absolute right-0 z-10 mt-2 w-52 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg visible"
                      : "absolute right-0 z-10 mt-2 w-52 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg"
                  }
                >
                  <div class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="relative h-10 w-10">
                        <img
                          class="h-full w-full rounded-full object-cover object-center ring ring-white"
                          src={user ? user.images[1].url : ""}
                          alt=""
                        />
                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {user ? user.display_name : <></>}
                        </div>
                        <div class="text-gray-400 capitalize">
                          {user ? user.product : <></>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-1">
                    <a
                      href="#"
                      class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i class="uil uil-user"></i>
                      Mi Perfil
                      {/* <span class="inline-flex flex-1 justify-end gap-1 text-xs capitalize text-gray-400">
                        <kbd class="min-w-[1em] font-sans">⌥</kbd>
                        <kbd class="min-w-[1em] font-sans">⇧</kbd>
                        <kbd class="min-w-[1em] font-sans">P</kbd>
                      </span> */}
                    </a>

                    <a
                      href="#"
                      class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => onSetMode()}
                    >
                      <i class={mode ? "uil uil-moon" : "uil uil-sun"}></i>
                      Tema:{" "}
                      <span className="font-medium">
                        {mode ? <>Oscuro</> : <>Claro</>}
                      </span>
                    </a>
                    <a
                      href="#"
                      class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <i class="uil uil-setting"></i>
                      Configuraciones
                    </a>
                  </div>
                  <div class="p-1">
                    <a
                      href="#"
                      class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i class="uil uil-power"></i>
                      Cerrar Sesión
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default TopBarComponent;
