import { apiOrigin } from "./baseUrl";

// Socket.IO connects directly; REST uses the same-origin Next.js proxy.
export default apiOrigin;