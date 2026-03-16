import { CheckCircle, Trophy, Users, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoachingPrograms = () => {
  const tiers = [
    {
      title: "Coaching Core",
      subtitle: "Foundational Growth",
      icon: <Users size={32} />,
      for: "Solo Agents & Rising Stars",
      focus: "Lead gen, scripts, and consistency.",
      features: [
        "Bi-Weekly Group Calls",
        "Basic Script Library",
        "Lead Conversion Systems",
        "Community Access",
        "Accountability Tracking"
      ],
      link: "/coaching-core",
      cta: "Learn About Core"
    },
    {
      title: "OLA Accelerator",
      subtitle: "Digital Mastery",
      icon: <Zap size={32} />,
      for: "Marketing-Focused Producers",
      focus: "Automation, ads, and digital branding.",
      features: [
        "Full OLA Video Masterclass",
        "Ad Template Library",
        "Automation Blueprints",
        "Monthly Tech Audits",
        "Certified OLA Badge"
      ],
      link: "/program-online-leads-accelerator",
      cta: "Explore OLA",
      featured: true
    },
    {
      title: "Coaching Elite",
      subtitle: "Executive Mastery",
      icon: <Trophy size={32} />,
      for: "Top 1% & Broker Owners",
      focus: "Scaling, recruitment, and UHNW.",
      features: [
        "Weekly 1-on-1 Mentorship",
        "Custom Expansion Roadmap",
        "Team Recruitment Systems",
        "P&L Analysis & Strategy",
        "Mastermind Retreats"
      ],
      link: "/coaching-elite",
      cta: "Apply for Elite"
    }
  ];

  return (
    <div className="coaching-programs-page">
      {/* Hero Section */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">The Architecture of Success</span>
          <h1>Engineered for Every <br />Level of Ambition</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Anthony Leuterio’s coaching ecosystem is designed to take you from your first closing to a multi-city real estate empire. 
          </p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {tiers.map((tier, idx) => (
              <div key={idx} className={`card ${tier.featured ? 'featured-tier' : ''}`} style={{ 
                display: 'flex', 
                flexDirection: 'column',
                border: tier.featured ? '2px solid var(--secondary-color)' : '1px solid var(--glass-border)',
                transform: tier.featured ? 'scale(1.05)' : 'none',
                zIndex: tier.featured ? 2 : 1
              }}>
                {tier.featured && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '-15px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    background: 'var(--secondary-color)', 
                    color: 'white', 
                    padding: '0.4rem 1.5rem', 
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{tier.icon}</div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{tier.title}</h2>
                <span className="subtitle" style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{tier.subtitle}</span>
                
                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--bg-section)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'var(--primary-color)' }}>Best For:</p>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{tier.for}</p>
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.95rem' }}>What's Included:</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        <CheckCircle size={16} color="var(--secondary-color)" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '3rem' }}>
                  <Link to={tier.link} className={`btn ${tier.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="section bg-alt">
        <div className="container">
          <div className="card" style={{ padding: '4rem', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 120px', display: 'flex', justifyContent: 'center' }}>
              <ShieldCheck size={100} color="var(--secondary-color)" />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <span className="subtitle">The Credibility Edge</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Get Certified by Filipino Homes</h2>
              <p className="mb-4">
                Completion of our flagship programs grants you the **Certified Partner** status. This gives you direct referral access to the largest real estate network in the Philippines and exclusive developer inventories.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--secondary-color)' }}>100k+</h4>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Network Reach</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--secondary-color)' }}>500+</h4>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Inventories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Discovery CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Not sure which one is right?</h2>
          <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Schedule a 15-minute diagnostic call with our team. we'll analyze your current production and point you to the path of highest growth.
          </p>
          <Link to="/free-coaching-consultation" className="btn btn-primary" style={{ padding: '1.2rem 4rem' }}>
            Book Diagnostic Call <ArrowRight size={18} style={{ marginLeft: '1rem' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoachingPrograms;
