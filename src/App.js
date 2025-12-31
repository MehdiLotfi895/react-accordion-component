import { useState } from 'react';
import './App.css';
import Section from "./Section.js"
function App() {
  const [state,setState]=useState(['unClick','unClick','unClick'])
  const answers=["leorm ipsum dolor sit amet consectetur,adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae ,explicabo natus.",
    "Excepturi velit laborum,perspociatis nemo perferendis reiciendis aliquam possimus dolor sed!Dolore laborum ducimus veritatis facere molestias!"
  ]
  return (
    <div className="main">
      <Section number="01" q="Where are thse chairs assembled?" answer={answers[0]} id={0} state={state} setState={setState}/>
      <Section number="02" q="How long do I have to return my chair?" answer={answers[1]} id={1} state={state} setState={setState}/>
      <Section number="03" q="Do you ship to countries outside the EU?" answer={answers[2]} id={2} state={state} setState={setState}/>
    </div>
  );
}

export default App;

