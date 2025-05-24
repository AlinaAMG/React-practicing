import AccordionItem from './AccordionItem';
import './styles.css';
import { useState } from 'react';

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={index}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={9}
        key="Test 1"
      >
        <p>Allows React Developers to:</p>
        <ul>
          <li>
            
            Break up UI into components <li>Make components reusable</li>
          </li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;
