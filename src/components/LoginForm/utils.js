import EventEmitter from 'events';

class LoginEmmiter extends EventEmitter {
  submit = () => {
    this.emit('confetti', true);
  };

  close = () => {
    this.emit('confetti', false);
  };
}

export const login = new LoginEmmiter();
