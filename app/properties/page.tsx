"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/src/context/AuthContext";
import { useTheme } from "@/src/context/ThemeContext";
import { supabase } from "@/src/lib/supabase";
import { MapPin, Bed, Bath, Square, Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import PropertyEditorModal from "./PropertyEditorModal";
import PropertyDetailModal from "./PropertyDetailModal";

export default function PropertiesPage() {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProperty, setEditingProperty] = useState<any | null>(null);
  const [viewerProperty, setViewerProperty] = useState<any | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Land", "Industrial"];

  const fetchProperties = async () => {
    setLoading(true);
    const { data } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
    setProperties(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to drop this property from the portfolio?")) return;
    await supabase.from("properties").delete().eq("id", id);
    fetchProperties();
  };

  const filteredProperties = properties.filter(p => activeFilter === "All" || p.type === activeFilter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-base)]">
        <Loader2 className="w-12 h-12 animate-spin" style={{ color: '#D4AF37' }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24" style={{ background: isDark ? '#050505' : '#FAF9F6' }}>
      {/* 1. Cinematic Hero Entrance - ULTRA LUXURY DUBAI GOLD & BLACK */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ 
        height: '40vh', 
        minHeight: '450px', 
        background: '#000000', // Solid deep black for the Dubai theme
        borderBottom: '1px solid rgba(212,175,55,0.3)'
      }}>
        
        {/* Luxury Lighting Effects */}
        <div className="absolute inset-0 z-0 opacity-30" style={{ 
          background: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative z-10 text-center px-4 w-full max-w-5xl flex flex-col items-center justify-center">
          <div className="mb-8">
             <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mb-6"></div>
             <span style={{ 
               letterSpacing: '0.6em', 
               color: '#D4AF37', 
               fontWeight: 700, 
               fontSize: '0.75rem', 
               textTransform: 'uppercase',
               display: 'block'
             }}>
               The Gold Collection
             </span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
            fontWeight: 800, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            marginBottom: '2rem',
            lineHeight: 0.85,
            color: '#D4AF37',
            fontFamily: 'var(--font-outfit)',
            textShadow: '0 10px 40px rgba(0,0,0,0.8)'
          }}>
            ELITE<br/><span style={{ fontWeight: 200, letterSpacing: '0.25em' }}>ESTATES</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#FFFFFF',
            maxWidth: '650px', 
            margin: '0 auto',
            letterSpacing: '0.1em',
            fontWeight: 300,
            fontFamily: 'var(--font-outfit)',
            opacity: 0.8,
            lineHeight: 1.8
          }}>
            High-performance real estate assets engineered for the world's most discerning investors.
          </p>
        </div>
      </section>

      <div className="container relative z-20 mt-20">
        {/* 5. Lifestyle Filter Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-10 py-2.5 rounded-full font-bold uppercase transition-all duration-500"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                fontFamily: 'var(--font-outfit)',
                background: activeFilter === filter ? '#D4AF37' : 'transparent',
                color: activeFilter === filter ? '#000' : (isDark ? '#FFFFFF' : '#222'),
                border: `1px solid ${activeFilter === filter ? '#D4AF37' : (isDark ? 'rgba(212,175,55,0.2)' : 'rgba(0,0,0,0.1)')}`,
                boxShadow: activeFilter === filter ? '0 8px 25px rgba(212,175,55,0.2)' : 'none'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Admin Add Property Card */}
          {user && (
            <div 
              onClick={() => setIsAddingNew(true)}
              className="group cursor-pointer rounded-[24px] border border-dashed flex flex-col items-center justify-center transition-all duration-500 min-h-[450px]"
              style={{ borderColor: 'var(--brand-gold)', backgroundColor: isDark ? 'rgba(212,175,55,0.02)' : 'rgba(212,175,55,0.06)' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90" style={{ background: 'var(--brand-gold)', boxShadow: '0 10px 30px rgba(212,175,55,0.3)' }}>
                <Plus size={32} color="#000" />
              </div>
              <h3 style={{ color: 'var(--brand-gold)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Add Asset</h3>
            </div>
          )}

          {filteredProperties.map(property => (
            <div 
              key={property.id} 
              onClick={() => setViewerProperty(property)}
              className="group glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] relative flex flex-col cursor-pointer" 
              style={{ borderRadius: '24px', border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}` }}
            >
              
              {/* Admin Overlay Controls */}
              {user && (
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setEditingProperty(property); }} 
                    className="p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:rotate-12" 
                    style={{ background: 'var(--brand-gold)', color: '#000', backdropFilter: 'blur(4px)' }} 
                    title="Edit Property"
                  >
                    <Pencil size={16} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDelete(property.id); }} 
                    className="p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:-rotate-12 bg-red-500 text-white" 
                    title="Delete Property"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-[0.2em] shadow-lg" style={{ background: 'rgba(0,0,0,0.9)', border: '1px solid var(--brand-gold)', color: 'var(--brand-gold)' }}>
                {property.status}
              </div>

              {/* 2. Zoom Reveal Image Container */}
              <div className="relative h-[320px] w-full overflow-hidden bg-slate-900 border-b" style={{ borderColor: 'var(--glass-border)' }}>
                <Image 
                  src={property.images?.[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'} 
                  alt={property.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Deep Overlay for Title Readability */}
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}></div>
                
                {/* Overlay Text inside Image */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl font-bold mb-1 text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)' }}>{property.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-200" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    <MapPin size={16} style={{ color: 'var(--brand-gold)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }} />
                    <span style={{ letterSpacing: '0.05em' }}>{property.location}</span>
                  </div>
                </div>
              </div>

              {/* 4. Content Block & Golden Typography */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-3xl font-black text-gold mb-6 tracking-tight">
                    {new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(property.price)}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-6 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                  <div className="flex flex-col items-center justify-center text-center p-2 rounded-xl" style={{ background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)' }}>
                    <Bed size={18} className="mb-1" style={{ color: 'var(--text-muted)' }} /> 
                    <span className="font-bold text-lg" style={{ color: 'var(--text-main)' }}>{property.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center p-2 rounded-xl" style={{ background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)' }}>
                    <Bath size={18} className="mb-1" style={{ color: 'var(--text-muted)' }} /> 
                    <span className="font-bold text-lg" style={{ color: 'var(--text-main)' }}>{property.bathrooms}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center p-2 rounded-xl" style={{ background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)' }}>
                    <Square size={18} className="mb-1" style={{ color: 'var(--text-muted)' }} /> 
                    <span className="font-bold text-lg" style={{ color: 'var(--text-main)' }}>{property.area_sqft}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">SQFT</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Editor Modal */}
      {(isAddingNew || editingProperty) && (
        <PropertyEditorModal 
          property={editingProperty}
          onClose={() => { setIsAddingNew(false); setEditingProperty(null); }}
          onSaveSuccess={() => { setIsAddingNew(false); setEditingProperty(null); fetchProperties(); }}
        />
      )}

      {/* Detail Viewer Modal */}
      {viewerProperty && (
        <PropertyDetailModal 
          property={viewerProperty}
          onClose={() => setViewerProperty(null)}
        />
      )}
    </div>
  );
}
