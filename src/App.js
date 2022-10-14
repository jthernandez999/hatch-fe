import "./App.css";
import Hero from "./components/Hero";
import sunriseAlarm from "./assets/sunrise-alarm.svg";
import sunshineHeartIcon from "./assets/sunshine-heart-icon.svg";
import wavyLines from "./assets/wavy-lines-icon.svg";

const cards = [
    {
        id: 1,
        text: "Text",
        imageUrl: wavyLines,
    },
    {
        id: 2,
        text: "Text",
        imageUrl: sunshineHeartIcon,
    },
    {
        id: 3,
        text: "Text",
        imageUrl: sunriseAlarm,
    },
];

const CardListItem = (props) => {
    return (
        <div className='main-container'>
            <li>
                <div className='card-container'>
                    <img className='cardImg' src={props.card.imageUrl} />
                    <p>{props.card.text}</p>
                </div>
            </li>
        </div>
    );
};

const CardList = () => {
    return (
        <div className='card-list-container'>
            <h1 className='card-list-section-header'> Your heading here</h1>
            <ul className='card-list'>
                {cards.map((card) => {
                    return <CardListItem card={card} key={card.id} />;
                })}
            </ul>
        </div>
    );
};

function App() {
    return (
        <div className='App'>
            <Hero />
            <CardList />
        </div>
    );
}

export default App;
