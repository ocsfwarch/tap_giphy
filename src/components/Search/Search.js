import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ImageDisplay from "../ImageDisplay/ImageDisplay";

function Search(props) {
  const LIMIT = 12;
  const [imageList, setImageList] = useState([]);
  const API_URL =
    "https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=";

  // This useEffect is going to run the actual search
  // and then parse the results down to the items
  // needed to display the results.
  useEffect(() => {
    async function runSearch(searchTerm) {
      if (searchTerm && searchTerm.length > 0) {
        searchTerm = searchTerm.replace(/\s+/g, "+");
        const response = await fetch(`${API_URL}${searchTerm}&limit=${LIMIT}`);
        const imgJson = await response.json();
        setImageList(await buildImgList(imgJson.data));
      }
    }
    runSearch(props.term);
  }, [props.term]);

  const buildImgList = async (theList) => {
    const imgDisplay = theList.map((item) => {
      return {
        id: item.id,
        image: item.images.original.url,
        desc: item.title,
      };
    });
    return imgDisplay;
  };

  return (
    <div className="search_container">
      <SearchForm term={props.term} updateSearchTerm={props.updateSearchTerm} />
      <ImageDisplay
        imageList={imageList}
        action={props.action}
        icon="star"
        title="Add To Favorites"
        class="add"
      />
    </div>
  );
}

export default Search;
