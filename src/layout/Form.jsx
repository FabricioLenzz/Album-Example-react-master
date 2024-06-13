const EnvironmentSite = () => {
    return (
      <div className="bg-green-200 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Environmental Awareness</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-3xl bg-green-500 px-6 py-2 text-lg font-medium uppercase text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EnvironmentSite;