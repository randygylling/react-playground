import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Character from './Character'

const CHARACTERS = gql`
query {
  characters(filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
}
`;


export default function Characters() {
    const { loading, error, data } = useQuery(CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.characters.results.map(({ name }, i) => (
        <Character name={name} key={name + i} />
    ));
}
