import { ShieldCheck, Lock, Eye, Mail, FileText } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: "1. Introduction & Scope",
      icon: <ShieldCheck size={20} />,
      content: "Your trust is our most valuable asset. This policy outlines how we collect, use, and protect your personal information when you interact with Anthony Leuterio's coaching and training platforms. By using our services, you agree to the collection and use of information in accordance with this policy."
    },
    {
      title: "2. Information We Collect",
      icon: <FileText size={20} />,
      content: "We collect several types of information, including: Personal Data (Name, email, phone number) provided via lead capture forms; Professional Data (License numbers, agency affiliation, GCI production) provided during coaching applications; and Usage Data (Cookies, IP addresses) used to improve your site experience."
    },
    {
      title: "3. How We Use Your Data",
      icon: <Eye size={20} />,
      content: "Your data is used to: Personalize your coaching journey; Send you strategic market insights and program updates; Process payments for training enrollments; and Provide verified access to the Filipino Homes global referral network."
    },
    {
      title: "4. Data Security",
      icon: <Lock size={20} />,
      content: "We implement industry-standard encryption and organizational security measures to protect your data. We NEVER sell your personal information to third parties. Your professional and financial statistics are kept strictly confidential within the professional coaching relationship."
    },
    {
      title: "5. Your Rights",
      icon: <ShieldCheck size={20} />,
      content: "You have the right to: Access the data we hold about you; Request corrections to inaccurate information; Request deletion of your data; and Unsubscribe from any marketing communications at any time via the link provided in our emails."
    }
  ];

  return (
    <div className="privacy-page">
      {/* Header */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Trust & Transparency</span>
          <h1>Privacy Policy</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Last Updated: May 20, 2024. Ensuring your data is handled with the highest level of professional integrity.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '4rem' }}>
            {sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: idx === sections.length - 1 ? 0 : '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: 'var(--secondary-color)' }}>{section.icon}</div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{section.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 0 }}>
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
                <h4 style={{ marginBottom: '0.3rem' }}>Privacy Concerns?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Contact our data protection team at: <a href="mailto:privacy@anthonyleuterio.com" style={{ color: 'var(--secondary-color)', fontWeight: 700, textDecoration: 'none' }}>privacy@anthonyleuterio.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
