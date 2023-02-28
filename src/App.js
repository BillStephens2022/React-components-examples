import Button from "./components/Button";
import { GoBell, GoBeaker, GoCloudDownload, GoDatabase, GoJersey } from 'react-icons/go';

function App() {

  const handleClick = () => {
    console.log('CLICK!');
  };

  return (
    <div>
      <ButtonPage />
    </div>
  );
}

export default App;
