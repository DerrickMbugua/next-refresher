import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hey guyz!' }, { status: 200 })
}