import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImageDisplayListItem(props) {
  return (
    <section className="image_item_container">
      <img src={props.item.image} alt={props.item.desc} />
      <footer
        className="footer"
        onClick={(e) => {
          props.action(props.item);
        }}
      >
        <label htmlFor="add_favorite">
          <FontAwesomeIcon
            id="add_favorite"
            className={props.class}
            icon={["fas", props.icon]}
            title={props.title}
          />
          {props.title}
        </label>
      </footer>
    </section>
  );
}

export default ImageDisplayListItem;
