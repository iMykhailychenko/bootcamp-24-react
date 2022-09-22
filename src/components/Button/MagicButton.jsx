import { useRef } from 'react';

import classNames from 'classnames';
import { random } from 'lodash-es';

import css from './MagicButton.module.css';

export const MagicButton = ({
  type = 'button',
  className = 'btn-primary',
  isLoading,
  children,
  disabled,
  ...props
}) => {
  const ref = useRef(null);
  const prev = useRef({ x: 0, y: 0 });

  const handleMouseEnter = event => {
    const x = random(50, 200);
    prev.current.x += Math.random() < 0.5 ? x * -1 : x;

    const y = random(50, 200);
    prev.current.y += Math.random() < 0.7 ? y * -1 : y;

    ref.current.style.transform = `translateY(${prev.current.y}px) translateX(${prev.current.x}px)`;
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      className={classNames('btn', css.btn, className)}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="ms-2">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
