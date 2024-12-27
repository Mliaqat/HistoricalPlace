"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { historicalPlaces } from "@/utils/Data";
import { useSelector } from "react-redux";

const getRandomPlaces = (visitedPlaces: number[]) => {
  const remainingPlaces = historicalPlaces.filter(
    (place) => !visitedPlaces.includes(place.id)
  );
  const shuffled = remainingPlaces.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

function SuggestedPlaces() {
  const visitedPlaces = useSelector((state: any) => state.data.visitedList);

  const [randomPlaces, setRandomPlaces] = useState<any[]>([]);

  useEffect(() => {
    // Get 4 random places excluding the visited ones
    const places = getRandomPlaces(visitedPlaces);
    setRandomPlaces(places);
  }, [visitedPlaces]);

  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Suggested Place
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-bold text-center">
        Explore Our Top Historical Destinations
      </h1>
      <p className="text-gray-600 w-10/12 md:w-7/12 m-auto text-center mt-2">
        Embark on a journey through time and uncover the hidden stories of the
        worlds most iconic historical sites, where every corner whispers a tale
        of the past
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {randomPlaces?.map((place: any) => (
          <div
            key={place.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover zoom transition-transform duration-300 ease-in-out"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{place.name}</h2>
              </div>
              <p className="text-gray-600">{place.location}</p>
              <p className="mt-2 clipped-text">{place.description}</p>
              <Link
                href={`/place/${place.id}`}
                className="flex justify-end text-sm mt-1 text-blue"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedPlaces;
