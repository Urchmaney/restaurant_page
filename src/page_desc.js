import resImg from '../img/food1.jpg';

export function header() {
  const head = document.createElement('h1');
  head.innerHTML = 'Restaurant Lush';
  return head;
}
export function image() {
  const img = document.createElement('img');
  img.src = resImg;
  return img;
}
export function paragraph() {
  const para = document.createElement('p');
  para.innerHTML = 'Food that make your mouth lush with love and wanting more.';
  return para;
}
