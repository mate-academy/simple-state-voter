import Component from './component.js';

export default class Voter extends Component {
  constructor({ element }) {
    super({ element });

    this._state = {
      value: 0
    };

    this._render();

    this.on('click', 'up', () => this.increase());
    this.on('click', 'down', () => this.decrease());
  }

  increase() {
    const { value } = this._state;

    this.setState({
      value: value + 1
    });
  }

  decrease() {
    const { value } = this._state;

    this.setState({
      value: value - 1
    });
  }

  setState(newState) {
    this._state = {
      ...this._state,
      ...newState,
    };

    this._render();
  }

  _render() {
    const { value } = this._state;

    this._element.innerHTML = `
      <button data-element="down">-</button>
      <span>${ value }</span>
      <button data-element="up">+</button>
    `;
  }
}
