import React, { useState } from "react";
import './App.css';
import icon from './icon.png';

const HighlightText = ({ color, children }) => {
  return React.cloneElement(children, {
    style: { color: color }
  });
};

function Icon({ src, children, alt = 'image' }) {
  return React.cloneElement(children,
    { src: src, alt: alt, style: { height: '128px', width: '128px' }, })
}

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isActive: index === activeIndex,
            onToggle: () => togglePanel(index),
          });
        }
        return child;
      })}
    </div>
  );
};

const Panel = ({ title, children, isActive, onToggle }) => {
  return (
    <div className="panel">
      <div className="panel-title" onClick={onToggle}>
        {title}
      </div>
      {isActive && <div className="panel-content">{children}</div>}
    </div>
  );
};



function App() {
  return (
    <div className="App">
      <p>Hi world</p>
      <h3>First task</h3>
      <HighlightText color="red">
        <p>Текст внутри HighlightText color='red'</p>
      </HighlightText>
      <HighlightText color="green">
        <p>Текст внутри HighlightText color='green'</p>
      </HighlightText>
      <Icon src={icon}>
        <img />
      </Icon>
      <h3>Second task</h3>
      <Accordion>
        <Panel title="Panel 1">Content for Panel 1</Panel>
        <Panel title="Panel 2">Content for Panel 2</Panel>
        <Panel title="Panel 3">Content for Panel 3</Panel>
      </Accordion>
    </div>
  );
}

export default App;
