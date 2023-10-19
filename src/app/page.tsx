import Image from 'next/image'
import NavbarLayout from './layout/NavbarLayout'

export default function Home() {
  return (
    <NavbarLayout header={'front-end ? back-end'} subheader={<p>Learn something new</p>}>
      <section className="flex mx-5 justify-center text-center flex-col">
        <p className="text-xl leading-5">

            I am a student of <span className="text-[#EEA00C]">Politeknik Elektronika Negeri Surabaya</span>. I am student in Informatics Engineering
        </p>
        <div className="text-2xl mt-2 font-semibold text-[#988E88]">
            <span className="text-white font-normal">{">"} </span><a href="/about">About Me.</a>
        </div>
      </section>
      <section className="text-xl grid place-content-center grid-col lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10 lg:px-20 sm:px-10 gap-5">
        <div className="bg-[#212124] rounded p-1 m-5">
            <div className="bg-[#3a3b3c] m-1 px-1 rounded">
                pens lupis
            </div>
            <div  className="bg-[#3a3b3c] m-1 rounded ">
                <img src="img/thumbnail3.png" className="object-fill h-auto w-auto rounded"/>
            </div>
            <div className="px-1 text-lg leading-4">
                <p> {">"} Learning Management System (LMS) project for final exam project </p>
            </div>
            <div className="text-lg flex px-1 my-1 justify-between">
                    <div className="flex gap-1 overflow-hidden">
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Html</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Css</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Php</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">mySql</div>
                </div>
                <div className="flex text-gray-950 ">
                        <div className="bg-white rounded h-5 leading-3">
                        <p className=" rounded p-1"><a href="/labs/#p3"> ► GitHub</a></p>
                        </div>
                </div>  
            </div>
            
        </div>
        <div className="bg-[#212124] rounded p-1 m-5">
            <div className="bg-[#3a3b3c] m-1 px-1 rounded">
              Project OOP GUI JAVA. JFRAME
            </div>
            <div  className="bg-[#3a3b3c] m-1 rounded ">
                <img src="img/thumbnail4.png" className="object-fill h-auto w-auto rounded"/>
            </div>
            <div className="px-1 text-lg leading-4">
                <p> {">"} Project OOP GUI JAVA. Menggunakan Object Oriented Programming dan JFrame</p>
            </div>
            <div className="text-lg flex px-1 my-1 justify-between">
                    <div className="flex gap-1 overflow-hidden">
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Java</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">OOP</div>
                </div>
                <div className="flex text-gray-950 ">
                        <div className="bg-white rounded h-5 leading-3">
                        <p className=" rounded p-1"><a href="/labs/#p9"> ► Github</a></p>
                        </div>
                </div>  
            </div>
            
        </div>
        <div className="bg-[#212124] rounded p-1 m-5">
            <div className="bg-[#3a3b3c] m-1 px-1 rounded">
                my Panti
            </div>
            <div  className="bg-[#3a3b3c] m-1 rounded ">
                <img src="img/thumbnail2.png" className="object-fill h-auto w-auto rounded"/>
            </div>
            <div className="px-1 text-lg leading-4">
                <p> {">"} Team project making website for My Panti.</p>
            </div>
            <div className="text-lg flex px-1 my-1 justify-between">
                    <div className="flex gap-1 overflow-hidden">
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Html</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Css</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">Php</div>
                    <div className="shadow-white bg-gray-950 h-5 leading-3 rounded p-1">mySql</div>
                </div>
                <div className="flex text-gray-950 ">
                        <div className="bg-white rounded h-5 leading-3">
                        <p className=" rounded p-1"><a href="/labs/#p2"> ► GitHub</a></p>
                        </div>
                </div>  
            </div>
            
        </div>
        
    </section>
    </NavbarLayout>
  )
}
