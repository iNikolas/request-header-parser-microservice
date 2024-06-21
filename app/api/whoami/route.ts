import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return NextResponse.json({
    ipaddress:
      req.headers.get("X-Real-Ip") ?? req.headers.get("X-Forwarded-For"),
    language: req.headers.get("Accept-Language"),
    software: req.headers.get("User-Agent"),
  });
}
