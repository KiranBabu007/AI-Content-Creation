import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import OpenAI from "openai";


const client = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    baseURL: 'https://api.together.xyz/v1',
    dangerouslyAllowBrowser: true
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }


        await incrementApiLimit(messages);

        return NextResponse.json("success");
    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};