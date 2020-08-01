import React from 'react';
import Header from './components/Header/Header';
import Piano from './components/Piano/Piano';
import styled from 'styled-components';

function App() {
  const Container = styled.div`
    height:100vh;
    margin:0;
  `
  return (
    <Container>
      <Header/>
      <Piano/>
    </Container>
  );
}

export default App;
