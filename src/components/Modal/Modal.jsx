import { useEffect } from 'react';

import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

export const Modal = ({ children, onModalClose }) => {
  useEffect(() => {
    const handleKeyClose = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyClose);

    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [onModalClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop fade show" />
      <div className="modal fade show" style={{ display: 'block' }} onClick={handleBackdropClick}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onModalClose} />
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyClose);
//   }

//   handleKeyClose = event => {
//     if (event.code === 'Escape') {
//       this.props.onModalClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     const { children, onModalClose } = this.props;

//     return ReactDOM.createPortal(
//       <>
//         <div className="modal-backdrop fade show" />

//         <div className="modal fade show" style={{ display: 'block' }} onClick={this.handleBackdropClick}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button type="button" className="btn-close" aria-label="Close" onClick={onModalClose} />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>,
//       modalRoot,
//     );
//   }
// }

Modal.propType = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onModalClose: PropTypes.func.isRequired,
};
