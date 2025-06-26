import React from 'react'

function Headlines() {
  return (
                  <div className="w-96 h-60 rounded-4xl overflow-hidden flex justify-start items-end relative">
                                <div className="absolute z-10 right-24 top-0 w-auto py-1 bg-black/50 backdrop-blur-md rounded-bl-4xl pl-6 px-10">
                  <p className="font-dm-sans text-sm text-white text-right">Adarsh Kumar Pandit</p>
                </div>

                <div className="absolute z-10 right-0 top-0 w-auto py-1 bg-black/80 backdrop-blur-md rounded-bl-4xl pl-6 px-8">
                  <p className="font-dm-sans text-sm text-white text-right">02/12/2024</p>
                </div>
                <div className="h-auto pb-6 px-4">
                  <div className="px-4 py-0.5 rounded-full border border-white/50 bg-white/10 backdrop-blur-md w-fit text-xs text-white">Political</div>
                  <h1 className="font-semibold text-3xl tracking-tight text-white mt-1.5">
                    Title of the news
                  </h1>
                  <p className="text-sm text-neutral-400 font-normal tracking-tighter font-dm-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt nostrum error perferendis magni nam...
                  </p>
                </div>
                <div className="w-full h-full absolute inset-0 bg-linear-to-b from-black/0 to-black -z-10"></div>
                <img
                  src="https://picsum.photos/1080/1080"
                  alt="image appear here"
                  className="w-full h-full object-cover absolute inset-0 -z-20"
                />
              </div>
            
  )
}

export default Headlines