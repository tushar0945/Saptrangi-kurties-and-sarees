import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  //   console.log(import.meta.env.VITE_WHATSAPP_NUMBER);
  //   console.log(import.meta.env.VITE_WHATSAPP_MESSAGE);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const message = import.meta.env.VITE_WHATSAPP_MESSAGE;
  //   ${window.location.origin}
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6
        w-14 h-14
        bg-green-500
        text-white
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:bg-green-600
        hover:scale-105
        active:scale-95
        transition-all
        z-[9999]
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
