function ReusableCard({ item1, item2, item3,item4, backColor, BoxColor,Icons }) {
    return (
      <>
        <div className={`card ${backColor} lg:w-80 lg:h-80 shadow-2xl text-left`}>
          <div className="card-body">
            <div className={`w-10 h-10 rounded-md ${BoxColor} flex justify-center items-center text-xl  ${Icons}`}>{item1}</div>
            <div className=" space-y-4 mt-2">
            <h2 className="card-title font-bold ">{item2}</h2>
            <p className=" text-sm">{item3}</p>
            <div className="font-bold">{item4}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ReusableCard;
  