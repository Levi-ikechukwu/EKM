export default function TrustBar() {
  const items = [
    "Registered Nigerian Company",
    "Tax Compliant",
    "HSE-Compliant Operations",
    "Industry-Focused Procurement Expertise",
  ];

  return (
    <div className="bg-[#FFF9F6] py-4 lg:py-5 w-full my-8 lg:my-12">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-y-3 md:gap-y-0 gap-x-4 md:gap-x-5 lg:gap-x-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {/* Checkmark Icon */}
            <svg
              className="w-4 h-4 mr-1.5 text-[#333333] shrink-0"
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
            <span className="text-[#1a3b5c] font-medium text-[11px] sm:text-[13px] lg:text-[14px]">
              {item}
            </span>

            {/* Separator Pipe (Hidden on Mobile) */}
            {index !== items.length - 1 && (
              <span className="hidden md:block ml-4 md:ml-5 lg:ml-8 text-[#1a3b5c] font-medium opacity-60">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
