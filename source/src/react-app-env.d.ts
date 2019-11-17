/// <reference types="react-scripts" />

interface Music {
    id: number[2],
    name: string,
    src: string
}

interface MusicCategory {
    name: string,
    cover: string,
    category: number,
    musics: Music[]
}

declare module 'valine'