import type { City } from '../../types';
import Card from './Card';

interface Props {
  cities: City[];
}

export default function CityList({ cities }: Props) {
  return (
    <div className='flex flex-wrap justify-between gap-y-28'>
      {cities.map((city) => (
        <Card
          key={city.city}
          image={city.thumbnail}
          title={city.name}
          description={city.description}
        />
      ))}
    </div>
  );
}
