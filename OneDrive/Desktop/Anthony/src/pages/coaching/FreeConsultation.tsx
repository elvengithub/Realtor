import LeadCaptureForm from '../../components/LeadCaptureForm';

const FreeConsultation = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div>
            <h2 className="section-title">Free Coaching Consultation</h2>
            <p className="mb-4" style={{ fontSize: '1.25rem' }}>Take the first step towards transforming your real estate business. In this 30-minute discovery call, our experts will help you identify your biggest growth opportunities and recommend the perfect coaching plan for your goals.</p>
            <h3 style={{ marginBottom: '1.5rem' }}>What to Expect:</h3>
            <ul className="check-list" style={{ marginBottom: '2.5rem' }}>
              <li>Business audit and goal assessment</li>
              <li>Identification of current bottlenecks</li>
              <li>Personalized coaching roadmap</li>
              <li>Live Q&A with our senior strategists</li>
            </ul>
            <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-section)' }}>
              <h4 className="org" style={{ marginBottom: '1rem' }}>Success Rate</h4>
              <p>94% of agents who take this consultation see a clear path to increasing their revenue by at least 30% in the first year.</p>
            </div>
          </div>
          <div>
            <LeadCaptureForm title="Schedule Your Call" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
