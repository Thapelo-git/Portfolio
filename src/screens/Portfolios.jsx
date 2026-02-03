import PortfolioSection from "../component/PortfolioSection";
import { projects } from "../data/projects";

const Portfolios = () => {
  return (
    <main className="w-full">
      {projects.map((project, index) => (
        <PortfolioSection
          key={project.title}
          {...project}
          reverse={index % 2 !== 0}
        />
      ))}
    </main>
  );
};

export default Portfolios;
