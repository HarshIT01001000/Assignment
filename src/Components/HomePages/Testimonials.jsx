import ReusableCard from "../HomeCompo/ReusableCard"
import ReusableLayout from "../HomeCompo/ReusableLayout"
import { FaSpotify } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";

function Testimonials(){
    return(
        <>
        <ReusableLayout
        item1={"Testimonials"}
        item2={"What our users say"}
        item4={
            <>
            <ReusableCard 
            item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor iure eveniet delectus modi temporibus quo vitae nostrum quam voluptatum voluptate, mollitia, magni non quasi ducimus dolores praesentium porro iste!</div>}
            item4={<div className="">
                   <div>Sara Thompson</div>
                   <div className="font-normal text-[0.8rem]">Product Manager</div>
                   <div className="text-green-700 flex"><FaSpotify className="mt-1 mr-1  text-xl" />Spotify</div>
            </div>}>
            
            </ReusableCard>
            <ReusableCard item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor iure eveniet delectus modi temporibus quo vitae nostrum quam voluptatum voluptate, mollitia, magni non quasi ducimus dolores praesentium porro iste!</div>}
            item4={<div className="">
                   <div>Sara Thompson</div>
                   <div className="font-normal text-[0.8rem]">Product Manager</div>
                   <div className="text-green-700 flex"><FaSpotify className="mt-1 mr-1  text-xl" />Spotify</div>
            </div>}>
            
            </ReusableCard>
            <ReusableCard item1={<RiDoubleQuotesR className="text-3xl text-yellow-600"/>}
            item3={<div className="mt-[-1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor iure eveniet delectus modi temporibus quo vitae nostrum quam voluptatum voluptate, mollitia, magni non quasi ducimus dolores praesentium porro iste!</div>}
            item4={<div className="">
                   <div>Sara Thompson</div>
                   <div className="font-normal text-[0.8rem]">Product Manager</div>
                   <div className="text-green-700 flex"><FaSpotify className="mt-1 mr-1  text-xl" />Spotify</div>
            </div>}>
            
            </ReusableCard>
            </>
        }
        ></ReusableLayout>
        </>
    )
}
export default Testimonials