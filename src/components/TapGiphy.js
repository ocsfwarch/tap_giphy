// Stardard Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// App Imports
import { Header } from "./Header";
import Main from "./Main";
import Search from "./Search/Search";
import Favorites from "./Favorites";
import Status from "./Status";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function TapGiphy() {
  const [favorites, setFavorites] = useState([]); // This contains the saved favorites
  const [status, setStatus] = useState(""); // This contains the status information
  const [searchTerm, setSearchTerm] = useState(""); // This contains the current search term
  const MAX_FAVORITES = 20;

  // The purpose of this hook is to clear the status field
  // after 1 second.
  useEffect(() => {
    const timer = setTimeout(() => {
      updateStatus("");
    }, 1000);
    return () => clearTimeout(timer);
  }, [status]);

  const addFavorite = (item) => {
    console.log(`LEN = ${favorites.length}`);
    if (favorites.length < MAX_FAVORITES) {
      // Check if item already exists in the favorites
      let found = false;
      for (let pic of favorites) {
        if (pic.id === item.id) {
          found = true;
          break;
        }
      }

      if (found) {
        updateStatus(`This image is already in favorites`);
      } else {
        setFavorites([...favorites, item]);
        updateStatus(`The image has been added to favorites`);
      }
    } else {
      updateStatus(`The favorites list is full`);
    }
  };

  const removeFavorite = (item) => {
    const newFavorites = favorites.filter((current_item) => {
      if (current_item.id !== item.id) {
        return true;
      } else {
        updateStatus(`The image has been removed from favorites`);
        return false;
      }
    });
    setFavorites(newFavorites);
  };

  const updateSearchTerm = (strTerm) => {
    setSearchTerm(strTerm);
    updateStatus("");
  };

  const updateStatus = (strStatus) => {
    setStatus(strStatus);
  };

  return (
    <Router>
      <div className="app_container">
        <Header />
        <Status status={status} />
        <Switch>
          <Route
            path="/Favorites"
            render={(props) => (
              <Favorites
                {...props}
                favorites={favorites}
                action={removeFavorite}
              />
            )}
          />
          <Route
            path="/Search"
            render={(props) => (
              <Search
                {...props}
                term={searchTerm}
                updateSearchTerm={updateSearchTerm}
                action={addFavorite}
              />
            )}
          />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default TapGiphy;