import servicesIcon from './shared/services-icon.png'
export default function Services(): JSX.Element {
    return (
        <div>
        <section id="services" className="w-full py-8 px-4 sm:px-8 lg:px-28 ">
            <span>SERVICES WE PROVIDE</span>
            <div className="w-full grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="py-4">
                    <span className="text-slate-800 text-3xl lg:text-5xl font-extrabold leading-normal">Build on both: Google web stories and AMP website format</span>
                </div>
                <div className="flex justify-center items-center">
                    <img src= {servicesIcon} className="aspect-square object-center object-cover" alt="" />
                </div>
                <div className="sm:col-span-2 md:col-span-1 py-4 flex flex-row gap-4">
                    <div className="flex-1">
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-800">5640</h1>
                        <p className="text-slate-500 py-2">Product sales per day using our tool</p>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-800">6M+</h1>
                        <p className="text-slate-500 py-2">Download total in this year</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}