import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    // Fetch campaigns from the contract model
    const campaigns = await prisma.proposal.findMany();

    // Return the campaigns as a JSON response
    return new Response(JSON.stringify(campaigns), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch campaigns" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
