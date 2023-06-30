import { motion } from 'framer-motion';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({exp}) => {
  return (
    <VerticalTimelineElement
      style={{
        border: "none"
      }}
      className='no-after-before'
      contentStyle={{
        background: "none",
        color: "#fff",
        padding: 0,
        position: "relative",
        border: "none",
        borderRadius: 12,
        borderBottomWidth: 0
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={exp.date}
      iconStyle={{ background: exp.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={exp.icon}
            alt={exp.company_name}
            className="w-[60%] h-[60%]"
            object-contain
          />
        </div>
      }
    >
      <div className="w-full h-full relative overflow-hidden z-0 p-[1px] rounded-[12px]">

        <div className='w-full bg-[#1d1836] h-full z-[2] p-[20px] rounded-[11px]'>
          <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
          <p className="text-secondary text-sm font-semibold">
            {exp.company_name}
          </p>
        </div>

        <div className='absolute w-[600px] h-[600px] bg-3grad -z-[1] roll' ></div>
      </div>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <div className='mt-[7rem]' >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col' >
        <VerticalTimeline>
          {experiences.map((item, idx) => (
            <ExperienceCard exp={item} key={idx} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;