import { UserRole } from "@/interfaces/user.interfaces";
import { currentRole } from "@/lib/useAuth";
import { NextResponse } from "next/server";


export async function GET() {
    const role = await currentRole();
    if (role === 1) {
        return new NextResponse(null,{status:200})
    }
    
    return new NextResponse(null,{status:403})
}