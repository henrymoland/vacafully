import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Home({ testimonialData, popularDestinationData }) {
  return (
    <div className="">
      <Head>
        <title>Vacafully</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Testimonials */}
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-2">
            What guests are saying about homes in United States
          </h2>
          <p className="text-gray-500 text-lg">
            Over <span className="font-bold">65,500,000 guest reviews</span>{" "}
            with an average of{" "}
            <span className="font-bold">4.8 out of 5 stars</span>
          </p>

          <div className="md:flex justify-between">
            {testimonialData?.map(
              ({ image, testimonial, guest, name, location }) => (
                <TestimonialCard
                  key={image}
                  img={image}
                  testimonial={testimonial}
                  guestImg={guest}
                  guestName={name}
                  guestLocation={location}
                />
              )
            )}
          </div>
        </section>

        {/* Popular Destinations */}
        <section>
          <h2 className="text-3xl font-semibold mt-8 py-8">
            Explore Popular Destinations
          </h2>

          <div className="flex space-x-5 overflow-scroll scrollbar-hide mb-4">
            {popularDestinationData?.map(({ image, title }) => (
              <MediumCard key={image} img={image} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://i.ibb.co/zZXy4h5/2da67c1c-0c61-4629-8798-1d4de1ac9291.webp"
          title="The Greatest Outdoors"
          description="Wishlist curated by Vacafully."
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const testimonialData = await fetch("https://jsonkeeper.com/b/46TW").then(
    (res) => res.json()
  );

  const popularDestinationData = await fetch(
    "https://jsonkeeper.com/b/KUKU"
  ).then((res) => res.json());

  return {
    props: {
      testimonialData,
      popularDestinationData,
    },
  };
}
