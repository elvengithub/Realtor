import type { Metadata } from "next";
import FreeCoachingConsultation from "@/src/pages/legacy_pages/FreeCoachingConsultation";

export const metadata: Metadata = {
  title: "Free Coaching Consultation | Anthony Leuterio",
  description:
    "Request a complimentary coaching consultation with Anthony Leuterio’s team—align on goals, fit, and next steps.",
};

export default function Page() {
  return <FreeCoachingConsultation />;
}
