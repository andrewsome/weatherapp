import React, { Component } from 'react';
import data from '../data/data.json';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: lightblue;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  text-align: center;
  height: 20rem;
  width: 25rem;
  display: flex;
  margin: 1rem auto;
  justify-content: space-evenly;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 .1rem .1rem gray;
    transition: ease 0.3s;
  }
`;

export default class DashBoard extends Component {
  render() {
    return (
      <Wrapper>
      {data.map((data, index) => {
        const { name, coord, main } = data;
        const { lon, lat } = coord;
        const { temp } = main;
          return (
            <Card key={index} onClick={() => this.props.handleClick(name)}>
              <h3>{ name }</h3>
              <p>coordination: { lon } { lat }</p>
              <p>temperature: { temp }&deg;</p>
            </Card>
            )
          })
        }
      </Wrapper>
    )
  }

}
