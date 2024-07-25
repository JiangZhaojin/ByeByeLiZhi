import React, { Component } from 'react';
import { 
    PlayBarWrapper, 
    ControlBtn, 
    Btn,
    Progress,
    ProgressTitle,
    ProgressBar,
    ProgressTime,
    ProgressContent,
    Voice,
    VoiceIcon,
    VoiceBar,
    VoiceContent
} from './style.js';

interface PlayBarProps {
    list: MusicCategory[],
    music: Music,
    onClickMusic: Function
}

interface PlayBarState {
    isPause: boolean,
    currentTime: number,
    duration: number,
    ratio: string,
    voiceRatio: string
}

export default class PlayBar extends Component<PlayBarProps, PlayBarState> {
  audioElement: HTMLAudioElement | null = null;
  state = {
      isPause: true,
      currentTime: 0,
      duration: 0,
      ratio: this.getRatio(0),
      voiceRatio: this.getRatio(1, 1)
  }
  componentWillReceiveProps(nextProps: PlayBarProps) {
    if (this.props.music !== nextProps.music) {
      this.handleTimeupdate();
    }
  }
  componentDidUpdate() {
      document.title = this.props.music.name || '正在播放...';
  }
  pause() {
      this.audioElement && this.audioElement.pause();
  }
  play() {
      this.audioElement && this.audioElement.play();
  }
  getTimeString(time: number): string {
    const m = ('0' + Math.floor(time / 60)).substring(0, 2);
    const s = ('0' + Math.floor(time % 60)).substring(0, 2);
    return m + ':' + s;
  }
  getRatio(now: number = 0, total: number = 0): string {
    return total === 0 ? '0%' : (now / total) * 100 + '%';
  }
  handlePausePlay() {
      if (!this.audioElement) return;
      if (this.audioElement.readyState === 0) {
        this.props.onClickMusic(this.props.list[0].musics[0]);
      } else {
        this.state.isPause ? this.play() : this.pause();
        this.setState(state => ({ isPause: !state.isPause }));
      }
  }
  handleTimeupdate() {
    if (!this.audioElement) return;
    const { currentTime, duration } = this.audioElement;
    this.setState({
      currentTime: currentTime || 0,
      duration: duration || 0,
      ratio: this.getRatio(currentTime, duration),
    });
  }
  handleAudioPlay() {
    this.setState(state => ({ isPause: false }));
  }
  handlePrevClick() {
    this.jumpMusic(-1);
  }
  handleNextClick() {
    this.jumpMusic(1);
  }
  handleProgressClick(event: any) {
    const ratio = this.getOffsetRatio(event);
    const currentTime = ratio * this.state.duration;
    this.audioElement && (this.audioElement.currentTime = currentTime);
  }
  handleVoiceClick(event: any) {
    const ratio = this.getOffsetRatio(event);
    this.audioElement && (this.audioElement.volume = ratio);
    this.setState({voiceRatio: ratio * 100 + '%'});
  }
  getOffsetRatio(event: any): number {
    const { width, left } = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - left) / width;
    return ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio);
  }
  jumpMusic(offset: number) {
    const [curCateId, curMusicId] = this.props.music.id;
    this.props.list.forEach(cate => {
      if (cate.category === curCateId) {
        const length = cate.musics.length;
        const index = cate.musics.findIndex(music => music.id[1] === curMusicId);
        const nextIndex = (offset % length + length + index) % length;
        this.props.onClickMusic(cate.musics[nextIndex]);
        return;
      }
    });
  }
  render() {
      const playclass = 'iconfont icon-' + (this.state.isPause ? 'bofang' : 'zanting');
      const currentTimeStr = this.getTimeString(this.state.currentTime);
      const durationStr = this.getTimeString(this.state.duration);
      return (
          <PlayBarWrapper>
              <ControlBtn>
                  <Btn className="iconfont icon-shangyishou1" onClick={this.handlePrevClick.bind(this)}></Btn>
                  <Btn className={playclass} onClick={this.handlePausePlay.bind(this)}></Btn>
                  <Btn className="iconfont icon-xiayishou" onClick={this.handleNextClick.bind(this)}></Btn>
              </ControlBtn>
              <Progress>
                <ProgressTitle>{this.props.music.name + (this.state.currentTime > 0 ? '' : '（缓冲较慢，请耐心等候）')}</ProgressTitle>
                <ProgressTime>{currentTimeStr + ' / ' + durationStr}</ProgressTime>
                <ProgressBar onClick={this.handleProgressClick.bind(this)}>
                  <ProgressContent style={{ width: this.state.ratio}}></ProgressContent>
                </ProgressBar>
              </Progress>
              <Voice>
                <VoiceIcon className="iconfont icon-shengyin"></VoiceIcon>
                <VoiceBar onClick={this.handleVoiceClick.bind(this)}>
                  <VoiceContent style={{ width: this.state.voiceRatio }}></VoiceContent>
                </VoiceBar>
              </Voice>
              <audio 
                autoPlay 
                src={this.props.music.src} 
                ref={el => this.audioElement = el}
                onPlay={this.handleAudioPlay.bind(this)}
                onTimeUpdate={this.handleTimeupdate.bind(this)}
                onEnded={this.handleNextClick.bind(this)}></audio>
          </PlayBarWrapper>
      )
  }
}
