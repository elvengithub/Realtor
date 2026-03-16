import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Globe, PlayCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Import assets
import anthonyImg from '../assets/Anthony.png';
import anthonyLightImg from '../assets/lightmode_anthony.jpg';

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero">
        <div className="container">
          <p className="subtitle reveal active">2024 International Realtor of the Year</p>
          <h1 className="reveal active">Empowering the Future of <br />Global Real Estate</h1>
          <div className="hero-btns reveal active" style={{ marginTop: '3rem' }}>
            <Link to="/coaching" className="btn btn-primary">Explore Coaching</Link>
            <Link to="/free-coaching-consultation" className="btn btn-secondary">Get Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2">
            <div className="reveal active">
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>About Anthony Gerard Orais Leuterio</h2>
              <p className="mb-2">Anthony "Tonton" Leuterio is a visionary entrepreneur from Cebu City, recognized for building one of the largest real estate marketing networks in the Philippines and pioneering digital property marketing at scale.</p>
              <p className="mb-4">As the Founder of Filipino Homes, he has empowered thousands of agents and brokers nationwide, connecting international developers with the growing Filipino market and global investors.</p>
              <Link to="/biography" className="btn btn-outline">Read Full Biography</Link>
            </div>
            <div className="reveal active">
              <img 
                src={isDark ? anthonyImg : anthonyLightImg} 
                alt="Anthony Leuterio" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  aspectRatio: '4 / 5', /* Standard executive portrait ratio */
                  objectFit: 'cover',
                  borderRadius: 'var(--border-radius)', 
                  boxShadow: 'var(--shadow-focus)' 
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Programs Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Coaching Programs</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>Transform your real estate career with elite coaching designed for high-performance agents and team leaders.</p>
          </div>
          <div className="grid-3">
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Trophy size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Coaching Elite</h3>
              <p>Exclusive 1-on-1 coaching for top producers looking to scale to the next level.</p>
              <Link to="/coaching-elite" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Learn More</Link>
            </div>
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Users size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Coaching Core</h3>
              <p>Foundational group coaching for agents wanting to build a sustainable business.</p>
              <Link to="/coaching-core" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Learn More</Link>
            </div>
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Globe size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Our Programs</h3>
              <p>Explore our wide range of coaching services tailored to your specific needs.</p>
              <Link to="/our-programs" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Explore All</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Accelerate Your Growth</h2>
              <p className="mb-2">Our training programs are built on real-world experience and proven systems that drive results in today's competitive market.</p>
              <ul className="check-list" style={{ marginBottom: '2.5rem' }}>
                <li>Online Leads Accelerator</li>
                <li>Prospecting Bootcamp</li>
                <li>Recruiting Roadmap</li>
                <li>Altman Advantage</li>
              </ul>
              <Link to="/program-online-leads-accelerator" className="btn btn-primary">Explore Training</Link>
            </div>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <h4 className="org">Popular</h4>
                <h3>OLA</h3>
                <p>Master digital marketing for real estate.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <h4 className="org">Intensive</h4>
                <h3>Bootcamp</h3>
                <p>30 days of high-velocity prospecting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          <div className="grid-2">
            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '3rem' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <span className="award-year" style={{ fontSize: '2rem', display: 'block' }}>MAY</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>15</span>
              </div>
              <div>
                <h4 className="org">Summit</h4>
                <h3>Asian Real Estate Summit</h3>
                <p>Bangkok, Thailand. Join global leaders for the premier real estate event of the year.</p>
                <Link to="/summit" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  Register Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '3rem' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <span className="award-year" style={{ fontSize: '2rem', display: 'block' }}>JUN</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>22</span>
              </div>
              <div>
                <h4 className="org">Workshop</h4>
                <h3>The Edge Intensive</h3>
                <p>Cebu City, Philippines. High-impact sales training for real estate professionals.</p>
                <Link to="/the-edge" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  Register Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/events" className="btn btn-outline">View All Events</Link>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Latest Content</h2>
          </div>
          <div className="grid-3">
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#ccc' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Blog</h4>
                <h3>The Future of Digital Real Estate</h3>
                <p>How AI and online platforms are reshaping the archipelago's market.</p>
                <Link to="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Read Article</Link>
              </div>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PlayCircle size={64} color="white" />
              </div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Podcast</h4>
                <h3>Interview with Global Investors</h3>
                <p>Insights on cross-border transactions and the OFW market.</p>
                <Link to="/podcast" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Listen Now</Link>
              </div>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#ccc' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Video</h4>
                <h3>Filipino Homes Success Stories</h3>
                <p>Real agents sharing their journey from zero to top producer.</p>
                <Link to="/tfshow" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Watch Video</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">Success Stories</span>
            <h2>Real Results from Real Agents</h2>
          </div>
          <div className="grid-2">
            <div className="card" style={{ padding: '4rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Maria Santos" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Maria Santos</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Top Producer, Makati</span>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                "Anthony's coaching completely changed my perspective on real estate. I went from struggling to find leads to closing multiple deals every month using his digital systems. My GCI increased by 400% in just one year."
              </p>
            </div>
            <div className="card" style={{ padding: '4rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  alt="John Doe" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>John Doe</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Broker Owner, Cebu</span>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                "The systems I learned are now the backbone of my team's success. We scaled from 5 to 50 agents while maintaining profitability and culture. Anthony is truly the visionary the industry needed."
              </p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '5rem' }}>
            <Link to="/testimonials" className="btn btn-outline" style={{ padding: '1rem 4rem' }}>View More Success Stories</Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section" style={{ background: 'var(--primary-color)', color: 'white' }}>
        <div className="container text-center">
          <h2 className="section-title text-white">Ready to Elevate Your Career?</h2>
          <p className="mb-4" style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 4rem' }}>Book your free coaching consultation today and find out which program is right for you. Our experts are ready to help you map out your path to success.</p>
          <Link to="/free-coaching-consultation" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.1rem' }}>Book Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
