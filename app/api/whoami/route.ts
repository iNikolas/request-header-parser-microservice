import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  return NextResponse.json({
    ipaddress: req.ip ?? null,
    language: req.headers.get("Accept-Language"),
    software: req.headers.get("User-Agent"),
  });
}
