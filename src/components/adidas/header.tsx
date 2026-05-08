import { AdidasLogo } from "./adidas-logo";
import { FifaLogo } from "./fifa-logo";
import { IconButton } from "./icon-button";

const mainLinks = ["MEN", "WOMEN", "KIDS", "SALE", "NEW & TRENDING"];

export function Header() {
  return (
    <header className="site-header">
      <div className="promo-bar">
        <button className="promo-link">
          <span>FREE STANDARD SHIPPING</span>
        </button>
      </div>

      <div className="nav-row">
        <IconButton label="Abrir menu">
          <span className="hamburger" aria-hidden="true" />
        </IconButton>

        <a className="brand-link" href="#" aria-label="adidas and FIFA home">
          <AdidasLogo />
          <span className="brand-divider" aria-hidden="true" />
          <FifaLogo />
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          {mainLinks.map((link) => (
            <a
              className={link === "SALE" ? "is-sale" : undefined}
              href="#"
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <span className="sr-only">Buscar</span>
            <input type="search" placeholder="Search" />
            <SearchIcon />
          </label>

          <IconButton label="Perfil">
            <ProfileIcon />
          </IconButton>
          <IconButton label="Favoritos">
            <WishlistIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="var(--icon-primary-color, #000)"
        fillRule="evenodd"
        d="M9.225 20h13.55l3.647 5.732-.844.536L22.226 21H9.774l-3.352 5.268-.844-.536zM16 17a5 5 0 1 0-.001-10.001A5 5 0 0 0 16 17m0 1a6 6 0 1 0-.001-12.001A6 6 0 0 0 16 18"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="var(--icon-primary-color, #000)"
        fillRule="evenodd"
        d="M6.72 6h4.987L16 10.293 20.293 6h4.986l4.354 7.074L16 26.707 2.367 13.074zm.56 1-3.647 5.926L16 25.293l12.367-12.367L24.721 7h-4.014L16 11.707 11.293 7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="var(--icon-primary-color, #000)"
        fillRule="evenodd"
        d="M14.09 6a8.09 8.09 0 1 0 0 16.182A8.09 8.09 0 0 0 14.09 6M5 14.09a9.09 9.09 0 1 1 15.863 6.066l6.49 6.49-.707.708-6.49-6.491A9.09 9.09 0 0 1 5 14.091"
        clipRule="evenodd"
      />
    </svg>
  );
}
