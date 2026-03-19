import { Download, FileText, Database } from 'lucide-react';

const AgentTools = () => {
  const tools = [
    {
      title: "Script Book 2024",
      desc: "Every script Anthony uses for FSBOs, Expireds, and Referrals.",
      type: "PDF Guide",
      icon: <FileText size={24} />
    },
    {
      title: "OLA Ad Templates",
      desc: "High-performing Facebook and Instagram ad copy and creative assets.",
      type: "Creative Pack",
      icon: <Megaphone size={24} />
    },
    {
      title: "CRM Workflow Blueprint",
      desc: "Automation sequences to nurture leads from cold to closing.",
      type: "Automation File",
      icon: <Database size={24} />
    }
  ];

  return (
    <div className="tools-page">
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">The Arsenal</span>
          <h1>Professional Agent Tools</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Download the exact resources and systems used by the top 1% of producers in the Filipino Homes network.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {tools.map((t, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{t.title}</h3>
                <span className="subtitle" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{t.type}</span>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>{t.desc}</p>
                <button className="btn btn-primary" style={{ padding: '0.8rem', width: '100%', fontSize: '0.8rem' }}>
                  <Download size={16} style={{ marginRight: '0.5rem' }} /> DOWNLOAD NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Megaphone for icon
const Megaphone = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

export default AgentTools;
