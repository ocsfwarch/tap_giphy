import React from "react";
import renderer from "react-test-renderer";
import Favorites from "../components/Favorites";

const favorites = [
  {
    id: "26gsvA7sDa86fDu6s",
    image:
      "https://media4.giphy.com/media/26gsvA7sDa86fDu6s/giphy.gif?cid=4647a4e059uevh59ry19ypaw55lv68zntb1h4pmvoujvkr2a&rid=giphy.gif&ct=g",
    desc: "Busch Beer GIF by Busch",
  },
  {
    id: "78ny3pDP74gDu",
    image:
      "https://media4.giphy.com/media/78ny3pDP74gDu/giphy.gif?cid=4647a4e059uevh59ry19ypaw55lv68zntb1h4pmvoujvkr2a&rid=giphy.gif&ct=g",
    desc: "vs hunter GIF",
  },
  {
    id: "K9b2WiPZi0ZjO",
    image:
      "https://media4.giphy.com/media/K9b2WiPZi0ZjO/giphy.gif?cid=4647a4e059uevh59ry19ypaw55lv68zntb1h4pmvoujvkr2a&rid=giphy.gif&ct=g",
    desc: "deer popcorn GIF",
  },
];

it("renders correctly", () => {
  const tree = renderer.create(<Favorites favorites={favorites} />).toJSON();
  expect(tree).toMatchSnapshot();
});
