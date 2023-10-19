

export default function LabCard ({ide,title,href,children,img,...props}:any) {
    return(
        <div className="m-5 hover:scale-105 max-w-md mx-auto bg-[#2a2b2c] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <a className="" id={`p${ide}`} href={href} target="_blank">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="w-full object-cover md:h-full md:w-48" src={img} alt="Thumbnail" />
                        </div>
                        <div className="p-4">
                            <div className="uppercase tracking-wide text-2xl text-white font-semibold">{title}</div>
                            <p className="mt-2 text-slate-300"> {">"} {children}</p>
                        </div>
                    </div>
                </a>
        </div>
    )
}