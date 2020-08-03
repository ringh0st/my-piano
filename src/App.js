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
    <>
    <Header/>

    <div className="ui container grid">
      <div className="ui row">
      <Container className="column eight wide" >
        <SongList/>
      </Container>
      <Container className="column eight wide" >
        
        <SongDetail/>
      </Container>
      </div>
    </div>
    </>

  );
}

export default App;
