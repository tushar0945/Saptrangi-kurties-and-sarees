import { ShieldCheck, CreditCard, RefreshCcw } from "lucide-react";

const TrustBadges = () => {
  const items = [
    {
      icon: <ShieldCheck className="text-primary opacity-100" />,
      title: "QUALITY ASSURANCE",
    },
    {
      icon: <CreditCard className="text-primary opacity-100" />,
      title: "100% SECURE PAYMENT",
    },
    {
      icon: <RefreshCcw className="text-primary opacity-100" />,
      title: "EASY RETURNS",
    },
  ];

  return (
    <div className="w-full flex justify-center py-4 sm:py-8">
      <div className="grid grid-cols-3 gap-4 sm:gap-10 text-center w-full max-w-[600px]">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center gap-3
              transition-all 
              hover:opacity-100 
              opacity-80
            "
          >
            {/* ICON WRAPPER */}
            <div
              className="
                p-3 sm:p-4 
                rounded-full bg-neutral-100 
                shadow-sm 
                opacity-90 
                hover:opacity-100 
                transition-all
              "
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <p
              className="
                text-[10px] sm:text-xs 
                font-semibold 
                text-gray-600 
                tracking-wide 
                uppercase 
                opacity-70 
                hover:opacity-100 
                transition-all
              "
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
