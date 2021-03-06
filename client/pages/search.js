import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location } = router.query;

  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for {location} </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button-white">Cancellation Flexibility</p>
            <p className="button-white">Type of Place</p>
            <p className="button-white">Price</p>
            <p className="button-white">Rooms and Beds</p>
            <p className="button-white">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({
                photo,
                propertyName,
                guests,
                beds,
                bath,
                location,
                description,
                price,
                total,
              }) => (
                <InfoCard
                  key={photo}
                  img={photo}
                  title={propertyName}
                  guests={guests}
                  beds={beds}
                  bath={bath}
                  location={location}
                  description={description}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        {/* MAP */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/W8AV").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
