import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p>
        I’m Imal Chanaka, a web developer
        and coding.Enthusiastic software engineer with hands-on experience in Java, JavaScript and MERN stack Framework.
 Quick learner and effective team player, with a commitment to advancing technical skills in software
 engineering. Seeking to contribute and grow as an Intern Software Engineer in a dynamic environment.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 mt-10 text-lg transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
