import React, { Component, Fragment } from 'react';

import Menu from './menu/index';
import Player from './playbar/index';
import Comment from './comment/index';
import musicList from './data/music.json';
import { MusicWrapper } from './style.js';

interface MusicPlayState {
  music: Music,
  musicList: MusicCategory[]
}

export default class MusicPlay extends Component<any, MusicPlayState> {
  state = {
    music: {
      id: [0, 0],
      name: '选择歌曲播放吧',
      src: ''
    },
    musicList
  }
  constructor(arg: any) {
    super(arg);
    this.handleChangeMusic = this.handleChangeMusic.bind(this);
  }
  handleChangeMusic(music: Music) {
    this.setState({ music });
  }
  render() {
    return (
      <Fragment>
        <MusicWrapper>
          <Menu list={this.state.musicList} music={this.state.music} onClickMusic={this.handleChangeMusic}></Menu>
          <Comment></Comment>
        </MusicWrapper>
        <Player list={this.state.musicList} music={this.state.music} onClickMusic={this.handleChangeMusic}></Player>
      </Fragment>
    );
  }
}
