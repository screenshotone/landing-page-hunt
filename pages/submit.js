import { useState } from "react";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Submit(props) {
  const endpoint = '/api/submit';
  const [landingPage, setLandingPage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: event.target.name.value,
          url: event.target.url.value,
        }),
      })

      setLandingPage(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  const { width, height } = useWindowSize();

  return (
    <div className="mx-auto w-1/2">
      <h3 className="text-xl text-center">{landingPage ? "The page has been submitted successfully 🥳" : "Submit a landing page"}</h3>
      {
        landingPage ? (          
          <div className="mx-auto py-2 max-w-fit">
            <Confetti opacity={0.5} width={width} height={height} run={landingPage != null} />
            <div className="text-2xl text-center py-3">
              <a href={landingPage.url}>{landingPage.name}</a>
            </div>
            <div className="mt-2 shadow-lg">
              <a href={landingPage.url}><img src={landingPage.screenshotUrl} width="460" /></a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} action={endpoint} className="mt-5">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div className="mb-6">
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900">URL</label>
              <input type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div className="text-right">
              <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </div>
          </form>
        )
      }
    </div>
  );
}