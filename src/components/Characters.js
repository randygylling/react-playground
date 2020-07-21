import React from 'react';
import { useQuery, gql } from '@apollo/client';

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


function Characters() {
    const { loading, error, data } = useQuery(CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.characters.results.map(({ name }, i) => (
        <div key={name + i}>
            <p>
                {name}
            </p>
        </div>
    ));
}

export default Characters;
