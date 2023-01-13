import chairTablet from './shared/chair-tablet.png'
import semiCircle from './shared/orange-half-circle-clipart.svg'
import jumpingMan from './shared/man-jumping.png'
import matrix from './shared/matrix-image.png'
import { Icon } from '@iconify/react';

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


    let renderStories: JSX.Element[] = stories.map((story, key) => {
        return (
            <li className="flex flex-row items-start py-2" key={key}>
            <div>
                <div className="py-3 pr-4">
                <Icon icon="mingcute:check-circle-fill" color="green" height="24" />
                </div>
            </div>
            <div className="">
                <h1 className="text-lg fext-lexend font-bold text-slate-800 py-2">{story.heading}</h1>
                <p className="text-slate-500">{story.text}</p>
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
                            <img src={semiCircle} className="max-h-16 mx-auto" alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-800 py-4">$15,000</h1>
                            <p className="text-slate-500 text-sm">Earnings per month</p>
                        </div>
                    </div>

                   {/* -- Product card code goes here ---------- */}

                    <div className="p-4 bg-[#3F6745] xs:flex xs:flex-row xs:gap-8 xs:place-items-center sm:place-items-baseline sm:block sm:max-w-[16rem]">
                        <div className="xs:flex-1 rounded-sm">
                            <img src={chairTablet} className="aspect-square w-full h-auto rounded-sm" alt="" />
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
        <section id="products" className="w-full py-8 px-4 xs:px-8 sm:px-10 lg:px-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 justify-center items-center gap-y-24">
                <div className="flex-1">
                    <div className="relative flex flex-col xs:flex-row gap-4 p-4 bg-[#3F6745] my-16 mx-4">
                        <div className="bg-white flex-1">
                            <img src={jumpingMan} className="w-full h-auto aspect-square object-cover object-center place-self-center" alt='' />
                        </div>
                        <div className="flex-1">
                            <img src={chairTablet} className="w-full h-auto" alt=''/>
                        </div>

                        {/* --------Absolutely placed surfaces-- */}

                        <div className="absolute -top-16 -right-4 bg-white p-2">
                            <img src={matrix} className="aspect-square h-auto w-full object-center object-cover " alt=''/>
                        </div>

                        <div id="customers" className="absolute -bottom-16 -left-4">
                            <div className="flex flex-col items-center p-1 bg-white rounded-sm w-fit">
                                <span className="p-1 my-2 bg-orange-400 hover:[transform:_scale(1.2)] transition-transform duration-300 ease-linear rounded-full drop-shadow-sm text-white">
                                    <Icon icon="mdi:user" color="white" />
                                </span>
                                <div>
                                    <h1 className="font-bold font-slate-800 text-sm">31950+</h1>
                                    <p className="text-sm text-slate-400 text-[10px]">Customers</p>
                                </div>
                                <div id="avatars" className="flex flex-row gap-[1px] my-1 text-[9px]">
                                    <div className="border rounded-full bg-orange-400 hover:[transform:_scale(1.2)] hover:text-white transition-transform duration-300 ease-linear text-slate-500 p-1">
                                        <span>
                                            <Icon icon="mdi:user" color="white" />
                                        </span>
                                    </div>
                                    <div className="border rounded-full bg-orange-400 hover:[transform:_scale(1.2)] hover:text-white transition-transform duration-300 ease-linear text-slate-500 p-1">
                                        <span>
                                            <Icon icon="mdi:user" color="white" />
                                        </span>
                                            
                                    </div>
                                    <div className="border rounded-full bg-orange-400 hover:[transform:_scale(1.2)] hover:text-white transition-transform duration-300 ease-linear text-slate-500 p-1">
                                        <span>
                                            <Icon icon="mdi:user" color="white" />
                                        </span>
                                    </div>
                                    <div className="border rounded-full bg-orange-400 hover:[transform:_scale(1.2)] hover:text-white transition-transform duration-300 ease-linear text-slate-500 p-1">
                                        <span>
                                            <Icon icon="mdi:user" color="white" />
                                        </span>
                                    </div>
                                    <div className="border rounded-full bg-orange-400 hover:[transform:_scale(1.2)] hover:text-white transition-transform duration-300 ease-linear text-slate-500 p-1">
                                        <span>
                                            <Icon icon="ic:baseline-plus" color="white" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-1">
                    <span className="font-md pb-4 text-slate-600">CREATIVE INTELLIGENCE</span>
                    <h1 className="text-2xl lg:text-4xl font-bold py-4 text-slate-800 font-lexend">Know your Ads inside & out performance</h1>
                    <p className="text-slate-500">When do I feature my Product? Which spokesperson is my target audience responding to? ow optimize my call to action? Get real-time answers to improve your creative mid-flight. And see what's worked in the past to get intel for your next campaign</p>
                </div>
            </div>
        </section>
        </div>)
}