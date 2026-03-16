import MasterSalesPage from '../../components/MasterSalesPage';

const CoachingElite = () => {
  return (
    <MasterSalesPage 
      title="Coaching Elite"
      subtitle="Exclusive 1-on-1 Performance"
      description="The pinnacle of real estate mentorship. Partner directly with Anthony's most senior strategists for customized, high-stakes business scaling. This is only for agents and owners ready to dominate their entire region."
      image="https://images.unsplash.com/photo-1507679722338-95842f2a7062?auto=format&fit=crop&q=80&w=800"
      features={[
        "Weekly 1-on-1 Strategic Coaching Calls",
        "Deep-Dive Business Audit & P&L Analysis",
        "Customized Expansion & Recruitment Roadmap",
        "Priority Access to Anthony Leuterio",
        "Exclusive Invitation to Mastermind Retreats"
      ]}
      price="Inquire for Custom Pricing"
      ctaText="Apply for Elite"
    />
  );
};

export default CoachingElite;
