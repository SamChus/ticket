
import Carousel from "./component/Carousel";
import musicImg from "./assets/musicImg.png";


export interface cardData {
  title: string;
  content: string;
  imageUrl: string;
}

function App() {
   const cardData = [
     { title: "ENTER NORTH GATE", content: "Content 1", imageUrl: musicImg },
     { title: "ENTER NORTH GATE", content: "Content 2", imageUrl: musicImg },
     { title: "ENTER NORTH GATE", content: "Content 3", imageUrl: musicImg },
     // Add more cards as needed
   ];
  
  return (
    <div className="max-w-[393px] m-auto p-3">
      <Carousel cardData={cardData}/>
      <div className="flex justify-between items-center mt-[55px]">
        <button className="bg-[#0755C1] text-white w-[157px] p-[12px] font-bold rounded">
          Transfer
        </button>
        <button className="text-[#fff] bg-[#E2E1E7] font-bold p-[12px] rounded w-[157px]">
          Sell
        </button>
      </div>
    </div>
  );
}

export default App;
