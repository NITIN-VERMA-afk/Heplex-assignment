import React from "react";
import Image from "next/image";

interface Card {
  id: number;
  img: string;
  title: string;
  Events: number;
  Sports: string;
}

const cardData: Card[] = [
  {
    id: 1,
    img: "/images/img2.png",
    title: "Sacramento River Cats",
    Events: 48,
    Sports: "Baseball",
  },
  {
    id: 2,
    img: "/images/img3.png",
    title: "Las vagus Aviators",
    Events: 28,
    Sports: "Baseball",
  },
  {
    id: 3,
    img: "/images/img1.png",
    title: "New Jersey Devils",
    Events: 15,
    Sports: "Hockey",
  },
  {
    id: 4,
    img: "/images/img3.png",
    title: "Las vegus Aviators ",
    Events: 28,
    Sports: "Baseball",
  },
];

const Sports = () => {
  return (
    <div className="container w-3/4">
      <h1 className="inline-block border-b text-black dark:text-white border-gray-500 ml-10">sports</h1>
      <div className="flex justify-center items-center gap-2 flex-wrap md:justify-center mt-4">
        {cardData.map((item) => (
          <div
            className="card p-2 w-52 max-h-full bg-gray-50 dark:bg-gray-500"
            key={item.id}
          >
            <Image src={item.img} width={217} height={410} alt={item.title} />

            <h3 className="my-4">{item.title}</h3>
            <div className="bg-gray-50 dark:bg-gray-800">
              <table className="mx-auto border-collapse">
                <tbody>
                  <tr>
                    <th className="text-xs text-gray-600  dark:text-gray-200 text-center py-1 px-3">Total Events</th>
                    <th className="text-xs text-gray-600  dark:text-gray-200   text-center py-1 px-3">Sport</th>
                  </tr>
                  <tr>
                    <td className="text-sm text-center py-1 px-3">{item.Events} Events</td>
                    <td className="text-sm text-center py-1 px-3">{item.Sports}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="relative p-2 w-52 max-h-full flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-500">
          <Image
            src="/images/adv.png"
            width={217}
            height={218}
            alt="Picture of the author"
          />
          <h1 className="text-xl mt-2">Advertisement title</h1>
          <p className="py-2 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, iste
            repellendus reiciendis voluptatum minus provident ratione eaque
            quibusdam dolore repudiandae illum, maiores Lorem, ipsum Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Officiis quisquam ullam
            totam itaque, magni et, saepe sunt, modi animi voluptatum nulla est
            unde incidunt qui omnis. Unde dolor laboriosam dicta.lorem
          </p>
          <div>
            <p className="bg-black text-white absolute top-2 right-2 px-2 text-sm">
              AD
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center py-1 px-2 mt-8 text text-white bg-blue-500">
          see more
        </button>
      </div>
    </div>
  );
};

export default Sports;