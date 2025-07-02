/* eslint-disable react/no-unescaped-entities */
export default function ContactPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-6">
        Have a question, suggestion, or need support? We're here to help you. Fill out the form below or reach us directly.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Other ways to reach us:</h2>
        <ul className="space-y-2">
          <li><strong>Email:</strong> razeshjha0@gmail.com</li>
          <li><strong>Phone:</strong> +977-9807669785</li>
          <li><strong>Address:</strong> Kathmandu, Nepal</li>
        </ul>
      </div>
    </div>
  );
}
