import React, { Component } from 'react';
import { 
	MenuWrapper,
	Menu,
	MenuCover,
	MenuText,
	MusicWrapper,
	MusicContent,
	ReturnBtn,
	MusicItem
} from './style.js';

interface MenuProps {
    list: MusicCategory[],
		music: Music,
		onClickMusic: Function
}

interface MenuState {
    category: Number
}

export default class Menus extends Component<MenuProps, MenuState> {
	muneScrollTop: number = 0;
	wrapperElement: any = null;
    state = {
        category: -1,
	}
	hanleMenuClick(category: Number) {
		this.setState({ category });
	}
	handleReturnClick() {
		this.setState({ category: -1 });
	}
	handleScrollMenu(e: any) {
		if (this.state.category !== -1) return;
		this.muneScrollTop = this.wrapperElement.scrollTop;
	}
	componentDidUpdate() {
		if (this.state.category === -1) {
			this.wrapperElement.scrollTop = this.muneScrollTop;
		}
	}
    render() {
		const menu: MusicCategory | undefined = this.props.list.find(item => item.category === this.state.category);
		const [curCateId, curMusicId] = this.props.music.id;
		let contents: any;
		if (menu) {
			contents = menu.musics.map((music, index) => {
				const [cateId, musicId] = music.id;
				return (
					<MusicItem 
						key={musicId} 
						className={cateId === curCateId && musicId === curMusicId ? 'active': ''} 
						onClick={() => { this.props.onClickMusic(music) }}>
							{String(index + 1)+ '. ' + music.name}
					</MusicItem>
				)
			})
			contents = (
				<MusicWrapper>
					<ReturnBtn onClick={this.handleReturnClick.bind(this)} className="iconfont icon-fanhui"></ReturnBtn>
					<MusicContent>{contents}</MusicContent>
				</MusicWrapper>
			)
		} else {
			contents = this.props.list.map(cate => {
				return (
					<Menu onClick={this.hanleMenuClick.bind(this, cate.category)} key={cate.category}>
						<MenuCover src={cate.cover}></MenuCover>
						<MenuText>{cate.name}</MenuText>
					</Menu>
				)
			})
		}
		return <MenuWrapper ref={(el: any) => this.wrapperElement = el} onScroll={this.handleScrollMenu.bind(this)}>{contents}</MenuWrapper>
    }
}
