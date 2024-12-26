// Ensure you import necessary types from 'next'

import { historicalPlaces } from "@/utils/Data";
import Link from "next/link";

// Define the type for the params


export default async function Page({ params }: any) {
  const { id } = params;

  const place = historicalPlaces.find((place) => place.id == parseInt(id, 10)); // Convert id to a number if needed

  if (!place) {
    return <div>Historical place not found</div>;
  }

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
          <li>
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
              <Link
                href="/view-all"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                View All
              </Link>
            </div>
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
                {place.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div>
        <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="flex justify-between my-4">
          <p className="text-lg">
            <strong>Location:</strong> {place.location}
          </p>
          <p className="text-lg">
            <strong>Price:</strong> {place.price}
          </p>
        </div>
        <p className="text-lg mb-4">
          <strong>Description:</strong>
        </p>
        <p className="text-gray-700 whitespace-pre-line">{place.description}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Facts about {place.name}{" "}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {place.notableFacts?.map((fact, index) => (
              <li key={index} className="text-lg text-gray-700">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
