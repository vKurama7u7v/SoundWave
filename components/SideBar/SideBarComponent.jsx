import Link from "next/link";
import React from "react";

function SideBarComponent(props) {
  const { isActive, onSetActive } = props;
  return (
    <>
      <nav className={isActive ? "sidebar" : "sidebar close"}>
        <header>
          <div className="image-text">
            <span className="image">
              <img
                src="https://static-00.iconduck.com/assets.00/spotify-icon-2048x2048-3n21jy7o.png"
                alt=""
              />
            </span>

            <div className="text logo-text">
              <div className="name">SoundWave</div>
              {/* <div className="profession">Web Developer</div> */}
            </div>
          </div>

          {/* <i
            class="bx bx-chevron-right toggle"
            onClick={() => onSetActive()}
          ></i> */}
        </header>
        <div class="menu-bar">
          <div class="menu">
            {/* <li class="search-box">
              <i class="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li> */}

            <ul class="menu-links">
              <li class="nav-link">
                <Link href="/app" className="">
                  <i class="uil uil-estate icon"></i>
                  <span class="text nav-text">Dashboard</span>
                </Link>
              </li>

              {/* <li class="nav-link">
                <Link href="/app/tracks">
                  <i class="uil uil-graph-bar icon"></i>
                  <span class="text nav-text">Tendencias</span>
                </Link>
              </li> */}

              <li class="nav-link">
                <Link href="/app/tracks">
                  <i class="uil uil-music-note icon"></i>
                  <span class="text nav-text">Música</span>
                </Link>
              </li>

              {/* <li class="nav-link">
                <a href="#">
                  <i class="uil uil-headphones-alt icon"></i>
                  <span class="text nav-text">Artistas</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#" className="nav-link--active">
                  <i class="uil uil-music icon"></i>
                  <span class="text nav-text">Géneros</span>
                </a>
              </li> */}
            </ul>
          </div>

          <div class="bottom-content">
            <li class="">
              <a href="#">
                <i class="bx bx-log-out icon"></i>
                <span class="text nav-text">Cerrar Sesión</span>
              </a>
            </li>

            {/* <li class="mode">
              <div class="sun-moon">
                <i class="bx bx-moon icon moon"></i>
                <i class="bx bx-sun icon sun"></i>
              </div>
              <span class="mode-text text">Dark mode</span>

              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBarComponent;
