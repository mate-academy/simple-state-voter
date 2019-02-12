class Message {
  constructor(element, { title = 'No title', text = '' }) {
    this._element = element;

    this._props = { title, text };
    this._state = {
      isSelected: false,
    };

    setInterval(() => {
      const { isSelected } = this._state;

      this._setState({ isSelected: !isSelected })
    }, 3000);
  }

  _setState(newState) {
    this._state = {
      ...this._state,
      ...newState,
    };

    this._render();
  }

  setProps(newProps) {
    this._props = {
      ...this._props,
      ...newProps,
    };

    this._render();
  }

  _render() {
    const { title, text } = this._props;
    const { isSelected } = this._state;

    this._element.innerHTML = `
      <h3 ${ isSelected ? 'class="selected"' : '' }>
        ${ title }
      </h3>
      <p>${ text }</p>
    `;
  }
}
