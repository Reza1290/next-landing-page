import NavbarLayout from "../layout/NavbarLayout";
import { promises as fs } from "fs";


export default async function IndexAbout() {
    const file = await fs.readFile(process.cwd() + '/src/app/data/CertificateData.json','utf-8')
    const data = JSON.parse(file)

    return(
        <NavbarLayout header={"About Me"} subheader={"Like To Try Something New"}>
    <section className="flex mx-5 justify-center text-center flex-col">
        <p className="text-xl leading-5">

            I am a student of <span className="text-[#EEA00C]">Politeknik Elektronika Negeri Surabaya</span>. I am student in Informatics Engineering
        </p>
        <p className="text-xl leading-5">
            My Name is Muhamad Reza Muktasib ( Reza ). 3rd semester student at Politeknik Elektronika Negeri Surabaya
        </p> 

        <div className="flex justify-center">
            <h5 className="text-2xl mt-4 bg-white text-gray-950 px-1 rounded">
                <a href="https://www.linkedin.com/in/m-rezamuktasib/">► Connect On LinkedIn 
                </a>
            </h5>
        </div>
    </section>
    
    <section className="grid lg:grid-cols-8 md:grid-cols-6 place-content-center sm:grid-cols-1 mt-20">
       
       <div className="lg:col-start-3 md:col-start-2 lg:col-span-4 md:col-span-4 m-1 ">
           
            <div className="bg-[#3a3b3c] p-1 rounded my-5">
                <div>
                <h1 className="text-2xl">&quot;Technical Skills&quot; : {"{"}</h1>
                </div>
                <div className="bg-gray-900 rounded px-1 text-xl">
                    <span>&quot;Languages&quot; : [&quot;C&quot;,&quot;Cpp&quot;,&quot;Python&quot;,</span><span>&quot;JavaScript&quot;,&quot;HtmlCss&quot;,&quot;Php&quot;,&quot;Java&quot;],</span>
                    <p>&quot;Frameworks&quot; : [&quot;Laravel&quot;,&quot;Vuejs&quot;,&quot;ReactJs&quot;,&quot;Next.js&quot;],</p>
                    <p>&quot;Databases&quot; : [&quot;MySql&quot;,&quot;Firebase&quot;,&quot;PostgreSql&quot;],</p>
                    <p>&quot;relevantSkills&quot; : [&quot;Scrum&quot;,&quot;Ui Design&quot;,&quot;ARM&quot;,&quot;Ci/Cd&quot;]</p>
                </div>
                <div>
                    <h1 className="text-2xl">{"}"},</h1>
                </div>
            </div>
            
            <div className="bg-[#3a3b3c] p-1 rounded my-5">
                <div>
                    <h1 className="text-2xl">&quot;Certificate&quot; : [</h1>
                </div>
                <div className="bg-gray-900 rounded px-1 text-xl">
                    {data.data.map((item:any,index:any)=>(
                        <div key={index}>
                        <p>{"{"}</p>
                        <p>&quot;Title&quot; : &quot;{item.Title}&quot;,</p>
                        <p>&quot;Issuing Organization&quot; : &quot;{item.Organisasi}&quot;,</p>
                        <p>&quot;Date&quot; : &quot;{item.Date}&quot;</p>
                        <p>{"}"}{ data.data.length-1 === index ? '' : ','}</p>
                        </div>
                    ))}
                    
                   
                </div>
                <div>
                    <h1 className="text-2xl">]</h1>
                </div>
            </div>
            <div className="bg-[#3a3b3c] p-1 rounded my-5">
                <div>
                <h1 className="text-2xl">&quot;Education&quot; : [</h1>
                </div>
                <div className="bg-gray-900 rounded px-1 text-xl">
                    <p>{"{"} </p>
                    <p>&quot;Institution&quot; : &quot;Politeknik Elektronika Negeri Surabaya&quot;,</p>
                    <p>&quot;fieldOfStudy&quot; : &quot;Diploma&quot;,</p>
                    <p>&quot;other&quot; : &quot;last GPA 3.92&quot;</p>
                    <p>{"}"},</p>
                    <p>{"{"} </p>
                    <p>&quot;Institution&quot; : &quot;SMA Negeri 8 Surabaya&quot;,</p>
                    <p>&quot;fieldOfStudy&quot; : &quot;SCIENCE (MIPA)&quot;,</p>
                    <p>&quot;other&quot; : &quot;GPA 85.0&quot;</p>
                </div>
                <div>
                    <h1 className="text-2xl">],</h1>
                </div>
            </div>
        </div>
        
    </section>
        </NavbarLayout>
    )
}