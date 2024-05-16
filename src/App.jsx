import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation';
import SampleSurvey from './components/SampleSurvey';
import SensoryPreferences from './components/SensoryPreferences';
import Report from './components/Report';
import Home from './components/Home';
import Banner from './components/Banner';


const Layout = () => {
	return (
		<>
			<Navigation />
		</>
	);
};

const router = createBrowserRouter([
  {
		element: <Layout />,
		path: "/",
		children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'sample-survey',
        element: <SampleSurvey />
      },
      {
        path: 'sensory-preferences',
        element: <SensoryPreferences />
      },
      {
        path: 'Report',
        element: <Report />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      },
    ]
  }
  ]
);


function App() {
  return (
    <>
      <Banner />
      <RouterProvider router={router} />
      
    </>
  
  );
}

export default App;
