"use client";
import { setVisitedList } from "@/services/dataSlice";
import { useHistoricalDataQuery } from "@/services/historicalData";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

interface HistoricalPlace {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
}

export default function AllPlaces() {
  const { data, isLoading } = useHistoricalDataQuery();
  const visitedList = useSelector((state: any) => state.data.visitedList);
  const dispatch = useDispatch();

  const handleToggle = (id: any) => {
    dispatch(setVisitedList({ id }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((place: HistoricalPlace) => (
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
                <button
                  type="button"
                  onClick={() => handleToggle(place.id)}
                  className={`${
                    visitedList.includes(place.id)
                      ? "border-rose-600 bg-rose-100 font-semibold rounded-full px-3 py-1"
                      : "border-green-600 bg-green-100 font-semibold rounded-full px-3 py-1"
                  } text-sm text-gray-700`}
                >
                  {visitedList.includes(place.id)
                    ? "Visited"
                    : "Already Visited"}
                </button>
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
