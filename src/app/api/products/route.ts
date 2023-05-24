import * as fs from "fs"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = req.nextUrl;
    if (url.searchParams.has("filename")) {

        try {
            // ${url.searchParams.get("filename")}
            let products = await fs.promises.readFile(`ProductData/products.json`, "utf-8");
            products = JSON.parse(products);
            return NextResponse.json({ products })

        } catch (error) {
            console.log((error as { message: string }).message)
            return NextResponse.json({ message: (error as { message: string }).message });
        }

    } else {
        return NextResponse.json({ message: "Please put you filename in the url" })
    }
}