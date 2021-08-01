import React from "react";
import pic from "../images/GIPHY Logo 30px.png";

function Main() {
  return (
    <div className="main_container">
      <section className="dialog">
        <section className="header">
          Welcome to the TapGiphy application
        </section>
        <section className="content">
          <section className="introduction">
            The purpose of this application is to allow a user to search for
            GIFs:{" "}
          </section>
          <ul>
            <li>Users can enter search terms for GIFs.</li>
            <li>Users can view GIFs that are returned from the search.</li>
            <li>Users can save GIFs to favorites.</li>
            <li>Users can view GIFs that have been saved as favorites.</li>
          </ul>
          <section className="introduction">
            Select "Search" from the menu to search for GIFs. <br />
            Select "Favorites" from the menu to view GIFs that have been saved
            as favorites.
          </section>
        </section>
        <section className="footer">
          <span>Powered by&nbsp;</span> <img src={pic} alt="GIPHY" />
        </section>
      </section>
    </div>
  );
}

export default Main;
