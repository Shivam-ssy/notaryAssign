import CustomCheckbox from "./CustomCheckBox"
function CustomDataTables({value="",datas=[]}) {
  return (
    <div className="ml-0 md:ml-7">
    <h3 className="font-semibold text-lg">{value}</h3>
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg border-separate border-spacing-0">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Type</th>
            <th className="px-4 py-2 text-left font-semibold">{value}</th>
            <th className="px-4 py-2 text-left font-semibold">Label</th>
            <th className="px-4 py-2 text-left font-semibold">
              Preferred
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {datas.map((data, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2">{data.type}</td>
              <td className="px-4 py-2">
                {data.email || data.phone|| value=="Email" ?"hello@gmail.com":"0123456789"}
              </td>
              <td className="px-4 py-2">{data.label}</td>
              <td className="px-4 py-2">
                <CustomCheckbox isChecked={data.preferred}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default CustomDataTables
