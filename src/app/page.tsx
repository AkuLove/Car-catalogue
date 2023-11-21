import { CarCard, CustomFilter, Hero, SearchBar } from '@/components/';
import { ICarProps, IFilterProps } from '@/types';
import { fetchCars } from '@/utils';

export default async function Home({ searchParams }: { searchParams: IFilterProps }) {
  const allCars: ICarProps[] = await fetchCars({
    manufacturer: searchParams.manufacturer || 'Volkswagen',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car catalogue</h2>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
        {!isDataEmpty ? (
          <div>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={JSON.stringify(car)} car={car} />
              ))}
            </div>
          </div>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
            {/* <h2>{allCars?.message}</h2> */}
          </div>
        )}
      </div>
    </main>
  );
}
