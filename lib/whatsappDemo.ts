export type EnrollPayload = {
  name: string;
  role?: string;
  company?: string;
  phone: string;
  email?: string;
  scriptSlug?: string;
  sourceUrl?: string;
};

export type EnrollResponse = {
  shareKey: string;
  keyword: string;
  fullKeyword: string;
  waLink: string;
  demoNumber: string;
};

export type StatusResponse = {
  status:
    | "awaiting-keyword"
    | "in-progress"
    | "awaiting-next-lesson"
    | "completed"
    | "abandoned-manual"
    | "abandoned-timeout";
  currentLesson: number;
  totalLessons: number;
  lastInboundAt: string | null;
  completedAt: string | null;
};

// LMS backend (was EwaffleIO Studio). Keep NEXT_PUBLIC_STUDIO_URL env var
// name for backwards compat with anything that already overrides it.
const LMS_API_URL =
  process.env.NEXT_PUBLIC_LMS_API_URL ??
  process.env.NEXT_PUBLIC_STUDIO_URL ??
  "https://server-production-f530.up.railway.app";

export async function enrollDemo(payload: EnrollPayload): Promise<EnrollResponse> {
  const response = await fetch(`${LMS_API_URL}/api/whatsapp/enroll`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  let body: any = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = null;
  }
  if (!response.ok) {
    const message = body?.message ?? body?.error ?? `HTTP ${response.status}`;
    throw new Error(Array.isArray(message) ? message.join(", ") : String(message));
  }
  return body as EnrollResponse;
}

export async function fetchStatus(shareKey: string): Promise<StatusResponse> {
  const response = await fetch(
    `${LMS_API_URL}/api/whatsapp/enrollments/${shareKey}/status`,
  );
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return (await response.json()) as StatusResponse;
}
