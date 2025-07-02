/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About QuickCart</h1>

      <p className="text-lg mb-4 text-gray-700">
        QuickCart is a fast, reliable, and user-friendly e-commerce platform that brings you a seamless shopping experience at your fingertips.
      </p>

      <p className="text-lg mb-6 text-gray-700">
        Founded in 2025, our mission is to make online shopping easy, secure, and accessible for everyone — whether you're shopping from a big city or a small village.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h2>
        <p className="text-gray-700">
          To empower customers by delivering high-quality products quickly and affordably, while providing excellent customer support and seamless technology.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Vision</h2>
        <p className="text-gray-700">
          To become Nepal’s most trusted and innovative e-commerce platform, connecting local businesses and customers through technology.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose QuickCart?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Lightning-fast delivery across Nepal 🇳🇵</li>
          <li>Simple and secure checkout process 🔐</li>
          <li>24/7 customer support 🤝</li>
          <li>Wide range of products — from electronics to groceries 🛒</li>
          <li>Support for local sellers and small businesses 🏪</li>
        </ul>
      </div>
    </div>
  );
}
