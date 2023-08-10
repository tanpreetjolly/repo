'use client';

import Badges from '../Badges/Badges';
import CourseCompletion from '../CourseCompletion/CourseCompletion';
import RightCalendar from '../RightCalendar/RightCalendar';

const RightSidebar = () => {
  return (
    <div className="bg-gray-800  flex-col gap-1.5 lg:w-80 fixed right-0 top-0 z-10 h-screen flex pt-20">
      <RightCalendar /> 
      <Badges />
      <CourseCompletion />
    </div>
  );
};

export default RightSidebar;
