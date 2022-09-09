import { FiPlus } from 'react-icons/fi';

import { AvailabilityFilters } from './AvailabilityFilters';
import { SearchInput } from './SearchInput';
import { SkilsFilters } from './SkilsFilters';

export const UserFilters = ({ filters, onChangeSkils, onChangeSearch, onResetSearch, onChangeAvailability }) => {
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters value={filters.isAvailable} onChangeAvailability={onChangeAvailability} />

        <SkilsFilters value={filters.skils} onChangeSkils={onChangeSkils} />

        <button type="button" className="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button>
      </div>

      <SearchInput value={filters.search} onResetSearch={onResetSearch} onChangeSearch={onChangeSearch} />
    </>
  );
};
