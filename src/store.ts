import { Converter } from 'showdown';
import striptags from 'striptags';
import Vue from 'vue';
import Vuex from 'vuex';
import { articles } from './data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path2Article: {} as { [path: string]: Article },
  },

  getters: {
    articles: ({ path2Article }) => Object.values(path2Article),
    html: ({ path2Article }) => (path: string) => path2Article[path],
  },

  mutations: {
    setPath2Article(state, path2Article) {
      state.path2Article = path2Article;
    },
  },

  actions: {
    async fetchHtmls({ commit }) {
      const converter = new Converter();
      const tmp = await Promise.all(
        Object.entries(articles).map(async ([date, url]: [string, string]) => {
          const res = await fetch(url, {
            headers: { 'Access-Control-Allow-Origin': '*' },
          });
          const md = await res.text();
          const html = converter.makeHtml(md);
          const titleIndex: number = html.indexOf('</h1>');
          const subtitleIndex: number = html.indexOf('<hr>');
          const title: string = striptags(html.slice(0, titleIndex));
          const path: string = title.replaceAll(' ', '-').toLowerCase();

          return [path, {
            title,
            date,
            html,
            path,
            subtitle: striptags(html.slice(titleIndex + 5, subtitleIndex)),
          }] as [string, Article];
        }),
      );

      const res: { [path: string]: Article } = {};

      tmp.forEach(([path, article]) => { res[path] = article; });

      commit('setPath2Article', res);
    },
  },
});