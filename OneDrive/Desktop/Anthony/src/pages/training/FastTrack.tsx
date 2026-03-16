import MasterSalesPage from '../../components/MasterSalesPage';

const FastTrack = () => {
  return (
    <MasterSalesPage 
      title="Fast Track"
      subtitle="90 Days to Momentum"
      description="The ultimate onboarding program for new agents. Get into production immediately with a 90-day roadmap designed to result in your first three closings."
      image="https://images.unsplash.com/photo-1552581234-261207845074?auto=format&fit=crop&q=80&w=800"
      features={[
        "The 90-Day Production Roadmap",
        "Foundational Scripts & Roleplay",
        "CRM Setup & Database Activation",
        "Open House Mastery for Leads",
        "Daily Accountability Frameworks"
      ]}
      price="Get Started for $397"
    />
  );
};

export default FastTrack;
