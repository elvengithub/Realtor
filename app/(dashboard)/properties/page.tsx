"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";
import { Plus, Search, Building2, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/src/lib/supabase";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  status: string;
}

export default function PropertiesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    async function fetchProperties() {
      if (!user) return;
      const { data } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
      setProperties(data || []);
      setIsLoading(false);
    }
    fetchProperties();
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Properties</h1>
          <p className="text-slate-500 mt-2">Manage your property listings.</p>
        </div>
        <Link
          href="/properties/new"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#2563eb", color: "white", padding: "0.75rem 1rem", borderRadius: "0.5rem", textDecoration: "none", fontWeight: "500" }}
        >
          <Plus className="w-5 h-5" />
          <span>Add Property</span>
        </Link>
      </div>

      <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <div style={{ padding: "1rem", borderBottom: "1px solid #e2e8f0", background: "#f8fafc", display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ position: "relative", flex: 1 }}>
            <Search style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "#94a3b8" }} />
            <input
              type="text"
              placeholder="Search properties..."
              style={{ width: "100%", padding: "0.5rem 0.75rem 0.5rem 2.5rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0", outline: "none" }}
            />
          </div>
          <select style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0", outline: "none", background: "white" }}>
            <option>All Status</option>
            <option>Available</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", textAlign: "left" }}>
            <thead style={{ background: "#f8fafc", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b" }}>
              <tr>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Property</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Location</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Price</th>
                <th style={{ padding: "1rem", fontWeight: "600" }}>Status</th>
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
              ) : properties.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "#64748b" }}>
                    No properties yet. Click "Add Property" to create one.
                  </td>
                </tr>
              ) : (
                properties.map((property) => (
                  <tr key={property.id} style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Building2 style={{ width: "1.5rem", height: "1.5rem", color: "#94a3b8" }} />
                        </div>
                        <span style={{ fontWeight: "500", color: "#0f172a" }}>{property.title}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b" }}>
                        <MapPin style={{ width: "1rem", height: "1rem" }} />
                        <span>{property.location}</span>
                      </div>
                    </td>
                    <td style={{ padding: "1rem", fontWeight: "600", color: "#0f172a" }}>{property.price}</td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: "500", background: property.status === "Available" ? "#dcfce7" : property.status === "Pending" ? "#fef9c3" : "#f1f5f9", color: property.status === "Available" ? "#166534" : property.status === "Pending" ? "#854d0e" : "#475569" }}>
                        {property.status}
                      </span>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <button style={{ color: "#2563eb", fontWeight: "500" }}>Edit</button>
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
