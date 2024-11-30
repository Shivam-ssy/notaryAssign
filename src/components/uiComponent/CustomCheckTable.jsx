import CustomCheckbox from "./CustomCheckBox";

function CustomCheckTable({ value = "", data = {},className="w-full md:w-80" }) {
  return (
    <div className="p-4 w-full md:w-auto">
      <table className={`bg-white ${className} shadow-md rounded-lg border-separate border-spacing-0`}>
        <thead className="bg-gray-800 text-white">
          <tr >
            <th className="px-4 py-2 text-left font-semibold">{value}</th>
            <th className="px-4 py-2 text-left font-semibold">Check</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {Object.keys(data).map((key) => (
            <tr key={key}>
              <td className="px-4 py-2">{key}</td>
              <td className="px-4 py-2">
                {
                  data[key]===true || data[key]===false?
                  <CustomCheckbox isChecked={data[key]} />:data[key]
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomCheckTable;
