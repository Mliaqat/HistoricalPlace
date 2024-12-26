import { historicalPlaces } from "@/utils/Data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(historicalPlaces);
}
