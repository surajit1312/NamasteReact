import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div class="topnav">
      <button className="btn-logo">
        <i class="fa fa-heartbeat" aria-hidden="true"></i> HeartBEAT
      </button>
      <a class="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button>
            <i class="fa fa-user-circle"></i>
          </button>
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
