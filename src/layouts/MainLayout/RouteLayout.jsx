import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo2.jpg";
import burgerNav from "../../assets/burgerNav.svg";
import Footer from "../../components/static-footer/Footer";

import "./RouteLayout.css";

export default function RouteLayout() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="route-layout">
      <header>
        <nav className={isActive ? `header-nav mobile-overlay` : "header-nav"}>
          <div className="flex-row header-nav-logo">
            <Link to="/" className="logo">
              <img src={logo} alt="fictional-website-logo" className="logo" />
            </Link>

            <img
              src={burgerNav}
              alt="burger-nav"
              className="burger-nav"
              onClick={handleClick}
            />
          </div>

          <div
            className={isActive ? `header-nav-lvl2 show` : "header-nav-lvl2"}
            style={{
              zIndex: 2,
            }}
          >
            <div className="flex-row header-nav-signup">
              <p className="sign-up">Welcome Back! eArL</p>
              <NavLink to="/brewery/wishlist" className="sign-up">
                My Wishlist!
              </NavLink>

              {/* <NavLink to="about" className="sign-up">
                About
              </NavLink> */}

              <a href="#" className="log-in">
                Log out
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="recipes-display">
        <Outlet button={isActive} />{" "}
      </main>

      <Footer />
    </div>
  );
}
