import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ameesh1 from "./assets/ameesh-1.png";
import ameesh2 from "./assets/ameesh-2.png";
import ameesh3 from "./assets/ameesh-3.png";
import ameesh4 from "./assets/ameesh-4.png";
import ameesh5 from "./assets/ameesh-5.png";
import ameesh6 from "./assets/ameesh-6.png";
import ameesh7 from "./assets/ameesh-7.png";
import ameesh8 from "./assets/ameesh-8.png";
import ameesh9 from "./assets/ameesh-9.png";
import ameesh10 from "./assets/ameesh-10.png";
import ameesh11 from "./assets/ameesh-11.png";
import ameesh12 from "./assets/ameesh-12.png";
import ameesh13 from "./assets/ameesh-13.png";
import ameesh14 from "./assets/ameesh-14.png";
import ameesh15 from "./assets/ameesh-15.png";
import ameesh16 from "./assets/ameesh-16.png";
import ameesh17 from "./assets/ameesh-17.png";
import ameesh18 from "./assets/ameesh-18.png";
import ameesh19 from "./assets/ameesh-19.png";
import ameesh20 from "./assets/ameesh-20.png";

const Data = [
  "2022-10-23::sending KICK BACK to each other with ameesh",
  "2022-10-08::ameesh for coming to have VH after a monumental night",
  "2022-06-11::ameesh for listening to my very cringey existential kink exercise",
  "2022-04-21::ameesh for calling me out on things",
  "2021-12-05::ameesh good at just having fun and taking joy from the simple things",
  "2022-11-03::i love how much on the same wavelength me and ameesh are now. like we're thinking about the same things, talking the same language. it's so intimate",
  "2021-12-23::ameesh is incredibly supportive and very honest and good at giving intentional feedback.",
  "2022-11-24::ameesh being a slow ass because of his berkeley friends but we had a nice drive over the bridge all the way to south bay for a thanksgiving friendsgiving dinner and quickly recovered from his bad mood with a healthy dose of anime and talking about pursuing our passions",
  "2021-12-26::ameesh is very good at being vulnerable and just dropping things that are not fully formed and trusting friends to be there for it",
  "2022-05-23::ameesh for hyping me up after i broke my streak",
];
const SortedData = Data.map(convertDataToMoment).sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);
// fill out images
const Images = [
  ameesh1,
  ameesh2,
  ameesh3,
  ameesh4,
  ameesh5,
  ameesh6,
  ameesh7,
  ameesh8,
  ameesh9,
  ameesh10,
  ameesh11,
  ameesh12,
  ameesh13,
  ameesh14,
  ameesh15,
  ameesh16,
  ameesh17,
  ameesh18,
  ameesh19,
  ameesh20,
];

interface Moment {
  date: string;
  text: string;
}

function convertDataToMoment(data: string): Moment {
  const [date, text] = data.split("::");
  return { date, text };
}

function App() {
  const background = useMemo(() => {
    const backgroundArr = [];
    for (let i = 0; i < 5; i++) {
      backgroundArr.push(Array(100).fill(<span>🚽</span>));
    }
    return backgroundArr;
  }, []);

  const shuffledImages = useMemo(() => {
    return Images.sort(() => Math.random() - 0.5);
  }, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % shuffledImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [momentIdx, setMomentIdx] = useState(0);

  const onNext = () => {
    setMomentIdx((momentIdx + 1) % SortedData.length);
  };
  const moment = SortedData[momentIdx];

  return (
    <div className="root">
      <div className="background">{background}</div>
      <div className="content">
        <img src={shuffledImages[index]} />
        <h1>happy birthday old man</h1>
        <p>
          here are some moments from the past year where I've appreciated you.
        </p>
        <div>
        <div className="moment">
          <div className="date">{moment.date}</div>
          {moment.text}
        </div>
        <div  className="next">
        {momentIdx + 1} / {SortedData.length} <button onClick={onNext}>></button>
        </div>
        </div>
      <div className="signature">-from spencer</div>  
      </div>
    </div>
  );
}

export default App;
