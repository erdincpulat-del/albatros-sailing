export async function POST() {
  return new Response(
    JSON.stringify({ success: true, message: "API WORKING" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}