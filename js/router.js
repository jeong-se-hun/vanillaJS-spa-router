import { Home, Menu1, Menu2, Menu3, NotFound } from './pages.js';

const $root = document.getElementById('root');
const $nav = document.querySelector('.nav');

const routes = [
  { path: '/', component: Home },
  { path: '/menu1', component: Menu1 },
  { path: '/menu2', component: Menu2 },
  { path: '/menu3', component: Menu3 },
];

const render = path => {
  const _path = path ?? window.location.pathname;

  try {
    const component = routes.find(route => route.path === _path)?.component || NotFound;
    $root.replaceChildren(component());
  } catch (err) {
    console.error(err);
  }
};

$nav.addEventListener('click', e => {
  if (!e.target.matches('.nav > li > a')) return;

  e.preventDefault();

  const path = e.target.getAttribute('href');

  if (window.location.pathname === path) return;

  window.history.pushState(null, null, path);
  render(path);
});

window.addEventListener('popstate', () => render());

window.addEventListener('DOMContentLoaded', () => render());
