import "./App.css";
import MyTitle from "./components/MyTitle";
import Card from "./components/Card";
import Input from "./components/Input";

const rangers = [
  {
    name: "Ranger Rouge",
    imgSrc:
      "https://sm.ign.com/t/ign_fr/news/p/power-rang/power-rangers-movie-casts-its-red-ranger_49r6.1280.jpg",
    desc: "Gummies sweet tiramisu danish powder. Croissant carrot cake jelly-o cookie chocolate gingerbread macaroon lollipop. Gummi bears soufflé danish candy canes lollipop.",
  },

  {
    name: "Rangers Family",
    imgSrc:
      "https://media.lesechos.com/api/v1/images/view/62bea2f8f6c57628624e95bb/1280x720/1868461-1566546810-power-rangers.jpg",
    desc: "Candy canes gummies shortbread lollipop tart dragée. Apple pie biscuit pie lollipop apple pie toffee lemon drops. Chocolate chocolate candy chocolate sweet liquorice fruitcake jujubes gummies. Jujubes lollipop toffee fruitcake jujubes ice cream.",
  },

  {
    name: "Ranger Doré",
    imgSrc: "https://i.skyrock.net/9310/41439310/pics/1747364230_1.jpg",
    desc: "Sesame snaps pastry marzipan fruitcake bear claw topping cake. Dragée marzipan dragée sweet bear claw marzipan oat cake. Jelly-o cookie tootsie roll soufflé tiramisu gummies dessert toffee dessert. Wafer topping cotton candy chocolate tart caramels pie halvah.",
  },

  {
    name: "Ranger Vert",
    imgSrc:
      "https://www.heroshock.com/wp-content/uploads/2018/04/sentaigobuster20.jpg",
    desc: "Bear claw dragée tart dragée sesame snaps. Jelly-o jujubes marzipan carrot cake tiramisu cookie gingerbread. Cheesecake candy topping tart jelly-o marzipan cookie toffee. Wafer lemon drops chocolate cake caramels toffee.",
  },

  {
    name: "Ranger Bleu",
    imgSrc:
      "https://i0.wp.com/www.superpouvoir.com/wp-content/uploads/2023/03/power-ranger-bleu-jpg.webp",
    desc: "Dragée topping soufflé lemon drops shortbread cake. Ice cream jelly-o cake fruitcake chocolate cake fruitcake gingerbread. Chocolate cake sweet roll gingerbread macaroon jelly-o gummi bears. Apple pie toffee cookie caramels caramels dragée.",
  },

  {
    name: "Ranger Jaune",
    imgSrc:
      "https://occ-0-999-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVVQuLbq74aPmr4rQzPIoIB4sdrnZpKk-yFqpzxzLCKtOURrPogKV-oHT-OrPwNh4vHiiAszgwlcQOF9RPgwQNsb5BBhrw-Ktgu6iI0SPJf6XY1WmP-kE7w6.jpg",
    desc: "Halvah wafer soufflé oat cake candy canes cotton candy lemon drops cake icing. Sweet roll carrot cake cotton candy cake sweet macaroon jelly-o powder. Cake tiramisu marshmallow jelly apple pie tootsie roll topping. Gummies sugar plum sugar plum chocolate bar powder.",
  },

  {
    name: "Ranger Rose",
    imgSrc:
      "https://img.ohmymag.com/article/1280/oh-my-news/amy-jo-johnson-se-cache-sous-le-costume-de-power-rangers-rose_bd0aadc2e96cdc1c44853cee074499329b527bfa.jpg",
    desc: "Oat cake jujubes cake tootsie roll bear claw tart jelly. Dessert jelly caramels lemon drops liquorice brownie. Jujubes cotton candy marzipan halvah oat cake. Wafer marshmallow donut dragée tart dragée jelly biscuit sugar plum.",
  },

  {
    name: "Megazord",
    imgSrc: "https://pbs.twimg.com/media/FsPvHITaQAESySr?format=jpg&name=large",
    desc: "Donut chupa chups lemon drops marzipan oat cake sweet roll soufflé pudding cupcake. Powder pastry wafer tart topping chocolate bar danish jelly-o. Candy muffin candy lollipop cake macaroon cheesecake.",
  },
];

function App() {
  return (
    <>
      <MyTitle />
      <Input />
      <section className="container">
        <div className="rangerGroup">
          {rangers.map((pRanger, index) => (
            <Card
              name={pRanger.name}
              imgSrc={pRanger.imgSrc}
              desc={pRanger.desc}
              key={index}
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
