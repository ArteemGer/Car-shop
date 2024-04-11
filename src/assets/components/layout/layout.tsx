import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { ReactNode } from "react";


interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  };
  
  export default Layout;