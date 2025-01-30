import { accordionData } from "./utils/content";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div className="flex gap-10 flex-col items-center justify-center h-screen">
      <h1 className="text-center text-3xl border-b-4 border-blue-500 font-extrabold">Accordions</h1>
      <div className="w-[600px] bg-[#222] text-white">
        {accordionData.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
