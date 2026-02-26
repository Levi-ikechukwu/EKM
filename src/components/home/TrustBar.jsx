export default function TrustBar() {
  const items = [
    "Registered Nigerian Company",
    "Tax Compliant",
    "HSE-Compliant Operations",
    "Industry-Focused Procurement Expertise",
  ];

  return (
    <div className="bg-[#FFF9F6] py-3 lg:py-4 w-full my-8 lg:my-12 overflow-x-auto no-scrollbar">
      <div className="w-full max-w-[1600px] mx-auto px-4 flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-5 lg:gap-x-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            {/* Checkmark Icon */}
            <svg
              className="w-4 h-4 mr-1.5 text-[#333333]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>

            {/* Text */}
            <span className="text-[#1a3b5c] font-medium whitespace-nowrap text-[12px] md:text-[13px] lg:text-[14px]">
              {item}
            </span>

            {/* Separator Pipe */}
            {index !== items.length - 1 && (
              <span className="ml-3 md:ml-5 lg:ml-8 text-[#1a3b5c] font-medium opacity-60">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
