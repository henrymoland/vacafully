import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TestimonialCard from "../components/TestimonialCard";

export default function Home({ testimonialData }) {
  return (
    <div className="">
      <Head>
        <title>Vacafully</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">
            What guests are saying about homes in United States
          </h2>

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
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const testimonialData = await fetch("https://jsonkeeper.com/b/46TW").then(
    (res) => res.json()
  );

  return {
    props: {
      testimonialData,
    },
  };
}
