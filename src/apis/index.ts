import request from '../utils/request';
// 获取热门歌单
const getTopPlaylist = (query: unknown) => request({
  url: '/top/playlist',
  method: 'get',
  params: query,
})
// 搜索
const searchSong = (query: unknown) => request({
  url: '/search',
  method: 'get',
  params: query,
})
// 默认搜索关键词
const getSearchDefault = (query: unknown) => request({
  url: '/search/default',
  method: 'get',
  params: query,
})
// 搜索建议
const searchSuggest = (query: unknown) => request({
  url: '/search/suggest',
  method: 'get',
  params: query,
})
// 搜索URL
const searchUrl = (query: unknown) => request({
  url: '/song/url',
  method: 'get',
  params: query,
})
// 搜索详情
const getSongDetail = (query: unknown) => request({
  url: '/song/detail',
  method: 'get',
  params: query,
})
// 获取歌词
const getLyric = (query: unknown) => request({
  url: '/lyric',
  method: 'get',
  params: query,
})
// 获取歌词
const getPlaylist = (query: unknown) => request({
  url: '/playlist/detail',
  method: 'get',
  params: query,
})

export default {
  getTopPlaylist,
  searchSong,
  getSearchDefault,
  searchSuggest,
  searchUrl,
  getSongDetail,
  getLyric,
  getPlaylist
}