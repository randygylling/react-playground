import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  character(id: 1) {
    id
  }
}
`;


function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data, 'ran twice')
    return data.characters.results.map(({ name }, i) => (
      <div key={name + i}>
        <p>
          {name}
        </p>
      </div>
    ));
}

export default App;
