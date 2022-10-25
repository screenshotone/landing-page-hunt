export default function Submit(props) {
  const endpoint = '/api/submit';

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

      const landingPage = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto w-1/2">
      <h3 className="text-xl">Submit a landing page</h3>
      <form onSubmit={handleSubmit} action={endpoint} className="mt-5">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div className="mb-6">
          <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900">URL</label>
          <input type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div class="text-right">
          <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
        </div>
      </form>
    </div>
  )
}