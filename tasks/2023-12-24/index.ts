type State = Record<string, string | null>;

abstract class Component {
	style = '';
	state: State = {};

	constructor(state = {}, style = '') {
		this.state = state;
		this.style = style;
	}

	abstract template(): string;

	setState(state: State) {
		this.state = {
			...this.state, 
			...state
		};
  	}

	render(): string {
		return this.template();
	}
}

function renderComponent(component: Component): string {
	return component.render();
}

export { Component, renderComponent };
