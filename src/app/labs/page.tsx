import LabCard from "../component/LabCard";
import NavbarLayout from "../layout/NavbarLayout";
import { promises as fs } from "fs";


export default async function IndexLabs(){
    const file = await fs.readFile(process.cwd() + '/src/app/data/LabsData.json','utf-8')
    const data = JSON.parse(file)

    return(
        <NavbarLayout header={'Labs'}subheader={<><p>Projects, snippet, and Tutorials</p>for non Projects u can visit here <a className="bg-gray-200 text-gray-800 px-2 rounded-xl hover:bg-gray-700 hover:text-white" href="/snippet"> Snippets </a></>}>
            {data.data.map((item:any, index:any) => (
                <LabCard key={index} ide={index} title={item.title}  img={item.img} href={item.href} >
                    {item.desc}
                </LabCard>
            ))}
            
        </NavbarLayout>
    )
}