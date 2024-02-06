export default function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-6/12 w-6/12 border border-gray-900 p-4 mt-8">
        <h1 className="text-3xl text-center font-black  from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          About Us
        </h1>
        <div className="p-8 ">
          <h2 className="text-xl text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            A company focused on bringing cryptocurrency prices in real time.
          </h2>
        </div>
      </div>
    </div>
  );
}
