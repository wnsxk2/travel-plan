import Filter from './Filter';

const filters = [
  { key: 'all', text: '전체' },
  {
    key: 'domestic',
    text: '국내',
  },
  {
    key: 'international',
    text: '국외',
  },
] as const;

type Filter = (typeof filters)[number]['key'];

interface Props {
  active: Filter;
  onChange: (value: Filter) => void;
}

export default function FilterList({ active, onChange }: Props) {
  return (
    <div className='flex justify-center gap-x-25'>
      {filters.map((filter) => (
        <Filter
          key={filter.key}
          active={active === filter.key}
          onClick={() => onChange(filter.key)}
        >
          {filter.text}
        </Filter>
      ))}
    </div>
  );
}
