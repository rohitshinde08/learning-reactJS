import './App.css'
import { Card } from './components/Card'

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      posted: "5 days ago",
      position: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      posted: "2 weeks ago",
      position: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Mountain View, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      posted: "3 days ago",
      position: "iOS Developer",
      tag1: "Part-time",
      tag2: "Mid Level",
      pay: "$45/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      posted: "1 week ago",
      position: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      posted: "4 days ago",
      position: "Cloud Architect",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      posted: "6 days ago",
      position: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      company: "Tesla",
      posted: "3 weeks ago",
      position: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$78/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      company: "OpenAI",
      posted: "2 days ago",
      position: "AI Research Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/samsung.com",
      company: "Samsung",
      posted: "1 week ago",
      position: "Embedded Systems Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Seoul, South Korea"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      posted: "10 days ago",
      position: "GPU Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Santa Clara, USA"
    }
  ];


  return (
    <div className="parent">
      {jobOpenings.map(function (elem,index) {
        return <div key={index}><Card
          logo={elem.brandLogo}
          company={elem.company}
          posted={elem.posted}
          position={elem.position}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        /></div>

      })}
    </div>
  )
}

export default App
