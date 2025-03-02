const SubHeroMain = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-3 mt-4 uppercase border-y bg-brown border-lightGrey text-lightGrey">

      {/* Text Section */}
   

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 px-4 mt-6 sm:grid-cols-3 md:grid-cols-3">
  {/* Instagram */}
  <div className="bg-black text-white p-2 rounded-lg shadow-lg text-center border-[1px] border-orange-500">
    <p className="text-sm ">Instagram</p>
    <p className="text-2xl font-bold text-orange-400">2.8K+</p>
    <p className="text-sm text-gray-300">Followers</p>
  </div>

  {/* Facebook */}
  <div className="bg-black text-white p-2 rounded-lg shadow-lg text-center border-[1px] border-blue-500">
    <p className="text-sm ">Facebook</p>
    <p className="text-3xl font-bold text-blue-400">1.2K+</p>
    <p className="text-sm text-gray-300">Followers</p>
  </div>

  {/* LinkedIn */}
  <div className="bg-black text-white p-2 rounded-lg shadow-lg text-center border-[1px] border-blue-700">
    <p className="text-sm ">LinkedIn</p>
    <p className="text-3xl font-bold text-blue-400">1.3K+</p>
    <p className="text-sm text-gray-300">Conn</p>
  </div>
</div>

    </div>
  );
};


export default SubHeroMain;
