import './App.css';
import AnimatedCursor from 'react-animated-cursor';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsNC from './components/TermsNC';
import Footer from './components/Footer';
import Offline from './components/Offline';
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Complaint from './components/Complaint';
import Whyus from './components/Whyus';
import Features from './components/Features';
import Contact from './components/Contact';
import ChatNow from './components/ChatNow';
import Location from './components/Location';
import Career from './components/Career';

function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Main /><Footer /></>,
    },
    {
      path: "/privacy-policy",
      element: <><Navbar /><PrivacyPolicy /><Footer /></>,
    },
    {
      path: "/terms&conditions",
      element: <><Navbar /><TermsNC /><Footer /></>,
    },
    {
      path: "/raise-issue",
      element: <><Navbar /><Complaint /><Footer /></>,
    },
    {
      path: "/why-us",
      element: <><Navbar /><Whyus /><Footer /></>,
    },
    {
      path: "/features",
      element: <><Navbar /><Features /><Footer /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
    {
      path: "/chat-now",
      element: <><Navbar /><ChatNow /><Footer /></>,
    },
    {
      path: "/location",
      element: <><Navbar /><Location /><Footer /></>,
    },
    {
      path: "/career",
      element: <><Navbar /><Career /><Footer /></>,
    },
    {
      path: "/*",
      element: <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }} >
        <h1
          style={{
            fontSize: "56px",
            color: "#1034a6",
          }} >
          404! 
        </h1>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "500"
          }} >
          Page Doesn't Exist😞
        </h3>
        <Link to="/">Return to Home page</Link>
      </div>
    }
  ]);

  // if (!isOnline) {
  //   return (
  //     <div style={{cursor: "auto"}}>
  //       <Offline />
  //     </div>
  //   );
  // }

  return (
    <div className="App" style={{ cursor: "auto" }}>
      <AnimatedCursor
        innerSize={10}
        outerSize={48}
        innerStyle={{ backgroundColor: '#3586ff', zIndex: '100000000' }}
        outerStyle={{ border: '1.5px solid #3586ff', backgroundColor: 'transparent', zIndex: '100000000' }}
        outerAlpha={1}
        innerScale={0.7}
        outerScale={2}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
