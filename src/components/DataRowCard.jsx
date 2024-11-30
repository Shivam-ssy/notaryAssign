import React from 'react'

function DataRowCard({type="",value="",preferred=false}) {
  return (
    <div className='flex'>
      <span>{type}</span>
      <span>{value}</span>
      <span>
        {
            preferred ? (
                <div className="bg-[#286b7b] text-white px-3 py-1 rounded-full shadow-sm text-sm">
                    preferred
                </div>
              ) : (
                <div className="bg-[#63a4b4] text-white px-3 py-1 rounded-full shadow-sm text-sm">
                  available
                </div>
              )
        }
        </span>
    </div>
  )
}

export default DataRowCard
