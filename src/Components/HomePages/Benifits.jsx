import ReusableCard from "../HomeCompo/ReusableCard";
import ReusableLayout from "../HomeCompo/ReusableLayout";
import { FaShareAlt } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

function Benefits(){
    return(
        <>
        <ReusableLayout
        item1={<>Benefits</>}
        item2={<>The Smart Choice For Your Team</>}
        item4={<>
            <ReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-purple-800" item1={<FaShareAlt />} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} />
            <ReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-pink-600" item1={<RiApps2Fill />} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} />
            <ReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-yellow-400" item1={<IoSettingsSharp/>} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} />   
        </>}
        ></ReusableLayout>
        </>
    )
}
export default Benefits