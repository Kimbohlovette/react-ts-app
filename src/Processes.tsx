import seoIcon from './shared/seo-icon.png'
import contentIcon from './shared/content-icon.png'
import conversionIcon from './shared/conversion-icon.png'
export interface Process {
    title: string
    image: string
    text: string
}

export default function Processes():JSX.Element{

    const  processes: Process[] = [
        {
            title: "For SEO",
            image: seoIcon,
            text: "Improve search ranking son mobile, automatically"
        },
        {
            title: "For Content",
            image: contentIcon,
            text: "Your new content creation tool for better engagement."
        },
        {
            title: "For Conversation",
            image: conversionIcon,
            text: "AMP experience on desktop optimized for Conversion"
        },
    ]
    let renderProcesses:JSX.Element[] = processes.map( (process:Process, key:number)=>{
        return (
        <div className="bg-white p-8 rounded-sm drop-shadow-md" key={key}>
            <img src={process['image']} alt="" />
            <h1 className="py-2 font-bold text-2xl text-slate-800">{process['title']}</h1>
            <p className="text-slate-500">{process['text']}</p>
        </div>
        )
    })
    return (<div>
         <section id="processes" className="w-full py-8 px-4  sm:px-8 lg:px-28">
            <div className="flex flex-col">
                <div className="w-full pb-4 px-2 sm:text-center">
                    <span className="text-3xl lg:text-4xl text-slate-800 font-bold py-4">Our Creative Process.</span>
                    <p className="py-2 md:w-4/5 lg:w-3/5 mx-auto text-slate-500">Financial instituations provide financial services for members and clients. it is also termed as financial intermediaries because they act as middlemen between the savers and borrowers</p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8 pt-4">
                    {renderProcesses}
                </div>
            </div>

        </section>
    </div>)
}