import Skill from "../../../public/images/subSkills.jpg"
const SubSkills = () => {
  return (
    <div className="relative border-y-2 border-lightGrey ">
      <div className="absolute w-full h-full opacity-50 bg-gradient-to-r from-orange to-cyan"></div>
      <img
        src={Skill}
        alt="subSkills image"
        className=""
      />
    </div>
  );
};

export default SubSkills;
