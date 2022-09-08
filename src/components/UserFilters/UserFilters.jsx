import { FiPlus } from 'react-icons/fi';

import { AvailabilityFilters } from './AvailabilityFilters';
import { SearchInput } from './SearchInput';
import { SkilsFilters } from './SkilsFilters';

export const UserFilters = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters />
        <SkilsFilters />
        <button type="button" class="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button>
      </div>

      <SearchInput />
    </>
  );
};
