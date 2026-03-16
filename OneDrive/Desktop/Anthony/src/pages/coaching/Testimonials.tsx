import { Star, PlayCircle, Quote, TrendingUp, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      type: 'Quantum Leap',
      name: 'Maria Santos',
      role: 'Top Producer, Makati',
      stat: '+400% GCI Increase',
      quote: "I went from PHP 500k to PHP 5M in GCI in just 14 months using the OLA systems. Anthony's coaching didn't just give me leads; it gave me a business machine.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      type: 'Scale-Up',
      name: 'John Doe',
      role: 'Broker Owner, Cebu',
      stat: '5 to 50 Agents',
      quote: "Anthony showed me how to stop being a 'super-agent' and start being a 'business owner.' My team scaled exponentially while my personal freedom increased.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      type: 'International',
      name: 'Elena Rodriguez',
      role: 'Global Agent, Dubai',
      stat: '12 Units Closed Remotely',
      quote: "Being based in Dubai, I thought I couldn't dominate the PH market. Anthony's digital systems allowed me to close 12 units while living 4,000 miles away.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="testimonials-page">
      {/* Hero Header */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Proof of Concept</span>
          <h1 style={{ marginBottom: '2rem' }}>Success Stories from <br />the Inner Circle</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            We don't just teach theory. We deliver results. Explore the journeys of agents and brokers who have transformed their lives through Anthony's coaching.
          </p>
        </div>
      </section>

      {/* Featured Video Spotlight */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <div className="grid-2" style={{ gap: '0' }}>
              <div style={{ 
                height: '450px', 
                backgroundImage: `linear-gradient(rgba(10, 17, 40, 0.3), rgba(10, 17, 40, 0.3)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <PlayCircle size={80} color="var(--secondary-color)" style={{ cursor: 'pointer', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.4))' }} />
              </div>
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="var(--secondary-color)" color="var(--secondary-color)" />)}
                </div>
                <h2 className="text-white" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>"The systems work if you do the work."</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                  Watch as 50 different agents explain how the OLA Blueprint took them from zero to their first million in GCI within a single calendar year.
                </p>
                <div>
                  <strong>Robert Chen</strong>
                  <p style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.3rem' }}>
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
              <div key={t.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <img src={t.image} alt={t.name} style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ marginBottom: '0.2rem' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</span>
                  </div>
                </div>
                <div style={{ 
                  background: 'rgba(197, 160, 89, 0.1)', 
                  padding: '0.8rem 1.2rem', 
                  borderRadius: '4px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.8rem',
                  marginBottom: '1.5rem',
                  alignSelf: 'flex-start'
                }}>
                  <TrendingUp size={18} color="var(--secondary-color)" />
                  <span style={{ fontWeight: 700, color: 'var(--accent-text)', fontSize: '0.9rem' }}>{t.stat}</span>
                </div>
                <Quote size={32} color="var(--secondary-color)" style={{ opacity: 0.3, marginBottom: '1rem' }} />
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
              <TrendingUp size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>40%</h2>
              <p className="subtitle">Avg GCI Increase</p>
            </div>
            <div>
              <Users size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>10k+</h2>
              <p className="subtitle">Certified Agents</p>
            </div>
            <div>
              <Globe size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
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
          <Link to="/free-coaching-consultation" className="btn btn-primary" style={{ padding: '1.5rem 4rem' }}>
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
