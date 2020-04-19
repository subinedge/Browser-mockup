// lets toggle classes on resize minimize and close

let closeBtn = document.querySelector('.browser_bar_btn--close');
let maximizeBtn = document.querySelector('.browser_bar_btn--resize');
let minimizeBtn = document.querySelector('.browser_bar_btn--mini');
let browserButton = document.querySelector('.browser_button');

let browser = document.querySelector('.browser');

// close button

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  // on click the hide and show classes should toggle

  browser.classList.toggle('hide');

  // now on clicking the Open Browser button, show class will trigger the browser

  browserButton.classList.toggle('show');
  // show class will work only if we add event listener to Open browser button
})


browserButton.addEventListener('click', (e) => {
  e.stopPropagation();
  browser.classList.toggle('hide');
  browserButton.classList.toggle('show');
  // works
})

// lets write for minimize and resize button logic

minimizeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  browser.classList.add('mini')
})

// now we have to remove mini class if it has on clicking thumbnail browser

browser.addEventListener('click', (e) => {
  e.stopPropagation();
  if(browser.classList.contains("mini")) {
    browser.classList.remove('mini');
  }
})

maximizeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  browser.classList.toggle('max')
})