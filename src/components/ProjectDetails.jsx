import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectDetails = ({indx, param, newDetails}) => {

  const params = useParams(); 

  return (
    <div className="w-full flex items-start flex-col md:flex-row justify-between">
      {/* CONTENT IMAGE DIV */}
      <div className="w-full md:w-[60%] max-h-[494px] aspect-[1.4] flex rounded-[12px] overflow-hidden">
        <img
          src={newDetails ? newDetails.image : ""}
          alt={newDetails ? newDetails.name : ""}
        />
      </div>

      {/* CONTENT DIV */}
      <div className="w-full md:w-[38%] mt-6 md:mt-0 max-h-[494px] scroll flex flex-col items-start font-poppins bg-[#ffffff14] rounded-[12px] backdrop:blur-[50px] px-6 py-8">
        <h2 className="text-[46px] md:text-[52px] text-[#5bffe7]">{indx + 1 > 9 ? "" : 0 }{indx + 1 }</h2>
        <h4 className="text-[24px] md:text-[34px] text-white font-[400]">{newDetails.name}</h4>
        <p className="text-xs md:text-sm leading-5 md:leading-7 tracking-wide mt-2">
          {newDetails.description}
        </p>

        {/* BUTTONS  */}
        <div className="w-full flex items-center gap-2 mt-8">
          {newDetails.source_code_link !== "" && (
            <a
              href={newDetails.source_code_link}
              target="blank"
              className="px-5 border border-[#5bffe770] text-sm 2xl:text-base py-[6px] bg-[#5bffe720] hover:bg-[#5bffe730] transition duration-200 rounded-[100px]"
            >
              GitHub
            </a>
          )}
          {newDetails.live_link !== "" && (
            <a
              href={newDetails.live_link}
              target="blank"
              className="px-8 border border-[#ff25be70] text-sm 2xl:text-base py-[6px] bg-[#ff25be20] hover:bg-[#ff25be30] transition duration-200 rounded-[100px]"
            >
              Site
            </a>
          )}
        </div>

        <p className="w-full flex items-center gap-2 mt-20 text-sm font-[300] tracking-wide">
          Tech used:
        </p>
        <hr className="mb-[6px] border-none h-[1px] w-[80px] grad-line " />
        {/* TAGS  */}
        <div className="w-full flex items-center flex-wrap gap-2 ">
          {newDetails.tags ? (
            newDetails.tags.map((item, index) => (
              <button
                key={index}
                className="px-5 text-[10px] font-[300] tracking-wide py-[6px] bg-[#5bffe720] hover:bg-[#5bffe730] transition duration-200 rounded-[100px]"
              >
                {item.name}
              </button>
            ))
          ) : (
            <p>There are no tags yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;