import { defineStore } from "pinia";
import { Lyric, GlobalPlaylistItem } from '../models/index';

export const useStore = defineStore('main', {
  state: () => {
    return {
      isGlobalShow: false,
      isPlaying: false,
      isLogin: false,
      // 以下是audio相关
      curSongId: 0,
      curSongTitle: '',
      curSongAuthor: '',
      curSongUrl: '',
      curSongPicUrl: '',
      changeTime: 0, // 指定的位置
      curTime: 0, // 当前位置
      totalTime: 0, // 总时长
      volume: 0.1,
      muted: false,
      lyric: [{
        lyric: '',
        time: '',
        duration: 0
      }],
      rotateAngle: 0,

      // 播放列表
      playlist: [] as GlobalPlaylistItem[],
      curPlaylistIndex: 0
    }
  },
  getters: {

  },
  actions: {
    setSongId (curSongId: number) {
      this.curSongId = curSongId
    },
    setIsPlaying (isPlaying: boolean) {
      this.isPlaying = isPlaying
    },
    setChangeTime (changeTime: number) {
      this.changeTime = changeTime
    },
    setTotalTime (totalTime: number) {
      this.totalTime = totalTime
    },
    setCurTime (curTime: number) {
      this.curTime = curTime
    },
    setSongUrl (songUrl: string) {
      this.curSongUrl = songUrl
    },
    setVolume (volume: number) {
      this.volume = volume
    },
    setLyric (lyric: Lyric[]) {
      this.lyric = lyric
    },
    setMuted (muted: boolean) {
      this.muted = muted
    },
    // 传入一个项
    setPlaylist (playlistItem: GlobalPlaylistItem) {
      // 先找列表里有没有这个id，没有的话添加
      const findIndex = this.playlist.findIndex(item => item.id === playlistItem.id)
      if (!~findIndex) {
        this.curPlaylistIndex = this.playlist.length
        this.playlist.push(playlistItem)
      }
    },
    previousSong () {
      this.curPlaylistIndex--
      this.setSongId(this.playlist[this.curPlaylistIndex].id)
    },
    nextSong () {
      this.curPlaylistIndex++
      this.setSongId(this.playlist[this.curPlaylistIndex].id)
    }
  }
})