import React from "react";
import ImageDisplay from "./ImageDisplay/ImageDisplay";

function Favorites(props) {
  return (
    <ImageDisplay
      imageList={props.favorites}
      action={props.action}
      icon="times-circle"
      title="Remove From Favorites"
      class="remove"
    />
  );
}

export default Favorites;
