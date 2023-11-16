import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom'
import ImageSlider from "./components/Slider/Slider";

function App() {
  const images = [
    'https://i.pinimg.com/736x/2a/94/9c/2a949c68ab617b2f96875ae10008d861.jpg',
    'https://i.pinimg.com/236x/91/dc/18/91dc187f0d6fef1ffb8f4b6789aaed3f.jpg',
    'https://i.pinimg.com/236x/70/d2/a5/70d2a5bfb09edcb66b7507e1a3e199ec.jpg',
    'https://i.pinimg.com/236x/77/e5/7e/77e57e5a09caf5d188cfbf02502154c6.jpg',
    'https://i.pinimg.com/564x/c1/94/42/c19442aca0a78f09d3c9bfbd9c7d8801.jpg',
    'https://i.pinimg.com/236x/b6/8a/79/b68a797dac99ff9828c08c0adebbcc34.jpg',
    'https://i.pinimg.com/236x/8e/ee/8a/8eee8a15abe32b1316206b4d98413040.jpg',
    // Add more image URLs as needed
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <ImageSlider images={images} />
    </BrowserRouter>
  );
}

export default App;
