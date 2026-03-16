import { useTheme } from '../../context/ThemeContext';
import anthonyImg from '../../assets/Anthony.png';
import anthonyLightImg from '../../assets/lightmode_anthony.jpg';
import { Award, Target, Globe, BookOpen } from 'lucide-react';

const Biography = () => {
  const { isDark } = useTheme();

  return (
    <div className="biography-page">
      {/* Hero Header */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div className="reveal active">
              <span className="subtitle">Executive Leadership</span>
              <h1 style={{ marginBottom: '2rem' }}>Anthony Gerard <br />Orais Leuterio</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.8 }}>
                The Visionary Architect of the Filipino Real Estate Modernization.
              </p>
              <p className="mb-4">
                Anthony "Tonton" Leuterio is a globally recognized entrepreneur, recognized as the <strong>2024 International Realtor of the Year</strong> by the National Association of Realtors (NAR). As the founder of Filipino Homes, he has spent over two decades professionalizing the industry and empowering thousands of agents to achieve world-class excellence.
              </p>
            </div>
            <div className="reveal active">
              <div style={{ position: 'relative' }}>
                <img 
                  src={isDark ? anthonyImg : anthonyLightImg} 
                  alt="Anthony Leuterio" 
                  style={{ 
                    width: '100%', 
                    aspectRatio: '4 / 5', 
                    objectFit: 'cover', 
                    borderRadius: 'var(--border-radius)', 
                    boxShadow: 'var(--shadow-focus)',
                    position: 'relative',
                    zIndex: 2
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '-20px', 
                  width: '100%', 
                  height: '100%', 
                  border: '2px solid var(--secondary-color)', 
                  borderRadius: 'var(--border-radius)',
                  zIndex: 1
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="section text-center" style={{ backgroundColor: 'var(--bg-section)', color: 'var(--primary-color)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <blockquote style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.4, color: 'var(--primary-color)' }}>
              "Real estate is not about property; it's about people, the lives we transform, and the futures we help them build."
            </h2>
            <cite style={{ display: 'block', marginTop: '2.5rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--secondary-color)', fontWeight: 700 }}>
              — Anthony Leuterio
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '6rem' }}>
            <div>
              <h3 style={{ borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                Cebu to the Global Stage
              </h3>
              <p>
                Born and raised in Cebu City, Anthony’s journey began with a simple mission: to professionalize the real estate industry in the Philippines. He saw the potential of the archipelago's property market and realized that for it to truly thrive, it needed a unified, tech-driven network of empowered professionals.
              </p>
              <p>
                By pioneering digital property marketing at a time when the industry was still traditional, he bridged the gap between international developers and the global Filipino diaspora, creating thousands of jobs and fueling the nation's economic growth.
              </p>
            </div>
            <div>
              <h3 style={{ borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                The "Coaching with Heart" Philosophy
              </h3>
              <p>
                Anthony’s leadership is defined by his commitment to "Coaching with Heart." He believes that a real estate professional is more than just a salesperson—they are advisors and wealth-builders.
              </p>
              <p>
                His training programs, like the Online Leads Accelerator, have become the gold standard for agents looking to scale their businesses in the digital age. Today, he continues to lead the charge in integrating AI and advanced data analytics into real estate through initiatives like Revii AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Core Pillars */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Core Achievements</span>
            <h2>Milestones of Excellence</h2>
          </div>
          <div className="grid-4">
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Award size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Recognition</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>2024 International Realtor of the Year (NAR)</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Globe size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Network Scaling</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Founder of Filipino Homes (Largest PH Network)</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Target size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Innovation</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Pioneer in Digital Property Marketing Ecosystems</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <BookOpen size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Mentorship</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Impacted 100,000+ Real Estate Professionals Globally</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
