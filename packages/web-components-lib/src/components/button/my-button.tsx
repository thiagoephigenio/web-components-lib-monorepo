import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  shadow: true,
})
export class MyButton {

  @Prop() variant: string;

  render() {
    return <button style={{
      background: `${this.variant === 'primary'? 'red': 'blue'}`
    }}><slot></slot></button>;
  }
}