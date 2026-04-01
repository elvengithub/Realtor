"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { Building2, MessageSquare, TrendingUp, Users, Loader2 } from "lucide-react";
import { supabase } from "@/src/lib/supabase";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({ properties: 0, inquiries: 0, content: 0, coaches: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    async function fetchStats() {
      if (!user) return;
      
      const [propertiesRes, inquiriesRes, contentRes] = await Promise.all([
        supabase.from("properties").select("id", { count: "exact" }),
        supabase.from("inquiries").select("id", { count: "exact" }),
        supabase.from("site_content").select("id", { count: "exact" }),
      ]);

      setStats({
        properties: propertiesRes.count || 0,
        inquiries: inquiriesRes.count || 0,
        content: contentRes.count || 0,
        coaches: 5,
      });
      setLoading(false);
    }
    fetchStats();
  }, [user]);

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  const statCards = [
    { name: "Properties", value: stats.properties, icon: Building2, color: "text-blue-600" },
    { name: "Inquiries", value: stats.inquiries, icon: MessageSquare, color: "text-green-600" },
    { name: "Content Items", value: stats.content, icon: TrendingUp, color: "text-purple-600" },
    { name: "Coaches", value: stats.coaches, icon: Users, color: "text-orange-600" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-2">Welcome back! Manage your content and properties.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: "2rem" }}>
        {statCards.map((stat) => (
          <div key={stat.name} style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b" }}>{stat.name}</p>
                <p style={{ fontSize: "1.875rem", fontWeight: "700", color: "#0f172a", marginTop: "0.25rem" }}>
                  {loading ? "-" : stat.value}
                </p>
              </div>
              <div style={{ padding: "0.75rem", borderRadius: "0.5rem", background: "#f8fafc" }} className={stat.color}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div style={{ background: "white", padding: "2rem", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#0f172a", marginBottom: "1rem" }}>Quick Actions</h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <a href="/properties/new" style={{ display: "block", padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#0f172a", textDecoration: "none", fontWeight: "500" }}>
              + Add New Property
            </a>
            <a href="/content" style={{ display: "block", padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#0f172a", textDecoration: "none", fontWeight: "500" }}>
              Edit Site Content
            </a>
            <a href="/settings" style={{ display: "block", padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#0f172a", textDecoration: "none", fontWeight: "500" }}>
              Site Settings
            </a>
          </div>
        </div>

        <div style={{ background: "white", padding: "2rem", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#0f172a", marginBottom: "1rem" }}>Admin Info</h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <p style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</p>
              <p style={{ fontWeight: "500", color: "#0f172a" }}>{user?.email}</p>
            </div>
            <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <p style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>User ID</p>
              <p style={{ fontWeight: "500", color: "#0f172a", fontSize: "0.875rem" }}>{user?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
