"use client";
import Image from 'next/image';
import { Star, PlayCircle, Quote, TrendingUp, Users, Globe } from 'lucide-react';
import Link from 'next/link';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      type: 'Quantum Leap',
      name: 'Maria Santos',
      role: 'Founding Partner, Growth Architects',
      stat: '+400% Revenue Increase',
      quote: "I went from stable operations to a global scale in just 14 months using the strategic systems. Anthony's coaching didn't just give me advice; it gave me a business machine.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      type: 'Scale-Up',
      name: 'John Doe',
      role: 'CEO, Strategic Ventures',
      stat: '5 to 50 Team Members',
      quote: "Anthony showed me how to stop being an 'operator' and start being a 'visionary leader.' My company scaled exponentially while my personal freedom increased.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      type: 'International',
      name: 'Elena Rodriguez',
      role: 'Global Founder, Dubai',
      stat: '12 Markets Scaled Remotely',
      quote: "Being based in Dubai, I thought I couldn't dominate international markets. Anthony's digital systems allowed me to scale into 12 new markets while living 4,000 miles away.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="testimonials-page">
      {/* Cinematic Hero Entrance - Standardized with Properties */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ 
        height: '40vh', 
        minHeight: '450px', 
        background: '#000000',
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
               Success Proof
             </span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
            fontWeight: 800, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            marginBottom: '2rem',
            lineHeight: 0.85,
            color: '#D4AF37',
            fontFamily: 'var(--font-outfit)',
            textShadow: '0 10px 40px rgba(0,0,0,0.8)'
          }}>
            PROVEN<br/><span style={{ fontWeight: 200, letterSpacing: '0.25em' }}>SUCCESS</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#FFFFFF',
            maxWidth: '800px', 
            margin: '0 auto',
            letterSpacing: '0.1em',
            fontWeight: 300,
            fontFamily: 'var(--font-outfit)',
            opacity: 0.8,
            lineHeight: 1.8
          }}>
            Real businesses. Real leaders. <span className="script-text" style={{ color: 'var(--brand-gold)', fontSize: '1.5rem' }}>Extraordinary results.</span> No theory—just proven high-performance systems.
          </p>
        </div>
      </section>

      {/* Featured Video Spotlight */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--glass-border)' }}>
            <div className="grid-2" style={{ gap: '0' }}>
              <div style={{ 
                minHeight: '400px', 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ background: 'var(--luxury-gradient)', padding: '1.5rem', borderRadius: '50%', boxShadow: '0 0 30px rgba(var(--brand-gold-rgb), 0.5)' }}>
                  <PlayCircle size={60} color="var(--brand-black)" style={{ cursor: 'pointer' }} />
                </div>
              </div>
              <div className="responsive-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div className="accent-bar" style={{ position: 'absolute', left: '0', top: '10%', height: '80%', opacity: 0.5 }}></div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="var(--brand-gold)" color="var(--brand-gold)" />)}
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--text-heading)' }}>"The systems work if you do the work."</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', fontWeight: 500 }}>
                  Watch as 50 different agents explain how the OLA Blueprint took them from zero to their first million in GCI within a single calendar year.
                </p>
                <div>
                  <strong style={{ fontSize: '1.2rem' }}>Robert Chen</strong>
                  <p style={{ color: 'var(--brand-gold)', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.3rem' }}>
                    Founder, Elite Property Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Grid */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">The Executive Spotlight</span>
            <h2>Blueprint for Growth</h2>
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div key={t.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ position: 'relative', width: '70px', height: '70px', flexShrink: 0 }}>
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      fill
                      sizes="70px"
                      style={{ borderRadius: '50%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.2rem' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</span>
                  </div>
                </div>
                <div style={{ 
                  background: 'rgba(212, 175, 55, 0.1)', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '2px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.8rem',
                  marginBottom: '2.5rem',
                  alignSelf: 'flex-start'
                }}>
                  <TrendingUp size={18} color="var(--brand-gold)" />
                  <span style={{ fontWeight: 800, color: 'var(--brand-gold)', fontSize: '0.85rem', letterSpacing: '1px' }}>{t.stat}</span>
                </div>
                <Quote size={40} color="var(--brand-gold)" style={{ opacity: 0.2, marginBottom: '1.5rem' }} />
                <p style={{ fontStyle: 'italic', flex: 1, marginBottom: '2rem', lineHeight: 1.8 }}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="section">
        <div className="container">
          <div className="grid-3 text-center">
            <div>
              <TrendingUp size={48} color="var(--brand-gold)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>40%</h2>
              <p className="subtitle">Avg Revenue Increase</p>
            </div>
            <div>
              <Users size={48} color="var(--brand-gold)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>10k+</h2>
              <p className="subtitle">Certified Leaders</p>
            </div>
            <div>
              <Globe size={48} color="var(--brand-gold)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>15+</h2>
              <p className="subtitle">Countries Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Ready to be our next success story?</h2>
          <div className="flex-center" style={{ width: '100%', marginTop: '3rem' }}>
            <Link href="/coaching" className="btn btn-primary" style={{ padding: '1rem 4rem' }}>
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
