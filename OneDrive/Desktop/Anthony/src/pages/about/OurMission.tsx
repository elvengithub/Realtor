import { Target, Heart, Shield, Zap } from 'lucide-react';

const OurMission = () => {
  const values = [
    {
      title: "Coaching with Heart",
      desc: "We believe real estate is a people business. Our mission is to lead with empathy and build futures, not just transactions.",
      icon: <Heart size={32} />
    },
    {
      title: "Global Excellence",
      desc: "Operating at the highest international standards, we bring world-class systems to the local market.",
      icon: <Target size={32} />
    },
    {
      title: "Integrity First",
      desc: "Transparency and ethics are the foundation of everything we build. We are advisors first, salespeople second.",
      icon: <Shield size={32} />
    },
    {
      title: "Innovation Always",
      desc: "We pioneer the use of AI and digital marketing to ensure our agents stay ahead of the global curve.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <div className="mission-page">
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Our Purpose</span>
          <h1>Empowering the Next <br />Generation of Leaders</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            We are on a mission to professionalize the real estate industry and create a global network of elite, tech-driven professionals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            {values.map((v, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ color: 'var(--secondary-color)' }}>{v.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{v.title}</h3>
                  <p style={{ marginBottom: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
