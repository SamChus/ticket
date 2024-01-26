
import download from '../assets/download.png'
import tick from "../assets/tick.png";

export interface Props {
    title: string;
    content: string;
    imageUrl: string; 
}

const Card = ({title, imageUrl}:Props) => {
  return (
    <div className="shadow-sm mt-2 bg-white flex max-w-[353px] h-[521px] m-auto flex-col rounded-2xl overflow-hidden items-center">
      <div className="justify-center items-stretch bg-blue-700 flex w-full flex-col px-11 py-4 ">
        <div className="items-center flex justify-between text-center">
          <div className="justify-center items-stretch flex flex-col">
            <div className="text-white text-lg whitespace-nowrap">SEC</div>
            <div className="text-white text-2xl font-semibold whitespace-nowrap mt-1">
              106
            </div>
          </div>
          <div className="justify-center items-stretch flex flex-col">
            <div className="text-white text-lg whitespace-nowrap">ROW</div>
            <div className="text-white text-2xl font-semibold whitespace-nowrap mt-1">
              22
            </div>
          </div>
          <div className="justify-center items-stretch flex flex-col">
            <div className="text-white text-lg whitespace-nowrap">SEAT</div>
            <div className="text-white text-2xl font-semibold whitespace-nowrap mt-1">
              6
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FCFCFE] to-[#1A181B] pt-4 relative">
        <img
          loading="lazy"
          src={imageUrl}
          className="aspect-[1.69] object-contain object-center w-full overflow-hidden mt-2"
        />
        <div className="absolute bottom-1 right-7 text-white text-center">
          <h1 className="text-[20px] font-medium text-nowrap">
            Olivia Rodrigo | GUTS World Tour
          </h1>
          <p className="text-nowrap text-[12px]">
            Sat, Apr 6, 7:30pm MADISON SQUARE GARDEN
          </p>
        </div>
      </div>
      <div className="text-zinc-900 text-center text-lg font-medium self-center whitespace-nowrap mt-2">
        {title}
      </div>
      <div className="justify-center items-stretch bg-zinc-900 self-center flex w-[197px] max-w-full flex-col mt-7 px-9 py-5 rounded-md">
        <div className="justify-between items-stretch flex gap-2.5">
          <img
            loading="lazy"
            src={download}
            className="aspect-[1.33] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-gray-50 text-xs font-medium self-center grow whitespace-nowrap my-auto">
            Add to Apple Wallet
          </div>
        </div>
      </div>
      <div className="items-stretch self-center flex gap-5 mt-7 px-5">
        <div className="text-blue-700 text-xl font-semibold grow whitespace-nowrap">
          View Barcode
        </div>
        <div className="text-blue-700 text-xl font-semibold grow whitespace-nowrap">
          Ticket Details
        </div>
      </div>
      <div className="justify-center items-center shadow-sm bg-blue-700 flex w-full flex-col mt-5 px-16 h-[50px]">
        <div className="justify-center items-start flex gap-0 pr-6">
          <img
            loading="lazy"
            src={tick}
            className="aspect-[0.85] object-contain object-center w-[17px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div className="text-white text-xs italic font-medium self-center my-auto ml-1">
            ticketmaster.
          </div>
          <div className="text-white text-xs italic font-medium self-center grow whitespace-nowrap my-auto">
            Verified
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card