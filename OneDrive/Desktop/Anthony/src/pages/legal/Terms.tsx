import { Gavel, ShieldAlert, Award, CreditCard, Scale, Mail } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: "1. Agreement to Terms",
      icon: <Gavel size={20} />,
      content: "By accessing and using this platform, you agree to be bound by these Terms of Use and to uphold the professional standards of the Anthony Leuterio coaching network. These terms apply to all visitors, users, and students who access our services."
    },
    {
      title: "2. Intellectual Property Protection",
      icon: <ShieldAlert size={20} />,
      content: "All course materials, OLA systems, proprietary scripts, and business blueprints are the exclusive intellectual property of Anthony Leuterio. Unauthorized sharing, reselling, or white-labeling of these materials is strictly prohibited. Any violation will result in immediate termination of access and potential legal action to protect our proprietary systems."
    },
    {
      title: "3. Coaching Accountability & Results",
      icon: <Award size={20} />,
      content: "Coaching is a professional partnership. While we provide world-class systems and proven strategies, your results depend entirely on your execution. We do not guarantee specific financial outcomes or GCI levels, as success is fundamentally tied to individual effort, local market conditions, and consistent implementation."
    },
    {
      title: "4. Professional Conduct & Ethics",
      icon: <Scale size={20} />,
      content: "Members of our community must operate with the highest level of integrity. Any unethical real estate practices, poaching of clients within the network, or harassment in community groups will result in immediate removal from all programs without a refund. We are committed to professionalizing the industry."
    },
    {
      title: "5. Payments, Subscriptions & Refunds",
      icon: <CreditCard size={20} />,
      content: "Subscription billing for 'Coaching Core' is processed monthly. Due to the immediate delivery of digital training products and proprietary materials, we maintain a strict no-refund policy on all course enrollments. You may cancel your coaching subscriptions at any time through your member dashboard."
    }
  ];

  return (
    <div className="terms-page">
      {/* Header */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Rules of Engagement</span>
          <h1>Terms of Use</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Establishing the standards for high-performance real estate professionals.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '4rem' }}>
            <p className="mb-4" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              Last Updated: May 20, 2024. Please read these terms carefully before enrolling in our programs.
            </p>
            
            {sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: idx === sections.length - 1 ? 0 : '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: 'var(--secondary-color)' }}>{section.icon}</div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{section.title}</h3>
                </div>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 0 }}>
                  {section.content}
                </p>
              </div>
            ))}

            <div style={{ 
              marginTop: '5rem', 
              paddingTop: '3rem', 
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <div style={{ background: 'var(--bg-section)', padding: '1rem', borderRadius: '50%' }}>
                <Mail size={24} color="var(--secondary-color)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.3rem' }}>Questions about our Terms?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Email our compliance team at: <a href="mailto:legal@anthonyleuterio.com" style={{ color: 'var(--secondary-color)', fontWeight: 700, textDecoration: 'none' }}>legal@anthonyleuterio.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
