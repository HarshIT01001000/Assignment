import ReusableCard from "../HomeCompo/ReusableCard";
import ReusableLayout from "../HomeCompo/ReusableLayout";
import { FaSpotify } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

function Price(){
    return(
        <>
        <div className="mt-10">
        <ReusableLayout
        item1={"Pricing"}
        item2={"Flexible plans for every team"}
        item4={
            <>
            <ReusableCard 
            BoxColor="bg-base-200"
            backColor="lg:h-96"
            item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item2={"Starter Plan"}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>}
            item4={<div className="">
                   <div className=" text-2xl mt-[1rem]">FREE</div>
                   <div className="font-normal text-[0.8rem] space-y-1">
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                   </div>
                   <button className="btn btn-wide mt-5">Wide</button>
            </div>}>
            
            </ReusableCard>
            <ReusableCard 
            BoxColor="bg-base-200"
            backColor="lg:h-96"
            item1={<BsFillAirplaneEnginesFill className="text-2xl text-purple-600"/>}
            item2={"Starter Plan"}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>}
            item4={<div className="">
                   <div className=" text-2xl mt-[1rem]">FREE</div>
                   <div className="font-normal text-[0.8rem] space-y-1">
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                   </div>
                   <button className="btn btn-wide mt-5 bg-purple-700 text-white">Wide</button>
            </div>}>
            
            </ReusableCard>
            <ReusableCard 
            BoxColor="bg-base-200"
            backColor="lg:h-96"
            item1={<HiOutlineMailOpen className="text-2xl text-yellow-600"/>}
            item2={"Starter Plan"}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>}
            item4={<div className="">
                   <div className=" text-2xl mt-[1rem]">FREE</div>
                   <div className="font-normal text-[0.8rem] space-y-1">
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                      <p className=" flex"><MdOutlineVerified className="mt-1 mr-1 text-purple-500"></MdOutlineVerified>Task Management Tools</p>
                   </div>
                   <button className="btn btn-wide mt-5">Wide</button>
            </div>}>
            
            </ReusableCard>
            </>
        }
        ></ReusableLayout> 
        </div>
        </>
    )
}
export default Price