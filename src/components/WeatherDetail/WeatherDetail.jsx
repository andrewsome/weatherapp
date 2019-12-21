import React, { Component } from 'react';
import data from '../data/data.json';
import styled from 'styled-components';

const DetailPage = styled.div`
  background: blueviolet;
  text-align: center;
`;

export default class WeatherDetail extends Component {
  render() {
    const found = data.find(cityName => this.props.name === cityName.name)
    const { name, coord, main } = found;
    const { lon, lat } = coord;
    const { temp } = main;
    return (
      <DetailPage>
        <h1>{ name }'s</h1>
        <h2>Geographic Coordinate is</h2>
        <h2>{ lon }<small> lon</small> { lat }<small> lat</small></h2>
        <h2>Current Temperature</h2>
        <h2>in { name } </h2> 
        <h2>is { temp }&deg;</h2>
        <button onClick={() => this.props.handleReturn()}>Back</button>
      </DetailPage>
    )
  }
}
