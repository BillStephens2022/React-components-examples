import { useState } from 'react';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const items = [
    {
      id: 'djfkj2',
      label: 'Can I use React on a Project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: 'adjfkj2',
      label: 'Can I use JavaScript on a Project?',
      content: 'You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.'
    },
    {
      id: 'bdjfkr5',
      label: 'Can I use CSS on a Project?',
      content: 'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.'
    }
  ];

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  const handleClick = () => {
    console.log('CLICK!');
  };

  return (
    <div>
      <ButtonPage onClick={handleClick} />
      <AccordionPage items={items}/>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
