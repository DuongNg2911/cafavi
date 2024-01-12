import "../libs/fonts.css";
import "../styles/main.css";

export default function Main() {
  window.onload = async function displayCafes() {
    const result = await fetch("http://127.0.0.1:8000/get_all_cafes");
    const response = await result.json();

    const main_container = document.getElementById("main-container");
    const right_side = document.getElementById("right-side");
    const left_side = document.getElementById("left-side");
    const cafe_name = document.getElementById("right-side-1");
    const location = document.getElementById("right-side-2");
    const price = document.getElementById("right-side-3");
    const seats = document.getElementById("right-side-4");
    const icon_container = document.getElementById("icon-container");
    const wifi = document.getElementById("icon-1");
    const phone = document.getElementById("icon-2");
    const toilet = document.getElementById("icon-3");
    const socket = document.getElementById("icon-4");

    var content_container_org = document.getElementById("content-container");

    for (let i = 0; i < response.length; i += 1) {
      left_side.style.backgroundImage = `url(${response[i]["img_url"]})`;
      left_side.style.backgroundSize = "cover";

      right_side.id = "right-side-" + String(i);
      left_side.id = "left-side-" + String(i);

      cafe_name.id = "right-side-1-" + String(i);
      cafe_name.innerHTML = response[i]["name"];

      location.id = "right-side-2-" + String(i);
      location.innerHTML = "Location: " + response[i]["location"];

      price.id = "right-side-3-" + String(i);
      price.innerHTML = "Price: " + response[i]["coffee_price"];

      seats.id = "right-side-4-" + String(i);
      seats.innerHTML = "Seats: " + response[i]["seats"];

      icon_container.id = "icon-container-" + String(i);

      wifi.id = "icon-1-" + String(i);

      if (response[i]["has_wifi"] === 0) {
        for (let j = 0; j < wifi.children.length; j += 1) {
          wifi.children[j].setAttribute("stroke", "#FC0000");
        }
      } else {
        for (let j = 0; j < wifi.children.length; j += 1) {
          wifi.children[j].setAttribute("stroke", "#1EEA94");
        }
      }

      phone.id = "icon-2-" + String(i);
      if (response[i]["can_take_calls"] === 0) {
        for (let j = 0; j < phone.children.length; j += 1) {
          phone.children[j].setAttribute("stroke", "#FC0000");
        }
      } else {
        for (let j = 0; j < phone.children.length; j += 1) {
          phone.children[j].setAttribute("stroke", "#1EEA94");
        }
      }

      toilet.id = "icon-3-" + String(i);
      if (response[i]["has_toilet"] === 0) {
        for (let j = 0; j < toilet.children[0].children.length; j += 1) {
          toilet.children[0].children[j].setAttribute("stroke", "#FC0000");
        }
      } else {
        for (let j = 0; j < toilet.children[0].children.length; j += 1) {
          toilet.children[0].children[j].setAttribute("stroke", "#1EEA94");
        }
      }

      socket.id = "icon-4-" + String(i);
      if (response[i]["has_sockets"] === 0) {
        socket.children[0].setAttribute("stroke", "#FC0000");
      } else {
        socket.children[0].setAttribute("stroke", "#1EEA94");
      }

      const child = content_container_org.cloneNode(true);
      child.id = "content-container-" + String(i);
      child.style.display = "flex";
      main_container.appendChild(child);
    }

    right_side.id = "right-side";
    left_side.id = "left-side";
  };

  return (
    <div id="main">
      <div id="main-container">
        <div
          className="content-container"
          id="content-container"
          style={{ display: "none" }}
        >
          <div className="left-side" id="left-side"></div>
          <div className="right-side" id="right-side">
            <p className="cafe-name" id="right-side-1"></p>
            <p className="information" id="right-side-2"></p>
            <p className="information" id="right-side-3"></p>
            <p className="information" id="right-side-4"></p>
            <div className="icon-container" id="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                id="icon-1"
              >
                <path
                  d="M2.5 13.7598C3.32842 13.7598 4 13.0882 4 12.2598C4 11.4314 3.32842 10.7598 2.5 10.7598C1.67157 10.7598 1 11.4314 1 12.2598C1 13.0882 1.67157 13.7598 2.5 13.7598Z"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.75 12.5C13.75 10.9898 13.4525 9.49438 12.8746 8.09914C12.2967 6.70389 11.4496 5.43614 10.3817 4.36827C9.31385 3.3004 8.0461 2.45331 6.65085 1.87538C5.25561 1.29746 3.7602 1 2.24999 1"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.48999 5.75977C3.34358 5.75977 4.18881 5.9279 4.97743 6.25456C5.76604 6.58121 6.4826 7.06 7.08618 7.66358C7.68976 8.26716 8.16855 8.98371 8.4952 9.77233C8.82186 10.561 8.98999 11.4062 8.98999 12.2598"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                id="icon-2"
              >
                <path
                  d="M6.51004 13.5699C5.99164 13.9037 5.37461 14.05 4.76152 13.9845C4.14844 13.919 3.57623 13.6457 3.14004 13.2099L2.76004 12.8299C2.5915 12.6595 2.49696 12.4296 2.49696 12.1899C2.49696 11.9503 2.5915 11.7203 2.76004 11.5499L4.36004 9.95991C4.52871 9.79198 4.75703 9.6977 4.99504 9.6977C5.23305 9.6977 5.46137 9.79198 5.63004 9.95991C5.80041 10.1285 6.03039 10.223 6.27004 10.223C6.50969 10.223 6.73967 10.1285 6.91004 9.95991L9.46004 7.40991C9.62859 7.23954 9.72313 7.00956 9.72313 6.76991C9.72313 6.53026 9.62859 6.30028 9.46004 6.12991C9.29211 5.96124 9.19783 5.73292 9.19783 5.49491C9.19783 5.2569 9.29211 5.02858 9.46004 4.85991L11 3.25991C11.1704 3.09136 11.4004 2.99683 11.64 2.99683C11.8797 2.99683 12.1097 3.09136 12.28 3.25991L12.66 3.63991C13.1036 4.06995 13.3863 4.63911 13.4609 5.25241C13.5356 5.86571 13.3976 6.48606 13.07 7.00991C11.3263 9.59869 9.09882 11.8262 6.51004 13.5699Z"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 1C6.14641 1 5.30117 1.16813 4.51256 1.49478C3.72394 1.82144 3.00739 2.30023 2.40381 2.90381C1.80022 3.50739 1.32144 4.22394 0.994783 5.01256C0.668128 5.80117 0.5 6.64641 0.5 7.5"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 3.5C5.93913 3.5 4.92172 3.92143 4.17157 4.67157C3.42143 5.42172 3 6.43913 3 7.5"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                id="icon-3"
              >
                <g clip-path="url(#clip0_57_24)">
                  <path
                    d="M11 4.5C12.1046 4.5 13 3.60457 13 2.5C13 1.39543 12.1046 0.5 11 0.5C9.89543 0.5 9 1.39543 9 2.5C9 3.60457 9.89543 4.5 11 4.5Z"
                    stroke="#1EEA94"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 6.5C8.5 6.5 8.5 13.5 8.5 13.5H13.5C13.5 13.5 13.5 6.5 11 6.5Z"
                    stroke="#1EEA94"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 4.5C4.10457 4.5 5 3.60457 5 2.5C5 1.39543 4.10457 0.5 3 0.5C1.89543 0.5 1 1.39543 1 2.5C1 3.60457 1.89543 4.5 3 4.5Z"
                    stroke="#1EEA94"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.5C0.5 13.5 0.5 6.5 0.5 6.5H5.5C5.5 6.5 5.5 13.5 3 13.5Z"
                    stroke="#1EEA94"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_24">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                id="icon-4"
              >
                <path
                  d="M8 0.5V5.5H11.5L6 13.5V8.5H2.5L8 0.5Z"
                  stroke="#1EEA94"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
