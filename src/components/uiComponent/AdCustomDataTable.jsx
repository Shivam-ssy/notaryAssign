import React from "react";

function AdCustomDataTable({ value = "", datas = {} }) {
  // Function to check the type of data (date, URL, or string)
  const checkDataType = (input) => {
    const urlRegex = /^(https?|ftp?|http):\/\/[^\s/$.?#].[^\s]*$/i;
    const date = new Date(input);
    const isValidDate = !isNaN(date.getTime());

    if (urlRegex.test(input)) {
      return <a href={input} target="_blank" className="text-blue-500 hover:underline">{input}</a>;
    } else if (isValidDate) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    } else {
      return input;
    }
  };

  return (
    <div className="ml-0 md:ml-7">
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white shadow-md rounded-lg border-separate border-spacing-0">
          <tbody className="text-gray-700">
            {Object.keys(datas).map((data, index) =>
              data !== "_id" && (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{data}</td>
                  <td className="px-4 py-2">{!Number(datas[data])?checkDataType(datas[data]):datas[data]}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdCustomDataTable;
