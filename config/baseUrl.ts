// Keep API cookies on the panel's own origin through the Next.js rewrite.
// To use a local backend, set NEXT_PUBLIC_API_ORIGIN=http://localhost:8000.
export const apiOrigin = (
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  "https://qx-brokerapi-f1b79e3b8be0.herokuapp.com"
).replace(/\/+$/, "");

const baseUrl = "/api/v1";

export default baseUrl;