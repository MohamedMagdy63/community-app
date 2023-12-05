import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom'
// import Slider from "./components/Slider/Slider";
import MainBox from "./components/MainBox/MainBox";
import Footer from "./components/Footer/Footer";
import { Route ,Routes} from 'react-router-dom';
import Signup from "./Routes/Signup/Signup";
import Login from "./Routes/Login/login";
import DataBox from "./components/DataBox/DataBox";

function App() {
  const serviceOptions = [
    {
      serviceName: 'Service 1',
      description: 'Description for Service 1',
      images: [
        'https://i.pinimg.com/564x/de/c8/68/dec8688655c6f4fa6c076654d546ee53.jpg',
        'https://i.pinimg.com/564x/16/88/1f/16881f87f86e2fc69a04c6d51dcdb366.jpg'
      ],
    },
    {
      serviceName: 'Service 2',
      description: 'Description for Service 2',
      images: [
        'https://i.pinimg.com/564x/41/5b/58/415b5825c4d43d8318603cf75113fefe.jpg',
        'https://i.pinimg.com/564x/21/26/93/2126934b6ec0e3f6dd4cdef0f4ccb941.jpg'
      ],
    },
    {
      serviceName: 'Service 3',
      description: 'Description for Service 2',
      images: [
        'https://i.pinimg.com/564x/41/5b/58/415b5825c4d43d8318603cf75113fefe.jpg',
        'https://i.pinimg.com/564x/21/26/93/2126934b6ec0e3f6dd4cdef0f4ccb941.jpg'
      ],
    },
    // Add more service options as needed
  ];
  // const images = [
  //   'https://i.pinimg.com/564x/de/c8/68/dec8688655c6f4fa6c076654d546ee53.jpg',
  //   'https://i.pinimg.com/564x/16/88/1f/16881f87f86e2fc69a04c6d51dcdb366.jpg',
  //   'https://i.pinimg.com/564x/21/26/93/2126934b6ec0e3f6dd4cdef0f4ccb941.jpg',
  //   'https://i.pinimg.com/564x/41/5b/58/415b5825c4d43d8318603cf75113fefe.jpg',
  //   'https://i.pinimg.com/564x/19/fd/e3/19fde32cf31a592eab72b88c8d0a38c7.jpg',
  //   'https://i.pinimg.com/564x/36/15/79/361579863c5d1041495045fb83a3c0c5.jpg',
  //   'https://i.pinimg.com/564x/6f/e9/7e/6fe97eb77744923b7430b9cb1b878a0e.jpg',
  //   // Add more image URLs as needed
  // ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={serviceOptions.map((service, index) => (
          <MainBox
            key={index}
            serviceName={service.serviceName}
            description={service.description}
            images={service.images}
          />
        ))} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <DataBox/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
