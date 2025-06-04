import { useState } from 'react';
import CityList from '../../components/home/CityList';
import FilterList from '../../components/home/FilterList';
import type { City } from '../../types';
import SearchInput from '@/components/home/SearchInput';
import NarrowLayout from '@/components/common/NarrowLayout';

export default function Home() {
  //   const { data } = useQuery(/* 국가필터, 검색필터 */);
  const [search, setSearch] = useState('');

  return (
    <NarrowLayout className='flex flex-col items-center my-30'>
      <div className='w-[399px] mb-24'>
        <SearchInput
          value={search}
          onChange={setSearch}
          onCompositionEnd={(value) => console.log(value)}
        />
      </div>
      <div className='mb-21'>
        <FilterList active='all' onChange={() => {}} />
      </div>

      <CityList cities={DUMMY_CITIES} />
    </NarrowLayout>
  );
}

const DUMMY_CITIES: City[] = [
  {
    city: 'seoul',
    name: '서울',
    description: '대한민국의 수도',
    thumbnail: 'https://picsum.photos/200/300?random=1',
  },
  {
    city: 'busan',
    name: '부산',
    description: '대한민국의 제2의 도시',
    thumbnail: 'https://picsum.photos/200/300?random=2',
  },
  {
    city: 'jeju',
    name: '제주',
    description: '한국의 아름다운 섬',
    thumbnail: 'https://picsum.photos/200/300?random=3',
  },
  {
    city: 'incheon',
    name: '인천',
    description: '대한민국의 항구 도시',
    thumbnail: 'https://picsum.photos/200/300?random=4',
  },
];
