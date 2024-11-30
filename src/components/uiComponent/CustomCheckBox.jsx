
const CustomCheckbox = ({isChecked=false}) => {
  

  return (
    <div className="flex items-center">
      <input 
        type="checkbox" 
        id="custom-checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="hidden"
      />
      <label 
        htmlFor="custom-checkbox" 
        className={`
          cursor-pointer 
          w-6 h-6 
          border-2 
          rounded 
          flex 
          items-center 
          justify-center 
          transition-all 
          duration-200 
          ${isChecked 
            ? 'bg-[#286b7b] border-[#286b7b]' 
            : 'bg-white border-gray-300 hover:border-[#286b7b]'}
        `}
      >
        {isChecked && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        )}
      </label>
    </div>
  );
};

export default CustomCheckbox;

 {/* <label class="inline-flex items-center cursor-pointer">
                          <input type="checkbox" readOnly checked={email.preferred} class="sr-only peer" />
                          <div
                            class="relative w-12 h-6 bg-blue-200 rounded-full 
                            peer peer-checked:after:translate-x-full 
                            rtl:peer-checked:after:-translate-x-full 
                            peer-checked:after:border-white after:content-[''] 
                            after:absolute after:top-[2px] after:start-[2px] 
                            after:bg-white after:border-gray-300 after:border 
                            after:rounded-full after:h-5 
                            after:w-5 after:transition-all  
                            peer-checked:bg-[#286b7b]"
                          ></div>
                        </label> */}