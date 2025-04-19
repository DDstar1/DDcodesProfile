import React from "react";

function WhyChooseUs() {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why You Should Pick Us to Buy Your Perfume
        </h2>
        <p className="text-lg mb-8">
          Discover the perfect scent with us. Here’s why our customers love
          shopping for perfumes with us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>
              We offer an extensive range of perfumes from top brands to niche
              fragrances.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p>
              Our knowledgeable staff are here to help you find your ideal
              scent.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Competitive Prices</h3>
            <p>
              Enjoy great prices and exclusive offers on your favorite
              fragrances.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p>
              If youre not satisfied, our hassle-free return policy has you
              covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { WhyChooseUs };
