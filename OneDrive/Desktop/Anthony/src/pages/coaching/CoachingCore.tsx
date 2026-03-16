import MasterSalesPage from '../../components/MasterSalesPage';

const CoachingCore = () => {
  return (
    <MasterSalesPage 
      title="Coaching Core"
      subtitle="Foundational Group Coaching"
      description="The perfect program for agents looking to build a sustainable, predictable business. Join a community of motivated professionals and learn the foundational systems of success."
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
      features={[
        "Bi-Weekly Group Coaching Calls",
        "Access to the Success Systems Library",
        "Collaborative Growth Community",
        "Quarterly Business Planning Sessions",
        "Accountability Tracking Tools"
      ]}
      price="Starts at $299/mo"
      ctaText="Apply for Core"
    />
  );
};

export default CoachingCore;
