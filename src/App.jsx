import "./App.css";
import { useState } from "react";
import MyTitle from "./components/MyTitle";
import Card from "./components/Card";
import Input from "./components/Input";
import Filter from "./components/Filter";

const rangers = [
  {
    name: "Ranger Rouge",
    imgSrc:
      "https://sm.ign.com/t/ign_fr/news/p/power-rang/power-rangers-movie-casts-its-red-ranger_49r6.1280.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#FF0000",
    sex: "male",
  },

  {
    name: "Rangers Family",
    imgSrc:
      "https://media.lesechos.com/api/v1/images/view/62bea2f8f6c57628624e95bb/1280x720/1868461-1566546810-power-rangers.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#40E0D0",
    sex: "male",
  },

  {
    name: "Ranger Doré",
    imgSrc: "https://i.skyrock.net/9310/41439310/pics/1747364230_1.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#FFD700",
    sex: "male",
  },

  {
    name: "Ranger Vert",
    imgSrc:
      "https://www.heroshock.com/wp-content/uploads/2018/04/sentaigobuster20.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#00FF00",
    sexe: "male",
  },

  {
    name: "Ranger Bleu",
    imgSrc:
      "https://i0.wp.com/www.superpouvoir.com/wp-content/uploads/2023/03/power-ranger-bleu-jpg.webp",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#0000FF",
    sex: "male",
  },

  {
    name: "Ranger Jaune",
    imgSrc:
      "https://occ-0-999-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVVQuLbq74aPmr4rQzPIoIB4sdrnZpKk-yFqpzxzLCKtOURrPogKV-oHT-OrPwNh4vHiiAszgwlcQOF9RPgwQNsb5BBhrw-Ktgu6iI0SPJf6XY1WmP-kE7w6.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#FFD700",
    sex: "female",
  },

  {
    name: "Ranger Rose",
    imgSrc:
      "https://img.ohmymag.com/article/1280/oh-my-news/amy-jo-johnson-se-cache-sous-le-costume-de-power-rangers-rose_bd0aadc2e96cdc1c44853cee074499329b527bfa.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#FFC0CB",
    sex: "female",
  },

  {
    name: "Megazord",
    imgSrc: "https://pbs.twimg.com/media/FsPvHITaQAESySr?format=jpg&name=large",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
    color: "#FF0000",
    sex: "machine",
  },
];

function App() {
  const [filterRanger, setFilterRanger] = useState(rangers);

  const handleFilter = (sex) => {
    const filtered = rangers.filter((sexRanger) => sexRanger.sex === sex);
    setFilterRanger(filtered);
  };

  const handleReset = () => {
    setFilterRanger(rangers);
  };
  return (
    <>
      <MyTitle />
      <Input />
      <Filter handleFilter={handleFilter} handleReset={handleReset} />
      <section className="container">
        <div className="rangerGroup">
          {filterRanger.map((pRanger, index) => (
            <Card
              name={pRanger.name}
              imgSrc={pRanger.imgSrc}
              desc={pRanger.desc}
              color={pRanger.color}
              key={index}
              filter={filterRanger}
            />
          ))}
        </div>
      </section>
      {/* <Card
        name="ranger violet"
        imgSrc="https://preview.redd.it/the-purple-power-ranger-tho-v0-2t5dnm918gj81.jpg?width=640&crop=smart&auto=webp&s=70b3d39b0754f2e6cfd16360564906eb91660cdc"
        desc="Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop."
      /> */}
    </>
  );
}

export default App;
