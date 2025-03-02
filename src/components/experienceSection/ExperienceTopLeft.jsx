import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-3xl font-bold text-center uppercase text-orange font-special">
        Since 2022
      </p>
      <div className="flex items-center justify-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="text-6xl font-bold text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Websites" />
      </div>
      <p className="text-center">
        
      </p>
      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
