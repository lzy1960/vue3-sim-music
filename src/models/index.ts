import { ResultDTO } from '../types/index';

export interface SearchSuggestDTO extends ResultDTO {
  result: {
    songs: Song[]
  }
}
enum fee {
  // 0: 免费或无版权
  // 1: VIP 歌曲
  // 4: 购买专辑
  // 8: 非会员可免费播放低音质，会员可播放高音质及下载
  FREE = 0,
  VIP = 1,
  PURCHASE = 4,
  TRY = 8
}
export type Song = {
  copyrightId: number
  ar: {
    id: number
    img1v1Url: string
    name: string
  }[]
  artists: {
    id: number
    img1v1Url: string
    name: string
  }[]
  al: {
    picUrl: string
  }
  alia: string[]
  duration: number
  fee: fee
  ftype: number
  id: number
  mark: number
  mvid: number | null
  name: string
  rtype: number
  status: number
}

export interface SearchDefaultDTO extends ResultDTO {
  data: {
    action: number
    alg: string
    bizQueryInfo: string
    gap: number
    realkeyword: string
    searchType: number
    showKeyword: string
    source: null
  }
}

export interface TopPlaylistDTO extends ResultDTO {
  playlists: TopPlaylist[]
}
export type TopPlaylist = {
  coverImgUrl: string
  description: string
  id: number
  name: string
}

export interface SearchSongDTO extends ResultDTO {
  result: {
    hasMore: boolean
    songCount: number
    songs: Song[]
  }
}

export interface SearchUrlDTO extends ResultDTO {
  data: {
    url: string
  }[]
}

export interface getSongDetailDTO extends ResultDTO {
  songs: Song[]
}

export type Lyric = {
  lyric: string
  time: string
  duration: number
}
export interface getLyricDTO extends ResultDTO {
  lrc: {
    lyric: string
  }
}
type TrackIdsType = {
  id: number
}
export type Playlist = {
  id: number
  name: string
  description: string
  tags: string[]
  coverImgUrl: string
  trackIds: TrackIdsType[]
}
export interface getPlaylistDTO extends ResultDTO {
  playlist: Playlist
}

// 播放列表的每一项
export type GlobalPlaylistItem = {
  id: number
  name: string
  author: string
}
