import React from "react";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <header
        className="border-b flex w-full p-6 cursor-pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <h1 className="flex-1">{title}</h1>
        <p className="text-3xl font-bold">{isOpen ? "-" : "+"}</p>
      </header>

      {isOpen && <p className="border-b flex w-full p-6">{content}</p>}
    </section>
  );
};

export default Accordion;
