import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex px-5 py-3 relative">
      <h1 className="text-orange-600 font-extrabold text-2xl">
        Historical Places
      </h1>
      <div>
        <Link href="/prices">Prices</Link>
        <Link href="/Visited">Visited</Link>
      </div>
    </div>
  );
}

export default Header;
