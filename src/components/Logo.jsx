export default function LogoName() {
  return (
    <div className="fixed top-[-10px] left-0 z-50 flex items-center m-0 p-0 h-[120px]">
      <div className="flex items-center h-full">
        {/* Logo first */}
        <img
          src="./Logo.png"
          alt="Kali-Byte Logo"
          className="h-[120px] w-[130px] object-contain m-0 p-0 mt-[-20px]"
        />
        {/* Company Name */}
        <div className="flex flex-col justify-center ml-[-30px] leading-none mt-[-30px]">
          <span
            className="font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-orange-500 to-sky-400 
                       text-[20px] leading-none"
          >
            KALI-BYTE<br/>SOLUTIONS
          </span>
        </div>
      </div>
    </div>
  );
}
