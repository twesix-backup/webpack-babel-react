import React, {Component} from 'react';

export default class HelloComponent extends Component
{
    render()
    {
        return <h1>{ this.props.name }</h1>
    }
}