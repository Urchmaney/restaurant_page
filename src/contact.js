import gpsImg from '../img/gps.png';
import emailImg from '../img/email.png';
import phoneImg from '../img/phone.png';

export default function displayContact() {
  const container = document.createElement('div');
  const phoneImage = document.createElement('img');
  phoneImage.src = phoneImg;
  phoneImage.height = 30;
  phoneImage.width = 30;
  const number = document.createElement('div');
  number.appendChild(phoneImage);
  number.append('0816356278');
  const emailImage = document.createElement('img');
  emailImage.src = emailImg;
  emailImage.height = 30;
  emailImage.width = 30;
  const email = document.createElement('p');
  email.appendChild(emailImage);
  email.append('email.com');
  const gpsImage = document.createElement('img');
  gpsImage.src = gpsImg;
  gpsImage.height = 30;
  gpsImage.width = 30;
  const address = document.createElement('div');
  address.appendChild(gpsImage);
  address.append('25 ayodele ss');
  container.appendChild(number);
  container.appendChild(email);
  container.appendChild(address);
  return container;
}
