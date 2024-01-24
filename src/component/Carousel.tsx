 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { cardData } from "../App";

interface Props {
  cardData: cardData[];
}

 const Carousel = ({cardData}: Props) => {

   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };

   return (
  
       <Slider {...settings}>
         {cardData.map((card, index) => (
           <div key={index}>
             <Card
               title={card.title}
               content={card.content}
               imageUrl={card.imageUrl}
             />
           </div>
         ))}
       </Slider>
   );
 };

 export default Carousel;