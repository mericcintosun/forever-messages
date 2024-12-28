import Link from "next/link";

const LandingPage = () => {
  const features = [
    {
      title: "Decentralized Storage",
      description: "All messages are stored securely on the blockchain.",
      icon: "🌐",
    },
    {
      title: "No Middlemen",
      description: "Your messages are directly handled via smart contracts.",
      icon: "🔗",
    },
    {
      title: "Full Transparency",
      description: "Anyone can verify the authenticity of messages.",
      icon: "🔍",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full px-6 py-12 bg-slate-50 shadow-md text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
          Wanna Give a Message Forever?
        </h1>
        <p className="text-2xl font-bold text-gray-600 mb-8">
          A secure, decentralized platform to give messages without any
          intermediaries.
        </p>
        <p className="text-lg text-gray-500 mb-2">
          Make sure your messages follow the community guidelines and help us
          maintain the community.
        </p>
        <p className="text-lg text-gray-500 ">
          Be a part of this organization where you leave a message that will
          last forever.
        </p>
        <p className="text-lg text-gray-600 mb-8"></p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          <Link href="/messages">Get Started</Link>
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-16 w-full max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Why We Use Blockchain?
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-24 py-12 bg-blue-600 text-white w-full text-center shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join us today and explore a decentralized way of communication.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          <Link href="/how-to">
            <p className="text-lg font-medium cursor-pointer hover:underline">
              How To?
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
