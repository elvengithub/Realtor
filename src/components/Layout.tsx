import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityWidget from './AccessibilityWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};

export default Layout;
