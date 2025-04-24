
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <div>
                <img src="Hero/6nb.png" alt="Me" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all
                                                        duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px]"/>
            </div>
        </div>
    </div>
  )
}

export default Hero