import type { City } from '@/types';
import Card from './Card';

interface Props {
  cities: City[];
}

export default function CityList({ cities }: Props) {
  return (
    <div className='flex flex-wrap justify-between gap-y-28 items-start w-full'>
      {cities.map((city) => (
        <Card
          key={city.code}
          image={city.thumbnail}
          title={city.nameEn.toUpperCase()}
          description={`${city.country.name} ${city.name}`}
        />
      ))}
    </div>
  );
}
