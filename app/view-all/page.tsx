"use client";
import { useHistoricalDataQuery } from "@/services/historicalData";
import Link from "next/link";

interface HistoricalPlace {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
}

export default function AllPlaces() {
  const { data, isLoading } = useHistoricalDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
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
              <h2 className="text-xl font-bold">{place.name}</h2>
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
