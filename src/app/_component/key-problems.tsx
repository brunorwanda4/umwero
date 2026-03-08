import ProblemCard from "@/components/common/problem-card";

export const problems = [
  {
    id: "plant-diseases",
    title: "Plant Diseases",
    description:
      "Plant diseases and pests are one of the biggest threats to crop production in Africa. For example, fall armyworm infestations have caused maize yield losses ranging from 22% to 67% in some regions and lead to billions of dollars in losses every year.",
    stat: "Up to 67% crop loss from pests in some regions",
    source: "FAO & agricultural research",
    image: "/jpg/problem-7.jpg",
  },
  {
    id: "limited-experts",
    title: "Limited Access to Agricultural Experts",
    description:
      "Many farmers in rural areas do not have easy access to agricultural experts or extension services. Without professional guidance, identifying crop diseases or choosing the right treatments becomes difficult.",
    stat: "Millions of smallholder farmers lack expert support",
    source: "Agricultural development reports",
    image: "/jpg/problem-5.jpg",
  },
  {
    id: "nutrient-knowledge",
    title: "Lack of Nutrient Knowledge",
    description:
      "Healthy crops depend on proper soil nutrients, but many farmers lack tools to analyze soil conditions or understand what nutrients their crops require.",
    stat: "Only about 18% of farmers in Rwanda used improved seeds in some seasons",
    source: "National Institute of Statistics of Rwanda",
    image: "/jpg/problem-8.jpg",
  },
  {
    id: "late-detection",
    title: "Late Detection of Crop Problems",
    description:
      "Without monitoring tools, many farmers only notice plant diseases when visible symptoms appear. By that time, crops may already be severely damaged and yields reduced.",
    stat: "Millions of tons of crops lost annually due to pests and disease",
    source: "Agriculture research reports",
    image: "/jpg/problem-6.jpg",
  },
];

const KeyProblem = () => {
  return (
    <main className="card  p-8  bg-base-200 min-h-96 text-base-content shadow-xl shadow-accent/20 space-y-8">
      <h1 className="h2">Key Problems</h1>
      <div className=" grid grid-cols-2 gap-4">
        {problems.map((problem, index) => (
          <ProblemCard
            key={problem.id}
            image={problem.image}
            title={problem.title}
            description={problem.description}
            index={index + 1}
          />
        ))}
      </div>
    </main>
  );
};

export default KeyProblem;
