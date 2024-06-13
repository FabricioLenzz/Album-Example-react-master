const EnvironmentSite = () => {
  return (
    <div className="bg-green-200 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
              Name:
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
              Email:
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
            <label htmlFor="Tópicos de interresse" className="block text-gray-400 font-bold mb-2">
            Tópicos de interresse
            </label>
            <textarea
            type="text"
              id="Tópicos de interresse"
              name="Tópicos de interresse"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your interesse"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-green-500 px-6 py-2 text-lg font-medium uppercase text-black"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnvironmentSite;