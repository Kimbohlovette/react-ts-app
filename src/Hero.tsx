import React from "react";
import johnsmith from "./shared/JOHN_SMITH.png"

export default class Hero extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="flex flex-col sm:flex-row p-4 bg-green-800 py-8">
                <HeroText />
                <HeroImage />
            </div>
        )
    }
}

class HeroText extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="flex-1 text-left">
                <div className="">
                    <h1 className="text-5xl text-slate-50 font-black sm:w-full">Shopify Products</h1>
                    <p className="text-slate-50 font-semibold my-2 max-w-xs">
                        More than 8000 companies trust our business.
                    </p>
                </div>
                <div className="py-6">
                    <div className="relative flex bg-white py-4 sm:py-8 my-8 xs:pr-4 rounded-sm w-full max-w-[22rem]">
                        <img src={johnsmith} className="absolute bottom-0 left-2 h-28" alt="Johhn Smith"/>
                        <div className="mx-auto translate-x-4">
                            <span className="text-lg xs:text-xl font-semibold py-2 sm:py-4 text-slate-900 [@media(min-width:_452px]:text-sm">John Smith</span>
                            <p className="text-sm text-slate-600 [@media(min-width:_452px)]:text-xs">Watch our intro videos</p>
                        </div>
                        <div className="rounded-full p-3 text-lg bg-orange-500 hover:bg-orange-600 ring-orange-400 drop-shadow-sm absolute -right-4 top-1/4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" d="m5 4l10 6l-10 6V4z"/></svg>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
class HeroImage extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="flex-1 text-left">
                {/* Image */}
            </div>
        )
    }
}
