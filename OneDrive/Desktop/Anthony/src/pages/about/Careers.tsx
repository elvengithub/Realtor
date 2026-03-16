import { Briefcase, Rocket, Heart, Zap, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const departments = [
    {
      title: "Coaching & Strategy",
      count: "3 Open Roles",
      desc: "Help the next generation of agents scale their production."
    },
    {
      title: "Marketing & Creative",
      count: "2 Open Roles",
      desc: "Drive global brand awareness through high-impact content."
    },
    {
      title: "Tech & AI Development",
      count: "1 Open Role",
      desc: "Build the future of property tech and AI tools."
    },
    {
      title: "Operations & Success",
      count: "4 Open Roles",
      desc: "The engine that ensures our students achieve world-class results."
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Join the Movement</span>
          <h1>Build the Future <br />of Global Real Estate</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            We are looking for the next generation of strategists, marketers, and innovators to help us redefine the industry on a global scale.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">Our Culture</span>
            <h2>Why Build Your Career Here?</h2>
          </div>
          <div className="grid-4">
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Rocket size={32} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Unmatched Growth</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Direct mentorship from world-class industry leaders.</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Heart size={32} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Global Impact</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Work on projects that touch thousands of agents worldwide.</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Zap size={32} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Innovation First</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Be at the absolute forefront of Real Estate AI and tech.</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Briefcase size={32} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Cebu to the World</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Local roots with an unapologetic global vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">Departments</span>
            <h2>Explore Open Opportunities</h2>
          </div>
          <div className="grid-2">
            {departments.map((dept, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{dept.title}</h3>
                  <p style={{ marginBottom: 0 }}>{dept.desc}</p>
                </div>
                <div style={{ textAlign: 'right', minWidth: '150px' }}>
                  <span className="subtitle" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{dept.count}</span>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                    VIEW ROLES <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proactive CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="card" style={{ padding: '5rem', backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <Mail size={48} color="var(--secondary-color)" style={{ marginBottom: '2rem' }} />
            <h2 className="text-white" style={{ marginBottom: '1.5rem' }}>Don't see the right role?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3rem' }}>
              We are always looking for A-Players. If you believe you can add massive value to our mission, send us your portfolio and story.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Send Your Portfolio <ArrowRight size={18} style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
