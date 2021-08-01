import { useState, useEffect } from "react";
import ImageDisplayListItem from "./ImageDisplayListItem";

function ImageDisplayList(props) {
  const [listItems, setListItems] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (props.imageList && props.imageList.length) {
      const imgList = props.imageList.map((item) => (
        <li key={`${item.id}_${props.class}`}>
          <ImageDisplayListItem
            item={item}
            action={props.action}
            icon={props.icon}
            title={props.title}
            class={props.class}
          />
        </li>
      ));
      setShowList(true);
      setListItems(imgList);
    } else {
      setShowList(false);
      setListItems([<li key="0">no entries</li>]);
    }
  }, [props]);
  return (
    <section className="image_list">
      <ul className={showList ? "" : "hide_list"}>{listItems}</ul>
    </section>
  );
}

export default ImageDisplayList;
