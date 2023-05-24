import * as fs from "fs"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
        try {
            let products = await fs.promises.readFile(`./src/app/ProductData/products.json`, "utf-8");
            products = JSON.parse(products);
            return NextResponse.json({ products })

        } catch (error) {
            console.log((error as { message: string }).message)
            return NextResponse.json({ message: (error as { message: string }).message });
        }
}