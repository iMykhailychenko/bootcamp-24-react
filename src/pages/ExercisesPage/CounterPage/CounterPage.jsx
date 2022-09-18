import { useCounter } from './hook';

export const CounterPage = () => {
  const { android, iphone, handleUpdate } = useCounter();

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {android}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        iPhone: {iphone}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button type="button" name="android" className="btn p-3 btn-outline-light w-25 mx-2" onClick={handleUpdate}>
          Android
        </button>
        <button type="button" name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" onClick={handleUpdate}>
          Iphone
        </button>
      </div>
    </div>
  );
};
