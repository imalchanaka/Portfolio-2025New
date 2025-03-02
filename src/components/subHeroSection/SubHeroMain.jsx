const SubHeroMain = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-3 mt-4 uppercase border-y bg-brown border-lightGrey text-lightGrey">

      {/* Text Section */}
   

      {/* Cards Section */}
      <div className="flex flex-wrap items-center justify-center mt-4 gap-60">
        <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center w-52 border-orange border-[0.5px]">
          <p className="text-xl font-semibold">Instagram</p>
          <p className="text-2xl font-bold">2.8K+</p>
          <p className="text-sm">Followers</p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center w-52 border-blue-500 border-[0.5px]">
          <p className="text-xl font-semibold">Facebook</p>
          <p className="text-2xl font-bold">1.2K+</p>
          <p className="text-sm">Followers</p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center w-52 border-blue-700 border-[0.5px]">
          <p className="text-xl font-semibold">LinkedIn</p>
          <p className="text-2xl font-bold">1.3K+</p>
          <p className="text-sm">Connections</p>
        </div>
      </div>
    </div>
  );
};


export default SubHeroMain;
