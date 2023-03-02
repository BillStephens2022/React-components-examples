
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: "djfkj2",
      label: "Can I use React on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "adjfkj2",
      label: "Can I use JavaScript on a Project?",
      content:
        "You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
    },
    {
      id: "bdjfkr5",
      label: "Can I use CSS on a Project?",
      content:
        "You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.",
    },
  ];

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default AccordionPage;
