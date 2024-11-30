import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CustomDataTables from "./uiComponent/CustomDataTables.jsx";
import CustomCheckTable from "./uiComponent/CustomCheckTable.jsx";
import AdCustomDataTable from "./uiComponent/AdCustomDataTable.jsx";

const DataTabs = ({ details }) => {
  return (
    <Tabs className="">
      <TabList className="flex gap-3 flex-wrap bg-white rounded-md">
        <Tab
          selectedClassName="bg-[#286b7b] text-white rounded-md"
          className="px-5 py-2 outline-none react-tabs__tab focus:bg-[#286b7b] hover:bg-[#286b7b] rounded-md cursor-pointer font-bold"
        >
          Contact Info
        </Tab>
        <Tab
          selectedClassName="bg-[#286b7b] text-white rounded-md"
          className="px-5 py-2 outline-none react-tabs__tab focus:bg-[#286b7b] hover:bg-[#286b7b] rounded-md cursor-pointer font-bold"
        >
          Capabilities and Availability
        </Tab>
        <Tab
          selectedClassName="bg-[#286b7b] text-white rounded-md"
          className="px-5 py-2 outline-none react-tabs__tab focus:bg-[#286b7b] hover:bg-[#286b7b] rounded-md cursor-pointer font-bold"
        >
          Addresses
        </Tab>
        <Tab
          selectedClassName="bg-[#286b7b] text-white rounded-md"
          className="px-5 py-2 outline-none react-tabs__tab focus:bg-[#286b7b] hover:bg-[#286b7b] rounded-md cursor-pointer font-bold"
        >
          Licenses & Insurances
        </Tab>
        <Tab
          selectedClassName="bg-[#286b7b] text-white rounded-md"
          className="px-5 py-2 outline-none react-tabs__tab focus:bg-[#286b7b] hover:bg-[#286b7b] rounded-md cursor-pointer font-bold"
        >
          Documents
        </Tab>
        <Tab
          selectedClassName="bg-[#286b7b] text-white rounded-md"
          className="px-5 py-2 outline-none react-tabs__tab focus:bg-[#286b7b] hover:bg-[#286b7b] rounded-md cursor-pointer font-bold"
        >
          Others
        </Tab>
      </TabList>

      <TabPanel className="bg-white mt-7 rounded-md">
        <div className="p-4">
          <CustomDataTables value="Email" datas={details.emailAddresses} />
          <div className="mt-7">
            <CustomDataTables
              value="Phone Numbers"
              datas={details.phoneNumbers}
            />
          </div>
          <div className="px-7 mt-7">
            <h3 className="font-semibold text-lg mb-3">Spoken Language</h3>
            <div className="bg-gray-800 h-10 ml-0 md:ml-3 text-white flex items-center">
              {details.spokenLanguages.map((url, index) => (
                <span key={index} target="_blank" className="px-3" href={url}>
                  {url}
                </span>
              ))}
            </div>
          </div>
          <div className="px-7 mt-7">
            <h3 className="font-semibold text-lg">Websites</h3>
            <div className="flex flex-col">
              {details.websites.map((url, index) => (
                <a
                  key={index}
                  target="_blank"
                  className="text-blue-500"
                  href={url}
                >
                  {url}
                </a>
              ))}
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="bg-white mt-7 rounded-md">
        <div className="p-4 flex flex-wrap justify-around">
          <CustomCheckTable value="Capabilities" data={details.capabilities} />
          <CustomCheckTable value="Availablity" data={details.availability} />
        </div>
      </TabPanel>

      <TabPanel className="bg-white mt-7 rounded-md">
        <div className="p-4">
          <CustomCheckTable
            className="min-w-full"
            value="Billing Address"
            data={details.billingAddress}
          />
          <CustomCheckTable
            className="min-w-full"
            value="Shipping Address"
            data={details.shippingAddress}
          />
        </div>
      </TabPanel>

      <TabPanel className="bg-white mt-7 rounded-md">
        <div className="px-7 py-4 ml-5">
          <div>
            <h3 className="font-semibold text-lg">State Licenses</h3>
            {details.stateLicenses.map((data, index) => (
              <AdCustomDataTable key={index} datas={data} />
            ))}
          </div>
          <div>
            <h3 className="font-semibold text-lg">Insurances</h3>
            {details.insurances.map((data, index) => (
              <AdCustomDataTable key={index} datas={data} />
            ))}
          </div>
          
        </div>
      </TabPanel>
      <TabPanel className="bg-white mt-7 rounded-md">
        <div className="px-7 py-4 ml-5">
        <div>
            <h3 className="font-semibold text-lg">Insurances</h3>
            {details.documentLinks.map((data, index) => (
              <AdCustomDataTable key={index} datas={data} />
            ))}
          </div>
          
        </div>
      </TabPanel>
      <TabPanel className="bg-white mt-7 rounded-md">
        <div className="px-7 py-4 ml-5">
        <div>
            <h3 className="font-semibold text-lg">Background Checks</h3>
            {details.backgroundChecks.map((data, index) => (
              <AdCustomDataTable key={index} datas={data} />
            ))}
          </div>
        <div>
            <h3 className="font-semibold text-lg">Custom Fields</h3>
          
              <AdCustomDataTable  datas={details.customFields} />
            
          </div>
          
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default DataTabs;
