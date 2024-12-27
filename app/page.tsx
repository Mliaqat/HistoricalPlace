import Link from "next/link";
import AllPlaces from "./view-all/page";

export default function Home() {
  return (
    <div className="full-screen-bg relative">
      <div className="overlay">
        <h1 className="text-[2rem] lg:text-[3rem] font-semibold mb-4">
          Welcome to Historical Places
        </h1>
        <p className="text-[1rem] lg:text-[1.5rem]">
          Discover the world&apos;s most amazing historical sites
        </p>
        <Link href={"/suggested-place"} className="mt-2 rounded-full bg-green-700 text-white py-2 px-4">Suggested Places</Link>
      </div>

      <div>
        <AllPlaces />
      </div>
    </div>
  );
}
