import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    return new Response(
      JSON.stringify(data),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Invalid POST form data", error }),
      { status: 400 }
    );
  }
};

// export const GET: APIRoute = async ({ request }) => {
//   try {
//     const data = await request.json();
//     //console.log(JSON.stringify(data));
//     return new Response(
//       JSON.stringify(data),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ message: "Invalid GET JSON data" }),
//       { status: 400 }
//     );
//   }
// }