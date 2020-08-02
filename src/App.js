import React from 'react';
import Header from './components/Header/Header';
import SongList from './components/SongList/SongList';
import SongDetail from './components/SongDetail/SongDetail';
import styled from 'styled-components'; //default export
import {selectSong} from './actions'; //name export

function App() {
  const Container = styled.div`
    height:100vh;
    margin:0;
  `
  return (
    <Container>
      <Header/>
      <SongList/>
      <SongDetail/>
    </Container>
  );
}

export default App;
