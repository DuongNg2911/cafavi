import "../styles/navbar.css";
import "../libs/fonts.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeState } from "../states/login_state";

export default function Navbar() {
  const dispatch = useDispatch();

  const loginClick = () => {
    dispatch(changeState(true));
  };

  const [filterClicked, setFilterClicked] = useState(false);
  const filterClick = () => {
    if (filterClicked === false) {
      setFilterClicked(true);
      document.getElementById("dropdown").style.animationName = "dropdown";
    } else {
      setFilterClicked(false);
      document.getElementById("dropdown").style.animationName = "dropup";
    }
  };
  return (
    <div className="navbar-container">
      <div id="navbar">
        <div id="logo-container">
          <img src={logo} alt="logo" id="logo" />
          <p>Cafavi</p>
        </div>
        <div id="right-menu">
          <div className="link" id="filter" onClick={filterClick}>
            <p className="filter-text">Filters</p>
          </div>
          <div className="link" id="suggest">
            <p>Suggest Places</p>
          </div>
          <div id="login" onClick={loginClick}>
            <p>Login</p>
          </div>
        </div>
      </div>
      <div id="dropdown">
        <div
          id="dropdown-container"
          style={{ display: filterClicked === true ? "flex" : "none" }}
        >
          <div id="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M2.53875 10.2308C2.53875 15.3288 6.67144 19.4615 11.7694 19.4615C16.8673 19.4615 21 15.3288 21 10.2308C21 5.13275 16.8673 1 11.7694 1C6.67144 0.999999 2.53875 5.13275 2.53875 10.2308Z"
                stroke="#C08261"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.24609 16.7538L1 21"
                stroke="#C08261"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.2646 5.53777C11.363 4.97191 12.1753 4.97191 12.2738 5.53777C12.6304 7.58778 14.1918 9.21828 16.2245 9.66323L16.3803 9.69734C16.9395 9.81977 16.943 10.6161 16.3848 10.7434L16.2033 10.7848C14.1802 11.2462 12.632 12.8772 12.2763 14.9215C12.1774 15.4902 11.3609 15.4902 11.262 14.9215C10.9064 12.8772 9.35811 11.2462 7.33507 10.7848L7.1535 10.7434C6.59534 10.6161 6.59882 9.81977 7.15807 9.69734L7.31387 9.66323C9.34651 9.21828 10.9079 7.58778 11.2646 5.53777Z"
                stroke="#C08261"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <textarea
              placeholder="Enter a cafe"
              rows={1}
              cols={70}
              wrap="off"
              style={{ border: "none", resize: "none" }}
            ></textarea>
          </div>
          <div id="purpose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M3.30769 6.38452H16.3846V14.0768C16.3846 14.8929 16.0605 15.6754 15.4834 16.2525C14.9064 16.8296 14.1237 17.1538 13.3077 17.1538H5.61538C4.79934 17.1538 4.01671 16.8296 3.43968 16.2525C2.86263 15.6754 2.53846 14.8929 2.53846 14.0768V7.15375C2.53846 6.94974 2.61951 6.75408 2.76377 6.60983C2.90802 6.46557 3.10368 6.38452 3.30769 6.38452Z"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 21H21"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3846 6.38452H17.9231C18.7391 6.38452 19.5217 6.70869 20.0988 7.28574C20.6758 7.86277 21 8.6454 21 9.46144C21 10.2775 20.6758 11.0601 20.0988 11.6372C19.5217 12.2142 18.7391 12.5384 17.9231 12.5384H16.3846"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.84615 1V2.53846"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5385 1V2.53846"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.69231 1V2.53846"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Purpose</p>
          </div>
          <div id="prices">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M13.0399 9.8014C13.0399 9.8014 10.9618 8.90398 9.80728 10.0258C8.27697 11.5127 10.5 15.4104 7.72916 16.3079C7.72916 16.3079 10.8079 16.4574 13.2708 16.3079"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.3472 13.1668H7.72916"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 21C16.0417 21 20 19.0952 20 14.8556C20 10.2473 17.625 7.17511 12.875 4.87097L14.7433 2.53609C14.8383 2.38291 14.8897 2.20809 14.8926 2.02937C14.8954 1.85065 14.8495 1.67438 14.7595 1.51843C14.6694 1.36248 14.5385 1.23239 14.38 1.14134C14.2214 1.0503 14.0409 1.00154 13.8567 1H7.14333C6.9591 1.00154 6.77857 1.0503 6.62003 1.14134C6.46147 1.23239 6.33056 1.36248 6.24055 1.51843C6.15052 1.67438 6.1046 1.85065 6.10744 2.02937C6.11027 2.20809 6.16175 2.38291 6.25667 2.53609L8.125 4.88632C3.375 7.20583 1 10.278 1 14.8863C1 19.0952 4.95833 21 10.5 21Z"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Prices</p>
          </div>
          <div id="seats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                d="M14.0704 8.41484L17.5352 4.95001L21 8.41484"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0704 13.9584L17.5352 17.4233L21 13.9584"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.0779 6.80338C7.68045 6.80338 8.97959 5.50424 8.97959 3.90169C8.97959 2.29914 7.68045 1 6.0779 1C4.47535 1 3.17621 2.29914 3.17621 3.90169C3.17621 5.50424 4.47535 6.80338 6.0779 6.80338Z"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.1559 11.8814C11.1559 10.5346 10.6209 9.24301 9.66862 8.2907C8.71632 7.33841 7.42472 6.80341 6.07795 6.80341C4.7312 6.80341 3.4396 7.33841 2.48729 8.2907C1.535 9.24301 1 10.5346 1 11.8814V14.0576H3.17626L3.90169 19.861H8.25423L8.97965 14.0576H11.1559V11.8814Z"
                stroke="#C08261"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Seats</p>
          </div>
        </div>
      </div>
    </div>
  );
}
