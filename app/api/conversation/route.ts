// import { auth } from "@clerk/nextjs";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse, NextRequest } from "next/server";
// import { OpenAI } from "openai";

// const client = new OpenAI({
//     apiKey: process.env.TOGETHER_API_KEY,
//     baseURL: 'https://api.together.xyz/v1',
// });

// export async function POST(req: NextRequest, res: NextResponse) {
//     try {
//         const { userId } = auth();
//         const body = await req.json();
//         const { messages } = body;

//         if (!userId) {
//             return new NextResponse("Unauthorized", { status: 401 });
//         }

//         if (!client.apiKey) {
//             return new NextResponse("OpenAI API Key not configured.", { status: 500 });
//         }

//         if (!messages) {
//             return new NextResponse("Messages are required", { status: 400 });
//         }

//         const response = await client.chat.completions.create({
//             messages,
//             model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
//         });

//         // console.log(response.choices[0].message.content);

//         return new NextResponse(JSON.stringify(response.choices[0].message.content), { status: 200 });
//     } catch (error) {
//         console.log('[CONVERSATION_ERROR]', error);
//         return new NextResponse("Internal Error", { status: 500 });
//     }
// }
