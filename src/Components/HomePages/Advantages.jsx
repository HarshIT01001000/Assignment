import ReusableCard from "../HomeCompo/ReusableCard";
import ReusableLayout from "../HomeCompo/ReusableLayout";
import { FaLongArrowAltRight } from "react-icons/fa";


function Advantages(){
    return(
        <>
        <div className="  md:mt-[-18rem]">
        <ReusableLayout
        item1={<>Advantages</>}
        item2={<>Key Feature To Boots Your Productivity</>}
        item4={<>
            <ReusableCard 
              bgColor="bg-orange-100" 
              BoxColor="bg-white" 
              IconColor="" item1={"01"} 
              item2={<>To-Do-List</>} 
              item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} 
              item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} 
              />
            <ReusableCard 
              bgColor="bg-yellow-50" 
              BoxColor="bg-white" 
              IconColor="" 
              item1={"02"} 
              item2={<>Semless Collabration</>} 
              item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} 
              item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} 
              />
            <ReusableCard 
              bgColor="bg-purple-100"
              BoxColor="bg-white" 
              IconColor="" 
              item1={"03"} 
              item2={<>Semless Collabration</>} 
              item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} 
              item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} 
              />   
        </>}
        ></ReusableLayout>
        </div>
        </>
    )
}
export default Advantages