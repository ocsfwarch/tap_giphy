import "./ImageDisplay.css";
import ImageDisplayList from "./ImageDisplayList";

function ImageDisplay(props) {
  return (
    <div className="image_display_container">
      <ImageDisplayList
        imageList={props.imageList}
        action={props.action}
        icon={props.icon}
        title={props.title}
        class={props.class}
      />
    </div>
  );
}

export default ImageDisplay;
