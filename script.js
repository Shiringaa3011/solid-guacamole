const block = document.querySelector('.block');
const code = document.querySelector('.code-box');
const content = document.querySelector('.tabs');

const hor = document.querySelector('.hor');
const ver = document.querySelector('.ver');
const blu = document.querySelector('.blur');
const str= document.querySelector('.str');
const col = document.querySelector('.col');
const tra = document.querySelector('.tra');

const colOne = document.querySelector('.col-one');
const colTwo = document.querySelector('.col-two');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const deg = document.querySelector('.deg');

const topIn = document.querySelector('.top-input');
const bottomIn = document.querySelector('.bottom-input');
const leftIn = document.querySelector('.left-input');
const rightIn = document.querySelector('.right-input');

const styles = () => {
    let bigint = col.value.split('#')[1];
    let r = parseInt((bigint[0] + bigint[1]), 16);
    let g = parseInt((bigint[2] + bigint[3]), 16);
    let b = parseInt((bigint[4] + bigint[5]), 16);
    let a = tra.value / 10;

    let topOne = 100 - topIn.value;
    let bottomOne = 100 - bottomIn.value;
    let leftOne = 100 - leftIn.value;
    let rightOne = 100 - rightIn.value;

    block.style.boxShadow = `${hor.value}px ${ver.value}px ${blu.value}px ${str.value}px rgba(${r}, ${g}, ${b}, ${a})`;
    block.style.background = `linear-gradient(${deg.value}deg, ${colOne.value} ${one.value}%, ${colTwo.value} ${two.value}%)`;
    block.style.borderRadius = `${topOne}% ${topIn.value}% ${bottomOne}% ${bottomIn.value}% / ${leftIn.value}% ${rightOne}% ${rightIn.value}% ${leftOne}%`;

    code.innerHTML = '<p>' + `box-shadow: ${hor.value}px ${ver.value}px ${blu.value}px ${str.value}px rgba(${r}, ${g}, ${b}, ${a});` + '</p>' + '<br>';
    code.innerHTML += '<p>' + `background: linear-gradient (${deg.value}deg, ${colOne.value} ${one.value}%, ${colTwo.value} ${two.value}%);` + '</p>' + '<br>';
    code.innerHTML += '<p>' + `border-radius: ${topOne}% ${topIn.value}% ${bottomOne}% ${bottomIn.value}% / ${leftIn.value}% ${rightOne}% ${rightIn.value}% ${leftOne}%;` + '</p>';
}

content.addEventListener('change', styles);

styles()

