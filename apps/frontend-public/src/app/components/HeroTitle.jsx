function HeroTitle() {
    return(
        <div className="flex flex-col w-full justify-center text-center lg:justify-start lg:text-left mt-4 font-light gap-y-3 py-3">
            <h1 className="text-4xl lg:text-6xl">Hi! 👋 </h1>
            <h1 className="text-4xl lg:text-6xl">I'm <span className="font-semibold">Isaac👨‍💻</span></h1>
            <p className='font-light text-xl flex w-full justify-center lg:justify-start '>
                Musician. Software Engineer.
            </p>
        </div>
    )
}
export default HeroTitle;