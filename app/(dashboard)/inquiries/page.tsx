"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { Mail, Phone, Calendar, MessageSquare, Loader2 } from "lucide-react";
import { supabase } from "@/src/lib/supabase";

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  property: string;
  created_at: string;
}

export default function InquiriesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    async function fetchInquiries() {
      if (!user) return;
      const { data } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
      setInquiries(data || []);
      setIsLoading(false);
    }
    fetchInquiries();
  }, [user]);

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8" style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Inquiries</h1>
        <p className="text-slate-500 mt-2">Manage property inquiries from potential buyers.</p>
      </div>

      <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", textAlign: "left" }}>
            <thead style={{ background: "#f8fafc", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b" }}>
              <tr>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Contact</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Message</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Property</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Date</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: "1px solid #e2e8f0" }}>
              {isLoading ? (
                <tr>
                  <td colSpan={5} style={{ padding: "2rem", textAlign: "center" }}>
                    <Loader2 className="w-6 h-6 animate-spin text-slate-400" style={{ margin: "0 auto" }} />
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "#64748b" }}>
                    No inquiries yet.
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id} style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1rem" }}>
                      <div style={{ display: "grid", gap: "0.25rem" }}>
                        <p style={{ fontWeight: "600", color: "#0f172a" }}>{inquiry.name}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#64748b" }}>
                          <Mail style={{ width: "0.75rem", height: "0.75rem" }} />
                          <span>{inquiry.email}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#64748b" }}>
                          <Phone style={{ width: "0.75rem", height: "0.75rem" }} />
                          <span>{inquiry.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <div style={{ display: "flex", gap: "0.5rem", color: "#475569", maxWidth: "300px" }}>
                        <MessageSquare style={{ width: "1.25rem", height: "1.25rem", marginTop: "0.25rem", flexShrink: 0, color: "#94a3b8" }} />
                        <p style={{ fontSize: "0.875rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{inquiry.message}</p>
                      </div>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#2563eb", background: "#eff6ff", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>
                        {inquiry.property || "General"}
                      </span>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#64748b" }}>
                        <Calendar style={{ width: "1rem", height: "1rem" }} />
                        <span>{new Date(inquiry.created_at).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <button style={{ color: "#2563eb", fontWeight: "500", fontSize: "0.875rem" }}>View Full</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
