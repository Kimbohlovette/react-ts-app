import checkCircle from './shared/check-circle1.svg'

export interface Story {
    heading: string
    text: string
}

export default function ProductStories():JSX.Element {

    const stories: Story[] = [
        {
            heading: "SEO optimized, high Google rank",
            text: "By converting all your Shopify product pages in AMP format"
        },
        {
            heading: "Fast loading, low bounce rates",
            text: "AMP is the latest Google technology allowing websites to load at much higher speeds"
        },
        {
            heading: "Immersive, direct conversion",
            text: "The story format is already a proven layout for giving users a more interactive."
        }
    ];

    let renderStories: JSX.Element[] = stories.map(story => {
        return (
            <li className="flex flex-row items-start py-2">
            <div>
                <div className="py-3 pr-4">
                    <img src={checkCircle} className="h-6 aspect-square" alt="" />
                </div>
            </div>
            <div className="">
                <h1 className="text-lg fext-lexend font-bold text-slate-800 py-2">SEO optimized, high Google rank</h1>
                <p className="text-slate-500">By converting all your Shopify product pages in AMP format</p>
            </div>
        </li>
        )
    })


    return (
        <div>
             <section className="py-8 px-4 xs:px-8 sm:px-10 lg:px-28 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex-1">
                    <h1 className="py-8 text-2xl lg:text-5xl lg:w-2/3 lg:leading-snug  text-lexend text-slate-800 font-bold">Why product stories? learn more</h1>
                    <ul className="stories">
                        {renderStories}
                    </ul>
                </div>

                <div className="flex-1 py-8 flex flex-col sm:flex-row relative">

                   {/* ----------Product Sales dashboard ------------ */}

                    <div className="flex flex-col justify-center items-center gap-4 text-center p-4  bg-white lg:py-8 sm:h-fit sm:self-center sm:flex-1">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 py-2">$500+</h1>
                            <p className="text-slate-500 text-sm">Earnings per day</p>
                        </div>
                        <div className="w-9/12">
                            <img src="./assets/orange-half-circle-clipart.svg" className="max-h-16 mx-auto" alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-800 py-4">$15,000</h1>
                            <p className="text-slate-500 text-sm">Earnings per month</p>
                        </div>
                    </div>

                   {/* -- Product card code goes here ---------- */}

                    <div className="p-4 bg-[#3F6745] xs:flex xs:flex-row xs:gap-8 xs:place-items-center sm:place-items-baseline sm:block sm:max-w-[16rem]">
                        <div className="xs:flex-1 rounded-sm">
                            <img src="./assets/chair-tablet.png" className="aspect-square w-full h-auto rounded-sm" alt="" />
                        </div>
                        <div className="xs:flex-1">
                            <div className="py-4">
                                <h1 className="py-2 text-white text-xl xs:text-xl lg:text-2xl font-semibold">Classic Sofa</h1>
                                <p className="text-slate-200 text-sm py-2">Our popular Mika style is a modern take in the classic button down sofa</p>
                            </div>
                            <button className="py-2 px-4 w-full text-center border border-green-200 font-bold text-slate-50 rounded-sm mb-2 hover:bg-green-900 hover:ring-4 hover:ring-green-800 hover:border-transparent">Buy now for $56</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </div>)
}