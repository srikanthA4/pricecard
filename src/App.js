import "./App.css";
import PriceCard from "./PriceCard";

function App() {
  let pricingData = [
    { 
      tagName: "FREE",
      price: 0,
      user: "Single User",
      userFlag:true,
      storage: "5GB Storage",
      storageFlag:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsFlag:true,
      access: "Community Access",
      accessFlag:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsFlag:false,
      support:"Dedicated Phone Support",
      supportFlag:false,
      domain:"Free Subdomain",
      domainFlag:false,
      report:"Monthly Status Reports",
      reportFlag:false
    },
    { 
      tagName: "PLUS",  
      price: 9,
      user: "5 Users",
      userFlag:true,
      storage: "50GB Storage",
      storageFlag:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsFlag:true,
      access: "Community Access",
      accessFlag:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsFlag:true,
      support:"Dedicated Phone Support",
      supportFlag:true,
      domain:"Free Subdomain",
      domainFlag:true,
      report:"Monthly Status Reports",
      reportFlag:false
    },
    { 
      tagName: "PRO",
      price: 49,
      user: "Unlimited Users",
      userFlag:true,
      storage: "150GB Storage",
      storageFlag:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsFlag:true,
      access: "Community Access",
      accessFlag:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsFlag:true,
      support:"Dedicated Phone Support",
      supportFlag:true,
      domain:"Unlimited Free Subdomains",
      domainFlag:true,
      report:"Monthly Status Reports",
      reportFlag:true
    }
    
  ] 
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              pricingData.map((e)=>{
                return <PriceCard data={e}/>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;