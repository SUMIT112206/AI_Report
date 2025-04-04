import React from 'react';
import { FileText, Shield, BarChart, Brain, Globe, Upload } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="overflow-hidden w-full flex justify-between items-center p-6 shadow-md">
    <h1 className="text-2xl font-bold text-black">Med<span className="text-blue-500">Kit</span></h1>
     <div className="space-x-6">
         <a href="#" className="text-gray-700 hover:text-black">Features</a>
         <a href="#" className="text-gray-700 hover:text-black">Forum</a>
         <a href="#" className="text-gray-700 hover:text-black">More</a>
     </div>
 
     <div className="border relative">
         <div  id='loginbtnbox'  className='h-full w-14 absolute bg-blue-600 left-1/2 -translate-x-1/2'>

         </div>
         <button className="border w-24 py-2 pl-3   rounded-lg text-left">Login</button>
         <button className="bg-blue-500 text-white w-28 py-2 pr-3 rounded-lg text-right ">Sign Up</button>
     </div>        
   
   
   </nav>

  );
};


// Features Component
const Features = () => {
  const topFeatures = [
    {
      icon: <Brain className="h-6 w-6 text-blue-700" />,
      title: "AI-Powered Report Extraction",
      description: "Converts PDFs & images into readable text using OCR & NLP"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-700" />,
      title: "Risk Level Analysis",
      description: (
        <div>
          <p>Color-coded indicators</p>
          <div className="flex items-center space-x-2 mt-1">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
            <span>Normal</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
            <span>Caution</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
            <span>Critical</span>
          </div>
        </div>
      )
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-700" />,
      title: "Secure & Private Processing",
      description: "Data is encrypted, and no personal info is stored."
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-700" />,
      title: "Health Trends & Report History",
      description: "Tracks past reports & provides health progress insights."
    }
  ];

  const bottomFeatures = [
    {
      icon: <Brain className="h-6 w-6 text-blue-700" />,
      title: "AI-Powered Doctor's Notes",
      description: "AI summarizes complex reports into simple explanations."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-700" />,
      title: "Multi-Language & Simplified Explanation",
      description: "Translates medical terms into easy-to-understand language."
    },
    {
      icon: <Upload className="h-6 w-6 text-blue-700" />,
      title: "Easy Upload & Instant Results",
      description: "Drag & drop files, get analysis within seconds."
    }
  ];

  return (
    <div className="py-16 px-6 md:px-16">
      {/* Features Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-16">Features</h2>

        {/* Top row of features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topFeatures.map((feature, index) => (
            <Card key={index} className="bg-blue-200 hover:shadow-lg transition-shadow overflow-hidden rounded-3xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">{feature.title}</h3>
                <div className="text-blue-800">{feature.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row of features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {bottomFeatures.map((feature, index) => (
            <Card key={index} className="bg-blue-200 hover:shadow-lg transition-shadow overflow-hidden rounded-3xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">{feature.title}</h3>
                <div className="text-blue-800">{feature.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
// Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Features />
    </div>
  );
};
export default App;


