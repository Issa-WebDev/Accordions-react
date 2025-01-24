import React from "react";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <header
        className="border-b flex w-full p-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="flex-1">{title}</h1>
        <p className="text-lg font-bold">{isOpen ? "-" : "+"}</p>
      </header>

      {isOpen && <p className="border-b flex w-full p-3 transition-all duration-500">{content}</p>}
    </section>
  );
};

export default Accordion;
