import { useEffect, useState } from "react";
import DataTabs from "./components/Panel";
import ProfileCards from "./components/ProfileCards";
function App() {
  const [details, setDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  
  useEffect(() => {
    const getDetails = async () => {
      setLoader(true); 
  
      try {
        const response = await fetch(
          "https://api.thenotary.app/directory/customerDetails?username=nandha",
          { method: "GET" }
        );
        const data = await response.json();
        setDetails(data); 
        const temp=JSON.stringify(data)
        localStorage.setItem("details",temp)
        console.log(data); 
      } catch (error) {
        console.error("Error fetching details:", error); 
      } finally {
        setLoader(false); 
      }
    };
   
      getDetails();
 
  }, []); 
  
  return (
    <>
    {!loader ? (
      details ? ( // Ensure `details` is not null
        <div className="min-h-screen p-6 bg-[#ebebeb]">
          <div className="max-w-4xl mx-auto">
            <ProfileCards profileInfo={details.profileInfo} />
            <DataTabs details={details.details} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
          <p>No data available</p>
        </div>
      )
    ) : (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )}
  </>
);
}

export default App;
