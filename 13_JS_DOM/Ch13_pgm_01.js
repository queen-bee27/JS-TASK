document.addEventListener('DOMContentLoaded', () => {
  const firstParagraph = document.querySelector('p');
  console.log(firstParagraph);
});

document.addEventListener('DOMContentLoaded', () => {
  const para1 = document.querySelector('#para1');
  const para2 = document.querySelector('#para2');
  const para3 = document.querySelector('#para3');
  const para4 = document.querySelector('#para4');

  console.log(para1, para2, para3, para4);
});
document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p');
  console.log(paragraphs);
});

document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
      console.log(paragraph.textContent);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((paragraph, index) => {
      paragraph.id = `para${index + 1}`;
      paragraph.setAttribute('class', `paragraph${index + 1}`);
  });
});

// Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
document.addEventListener('DOMContentLoaded', () => {
  const para1 = document.querySelector('#para1');
  const para2 = document.querySelector('#para2');
  const para3 = document.querySelector('#para3');
  const para4 = document.querySelector('#para4');

  para1.style.color = 'blue';
  para1.style.backgroundColor = 'lightgray';
  para1.style.border = '1px solid black';
  para1.style.fontSize = '20px';
  para1.style.fontFamily = 'Arial, sans-serif';

  para2.style.color = 'red';
  para2.style.backgroundColor = 'lightyellow';
  para2.style.border = '1px solid green';
  para2.style.fontSize = '18px';
  para2.style.fontFamily = 'Verdana, sans-serif';

  para3.style.color = 'purple';
  para3.style.backgroundColor = 'lightblue';
  para3.style.border = '1px solid orange';
  para3.style.fontSize = '16px';
  para3.style.fontFamily = 'Courier New, monospace';

  para4.style.color = 'brown';
  para4.style.backgroundColor = 'lightgreen';
  para4.style.border = '1px solid red';
  para4.style.fontSize = '14px';
  para4.style.fontFamily = 'Georgia, serif';
});

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((paragraph, index) => {
      if (index === 0 || index === 2) {
          paragraph.style.color = 'green';
      } else if (index === 1 || index === 3) {
          paragraph.style.color = 'red';
      }
  });
});

// 3. Set text content, id and class to each paragraph\
document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((paragraph, index) => {
      paragraph.textContent = `Paragraph ${index + 1}`;
      paragraph.id = `para${index + 1}`;
      paragraph.className = `paragraph${index + 1}`;
  });
});


