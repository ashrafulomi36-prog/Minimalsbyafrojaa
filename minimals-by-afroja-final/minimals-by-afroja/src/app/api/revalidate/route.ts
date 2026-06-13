import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-sanity-webhook-secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Revalidate all affected paths
    revalidatePath("/", "layout");
    revalidatePath("/cakes");
    revalidatePath("/ice-cream");
    revalidatePath("/brownies");
    revalidatePath("/product/[slug]", "page");

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}
