import { JobList } from "../jobList";

export function Jobs() {
  return (
    <div>
      <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center mt-10 md:text-2xl">
        HISTÓRICO PROFISSIONAL
      </h2>
      <JobList
        office="Freelances"
        start="abril de 2022"
        end="Presente"
        description="Os freelances começam a serem feitos no começo de abril e continuou ate hoje em dia. Eles ajudaram a colocar estudos em prática e melhorar as habilidades cada vez mais"
        number={1}
      />
      <JobList
        office="Front End na M2 Software"
        start="Maio 2023"
        end="Presente"
        description="Minha função é desenvolver sites modernos e funcionais. Atuo como Front-end web utilizando tecnologias como Next, Tailwind, firebase,Styled Components e entre outras tecnologias mais mordernas."
        number={2}
      />
    </div>
  );
}
