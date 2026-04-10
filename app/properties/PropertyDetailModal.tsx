"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, MapPin, Bed, Bath, Square, Mail } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

interface PropertyDetailModalProps {
  property: any;
  onClose: () => void;
}

export default function PropertyDetailModal({ property, onClose }: PropertyDetailModalProps) {
  const { isDark } = useTheme();

  // Prevent background scrolling when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-12" style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}>
      {/* Close Background Click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto flex flex-col rounded-[32px] shadow-2xl animate-in fade-in zoom-in duration-500" 
           style={{ 
             background: isDark ? '#0A0A0A' : '#FFFFFF', 
             border: `1px solid ${isDark ? 'rgba(212,175,55,0.3)' : '#D4AF37'}`,
             fontFamily: 'var(--font-outfit)'
           }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-50 p-3 rounded-full shadow-2xl transition-all hover:scale-110 hover:rotate-90" 
          style={{ background: '#D4AF37', color: '#000', border: 'none' }}
        >
          <X size={24} />
        </button>

        {/* Hero Image Section */}
        <div className="relative w-full h-[400px] sm:h-[550px]">
          <Image 
            src={property.images?.[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920'} 
            alt={property.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* Deep Gradient to blend with text */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)' }}></div>
          
          <div className="absolute bottom-10 left-10 right-10">
            <span className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-4 inline-block" style={{ background: '#D4AF37', color: '#000' }}>
              {property.status}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 text-white leading-tight">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-xl text-gray-200">
              <MapPin size={22} style={{ color: '#D4AF37' }} />
              <span className="font-medium tracking-wide">{property.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-14 flex flex-col lg:flex-row gap-16">
          
          {/* Left: Details */}
          <div className="flex-1">
            <p className="text-5xl font-black mb-10 tracking-tighter" style={{ color: '#D4AF37', textShadow: isDark ? '0 2px 10px rgba(212,175,55,0.1)' : 'none' }}>
              {new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(property.price)}
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12 pb-12 border-b" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-4 rounded-2xl" style={{ background: isDark ? 'rgba(212,175,55,0.1)' : '#FAF9F6' }}><Bed size={28} color="#D4AF37" /></div>
                <span className="text-2xl font-bold block" style={{ color: isDark ? '#FFF' : '#000' }}>{property.bedrooms}</span>
                <span className="text-xs uppercase font-bold tracking-widest" style={{ color: isDark ? '#ffffff' : undefined }}>Bedrooms</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-4 rounded-2xl" style={{ background: isDark ? 'rgba(212,175,55,0.1)' : '#FAF9F6' }}><Bath size={28} color="#D4AF37" /></div>
                <span className="text-2xl font-bold block" style={{ color: isDark ? '#FFF' : '#000' }}>{property.bathrooms}</span>
                <span className="text-xs uppercase font-bold tracking-widest" style={{ color: isDark ? '#ffffff' : undefined }}>Bathrooms</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-4 rounded-2xl" style={{ background: isDark ? 'rgba(212,175,55,0.1)' : '#FAF9F6' }}><Square size={28} color="#D4AF37" /></div>
                <span className="text-2xl font-bold block" style={{ color: isDark ? '#FFF' : '#000' }}>{new Intl.NumberFormat().format(property.area_sqft)}</span>
                <span className="text-xs uppercase font-bold tracking-widest" style={{ color: isDark ? '#ffffff' : undefined }}>Square Feet</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-6" style={{ color: '#D4AF37' }}>Property Overview</h3>
              <p className="text-xl leading-relaxed font-light" style={{ color: isDark ? '#ffffff' : '#2D2D2D' }}>
                {property.description}
              </p>
            </div>
          </div>

          {/* Right: Call to action block */}
          <div className="w-full lg:w-[380px]">
            <div className="p-10 rounded-[40px] sticky top-8" style={{ border: `1px solid ${isDark ? 'rgba(212,175,55,0.3)' : '#D4AF37'}`, background: isDark ? 'rgba(255,255,255,0.03)' : '#FAF9F6' }}>
              <h4 className="text-2xl font-bold mb-6 leading-tight" style={{ color: isDark ? '#FFF' : '#000' }}>Inquire for Private Access</h4>
              <p className="mb-10 text-lg font-light leading-relaxed" style={{ color: isDark ? '#ffffff' : '#555' }}>
                Connect with our specialized advisors for exclusive documentation and to coordinate a private showing of this remarkable estate.
              </p>
              
              <a 
                href={`mailto:support@tonleuterio.com?subject=Inquiry: ${property.title}&body=I would like to request a private viewing of ${property.title} located at ${property.location}.`}
                className="w-full py-5 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)]"
                style={{ background: '#D4AF37', color: '#000' }}
              >
                <Mail size={22} />
                Contact Advisor
              </a>
              
              <div className="mt-10 pt-8 border-t text-center" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] font-black opacity-40" style={{ color: isDark ? '#FFF' : '#000' }}>
                  Unrivaled Confidentiality
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

