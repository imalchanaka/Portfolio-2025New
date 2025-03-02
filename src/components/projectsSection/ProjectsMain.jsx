import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "HMEM System - MERN Stack.",
    year: "Mar2024",
    align: "right",
    image: "https://www.appletechsoft.com/wp-content/uploads/2020/06/Hospital-Management-System.jpg",
    link: "https://github.com/imalchanaka/HMEMS-frontend",
  },
  {
    name: "Gate Pass Application",
    year: "Sept2023",
    align: "left",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwkt9KSUu_DOAveGcVCTw53YZl43kb2K8Ywip8HYbNK_TiagA7Bg8Gxw-Dumt_saSIDw&usqp=CAU",
    link: "https://github.com/imalchanaka/GatePassMobileApp",
  },
  {
    name: "Flora Ordering System",
    year: "Jan2022",
    align: "right",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fIWWwIZPTAvNxwzxuQ83nj2SfTgy8ab5AA&s",
    link: "https://github.com/imalchanaka/FloraWebSite",
  },
  {
    name: "CRUD NEXT.js Application",
    year: "May2024",
    align: "left",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf101rvA1LktAd3xImpwbtNJOoqOzGwNaj2KGZXpSCpV-ryiyIltHqiGtG5-hJPJ3iykc&usqp=CAU",
    link: "https://github.com/imalchanaka/GYM_MERN",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
