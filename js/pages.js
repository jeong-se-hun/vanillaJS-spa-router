const createElement = domString => {
  const $template = document.createElement('template');
  $template.innerHTML = domString;
  return $template.content;
};

export const Home = () => createElement(`<h1 class="title">HOME</h1><p class="description">메인페이지 입니다.</p>`);
export const Menu1 = () => createElement(`<h1 class="title">MENU1</h1><p class="description">MENU1 페이지 입니다.</p>`);
export const Menu2 = () => createElement(`<h1 class="title">MENU2</h1><p class="description">MENU2 페이지 입니다.</p>`);
export const Menu3 = () => createElement(`<h1 class="title">MENU3</h1><p class="description">MENU3 페이지 입니다.</p>`);
export const NotFound = () => createElement(`<h1 class="title">404 NotFound</h1>`);
