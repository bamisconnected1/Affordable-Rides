'use client';

import Image from 'next/image';

type Car = {
  id: number;
  name: string;
  image: string;
  priceRange: string;
  engine: string;
  horsepower: string;
  transmission: string;
  fuelEconomy: string;
  highlight: string;
};

const cars: Car[] = [
  {
    id: 1,
    name: '2014 Mazda3 Sedan',
    image: '/cars/mazda-3 2014.jpg',
    priceRange: '$8,000 – $9,800',
    engine: '2.0L 4-Cylinder',
    horsepower: '155 HP',
    transmission: 'Automatic / Manual',
    fuelEconomy: '30–36 MPG',
    highlight: 'Sporty handling with excellent fuel efficiency',
  },
  {
    id: 2,
    name: '2015 Kia Rio',
    image: '/cars/kia-rio-2015.jpg',
    priceRange: 'From $8,900',
    engine: '1.6L 4-Cylinder',
    horsepower: '138 HP',
    transmission: '6-Speed Automatic',
    fuelEconomy: '27–37 MPG',
    highlight: 'Budget-friendly and easy to maintain',
  },
  {
    id: 3,
    name: '2018 Toyota Corolla',
    image: '/cars/toyota-corolla-2018.jpg',
    priceRange: 'From $14,600',
    engine: '1.8L 4-Cylinder',
    horsepower: '132 HP',
    transmission: 'CVT',
    fuelEconomy: '30–32 MPG',
    highlight: 'Trusted reliability with modern safety features',
  },
  {
    id: 4,
    name: '2014 Honda Civic',
    image: '/cars/honda-civic-2014.jpg',
    priceRange: 'From $14,900',
    engine: '1.8L 4-Cylinder',
    horsepower: '143 HP',
    transmission: 'CVT / Manual',
    fuelEconomy: '32–40 MPG',
    highlight: 'Strong resale value and long-term durability',
  },
  {
    id: 5,
    name: '2014 Toyota Camry',
    image: '/cars/toyota-camry-2014.jpg',
    priceRange: 'From $14,700',
    engine: '2.5L 4-Cylinder',
    horsepower: '178 HP',
    transmission: '6-Speed Automatic',
    fuelEconomy: '25–35 MPG',
    highlight: 'Spacious, smooth, and family-friendly',
  },
];

export default function FeaturedCars() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Affordable Vehicles
          </h2>
          <p className="mt-3 text-slate-600">
            Quality vehicles priced for real budgets — available nationwide.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {car.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {car.highlight}
                </p>

                <div className="mt-4 space-y-1 text-sm text-slate-700">
                  <p><strong>Price:</strong> {car.priceRange}</p>
                  <p><strong>Engine:</strong> {car.engine}</p>
                  <p><strong>Horsepower:</strong> {car.horsepower}</p>
                  <p><strong>Transmission:</strong> {car.transmission}</p>
                  <p><strong>Fuel Economy:</strong> {car.fuelEconomy}</p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg border border-amber-500 px-4 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-50">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
