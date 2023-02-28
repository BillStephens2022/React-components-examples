import Button from "../components/Button";
import { GoBell, GoBeaker, GoCloudDownload, GoDatabase, GoJersey } from 'react-icons/go';

function ButtonPage() {

  const handleClick = () => {
    console.log('CLICK!');
  };

  return (
    <div>
      <div>
        <Button className="mb-5"onClick={handleClick} primary><GoBell />Click Me!</Button>
      </div>
      <div>
        <Button onClick={handleClick} secondary><GoBeaker />Buy Now!</Button>
      </div>
      <div>
        <Button onClick={handleClick} success><GoCloudDownload />See Deal!</Button>
      </div>
      <div>
        <Button onClick={handleClick} warning><GoDatabase />Hide Adds!</Button>
      </div>
      <div>
        <Button onClick={handleClick} danger><GoJersey />Go Back!</Button>
      </div>
      <div>
        <Button onClick={handleClick} primary outline >Click Me!</Button>
      </div>
      <div>
        <Button onClick={handleClick} secondary outline>Buy Now!</Button>
      </div>
      <div>
        <Button onClick={handleClick} success outline>See Deal!</Button>
      </div>
      <div>
        <Button onClick={handleClick} warning outline>Hide Adds!</Button>
      </div>
      <div>
        <Button onClick={handleClick} danger outline>Go Back!</Button>
      </div>
      <div>
        <Button onClick={handleClick} primary rounded>Click Me!</Button>
      </div>
      <div>
        <Button onClick={handleClick} secondary rounded>Buy Now!</Button>
      </div>
      <div>
        <Button onClick={handleClick} success rounded>See Deal!</Button>
      </div>
      <div>
        <Button onClick={handleClick} warning rounded>Hide Adds!</Button>
      </div>
      <div>
        <Button onClick={handleClick} danger rounded>Go Back!</Button>
      </div>
      <div>
        <Button onClick={handleClick} outline rounded primary>Click Me!</Button>
      </div>
      <div>
        <Button onClick={handleClick} outline rounded secondary>Buy Now!</Button>
      </div>
      <div>
        <Button onClick={handleClick} rounded outline success>See Deal!</Button>
      </div>
      <div>
        <Button onClick={handleClick} outline rounded warning>Hide Adds!!</Button>
      </div>
      <div>
        <Button onClick={handleClick} outline rounded danger>Go Back!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;