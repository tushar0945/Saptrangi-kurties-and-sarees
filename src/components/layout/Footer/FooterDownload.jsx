const FooterDownload = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg ">
        DOWNLOAD THE APP
      </h2>

      <div className="flex flex-col space-y-3">
        <img
          src="#"
          alt="Google Play"
          className="w-32 cursor-pointer hover:opacity-80 transition"
        />
        <img
          src="#"
          alt="App Store"
          className="w-32 cursor-pointer hover:opacity-80 transition"
        />
      </div>
    </div>
  );
};

export default FooterDownload;
