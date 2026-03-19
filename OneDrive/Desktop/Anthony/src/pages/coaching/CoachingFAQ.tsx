import { HelpCircle } from 'lucide-react';

const CoachingFAQ = () => {
  const faqs = [
    {
      q: "Who is Anthony Leuterio's coaching for?",
      a: "Our coaching is designed for real estate professionals at all levels—from new agents looking for their first deal to broker-owners managing hundreds of agents."
    },
    {
      q: "What is the difference between Core and Elite?",
      a: "Core is a group-based program focusing on foundational systems, while Elite offers 1-on-1 mentorship with our most senior strategists for customized business scaling."
    },
    {
      q: "Do I need to be in the Philippines to join?",
      a: "No. While our roots are in the Philippines, Anthony's systems (like OLA) are used by agents globally, including in Dubai, the US, and Southeast Asia."
    },
    {
      q: "How soon can I expect results?",
      a: "While results vary based on execution, our students see an average GCI increase of 40% within their first 12 months of consistent implementation."
    }
  ];

  return (
    <div className="faq-page">
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Common Questions</span>
          <h1 style={{ marginBottom: '2rem' }}>Coaching FAQ</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Everything you need to know about partnering with Anthony Leuterio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="card" style={{ marginBottom: '1.5rem', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <HelpCircle size={24} color="var(--secondary-color)" />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{faq.q}</h3>
              </div>
              <p style={{ marginTop: '1.5rem', marginBottom: 0, paddingLeft: '3rem', color: 'var(--text-muted)' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoachingFAQ;
