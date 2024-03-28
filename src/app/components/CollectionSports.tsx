"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface Ticket {
  id: number;
  img: string;
  title: string;
  location: string;
  collection: string;
}

const TicketData: Ticket[] = [
  {
    id: 1,
    img: "/images/Ticket_Mockup 1.png",
    title: "las vegas Aviaters",
    location: "Las vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    id: 2,
    img: "/images/Ticket_Mockup 2.png",
    title: "Sacramento River Cats",
    location: "Sutter Health Park, Sacramento",
    collection: "orange Collection",
  },
  {
    id: 3,
    img: "/images/Ticket_Mockup 1.png",
    title: "las vegas Aviaters",
    location: "Las vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    id: 4,
    img: "/images/Ticket_Mockup 1.png",
    title: "las vegas Aviaters",
    location: "Las vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    id: 5,
    img: "/images/Ticket_Mockup 1.png",
    title: "Sacramento River Cats",
    location: "Sutter Health Park, Sacramento",
    collection: "orange Collection",
  },
  {
    id: 6,
    img: "/images/Ticket_Mockup 1.png",
    title: "las vegas Aviaters",
    location: "Las vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
];

const ITEMS_PER_PAGE = 3;

const CollectionSports = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(TicketData.length / ITEMS_PER_PAGE);

  const startItemIndex = currentPage * ITEMS_PER_PAGE;
  const endItemIndex = Math.min(
    startItemIndex + ITEMS_PER_PAGE,
    TicketData.length
  );
  const displayedItems = TicketData.slice(startItemIndex, endItemIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="m-5 bg-gray-50 dark:bg-gray-800">
      <div>
        <h1 className="text-center text-4xl font-bold pt-12">Collection Spotlight</h1>
        <p className="text-center text-sm my-4">
          Discover extraordinary moments with our spotlight Collection
          metatickets-exclusive access to premium events for an unforgettable
          <br />
          experience. Grab yours today!
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={`border border-blue-400 text-blue-400 ml-32 text-4xl p-1 flex justify-center  ${
            currentPage === 0 && "opacity-50"
          }`}
          onClick={handlePrevPage}
        >
          <IoIosArrowBack />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-8">
          {displayedItems.map((item) => (
            <div
              className="p-2 w-full sm:w-48  bg-white dark:bg-gray-600  relative  mb-4 sm:mb-0"
              key={item.id}
            >
              <div className="border-b-2 border-dashed">
                <Image
                  src={item.img}
                  width={400}
                  height={600}
                  alt={item.title}
                />
              </div>
              <div>
                <h3 className="mt-4 text-bold text-center text-sm">{item.title}</h3>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="border-r-2 border-black pr-2 text-sm">oct 15</div>
                  <div className="border-r-2 border-black pr-2 text-sm">sun</div>
                  <div className="text-sm">4:40pm</div>
                </div>
                <div className="mt-2 text-center text-sm">{item.location}</div>
                <div className="bg-black text-white text-center flex justify-center py-1 px-1  text-sm mt-3 ">
                  {item.collection}
                </div>
                <div className="flex justify-between">
                <div className="relative  bottom-40  right-6 w-6 h-6 rounded-full bg-purple-50 dark:bg-gray-800  ">
                  {/* circle */}
                </div>
                <div className="relative  bottom-40 left-6 w-6 h-6 rounded-full bg-purple-50 dark:bg-gray-800 ">
                  {/* circle */}
                </div>

                </div>
               
              </div>
            </div>
          ))}
        </div>
        <div
          className={`border border-blue-400 text-blue-400 mr-32 text-4xl p-1 flex justify-center ${
            currentPage === totalPages - 1 && "opacity-50"
          }`}
          onClick={handleNextPage}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default CollectionSports;
