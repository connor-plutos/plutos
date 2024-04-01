import { handleData } from './verify-image-script.js';

const sideBarLandingEl = document.getElementById('sideBarLandingEl'); // sidebar landing intro
const inputListingEl = document.getElementById('inputListingEl'); // input listing card
const listingUrlInputEl = document.getElementById('listingUrlInput');
const submitBtnEl = document.getElementById('submitListingBtnEl'); // submit listing button
const fileInputEl = document.getElementById('fileInput');

export const getLoadingScreen = () => {
   const loadingScreenEl = document.createElement('div');
   loadingScreenEl.setAttribute('class', 'icon-container');
   loadingScreenEl.setAttribute('id', 'plutos-animation');
   loadingScreenEl.innerHTML = `
   <img
      src="./assets/images/plutoslogo_cube_W.png"
      alt="Plutos icon spinning"
      width="173px"
      height="197px"
   />`;
   document.body.appendChild(loadingScreenEl);
};

export const removeLoadingScreen = () => {
   const loadingScreenEl = document.getElementById('plutos-animation');
   loadingScreenEl.remove();
};

const submitListing = async () => {
   const file = fileInputEl.files[0];
   const listingUrl = listingUrlInputEl.value;

   if (!file) {
      //alert('Please select a file');
      //return;
   }

   let formData = new FormData();
   formData.append('files', file);
   formData.append('url', listingUrl);

   //animate sidebar and input card
   sideBarLandingEl.classList.add('class', 'animate');
   inputListingEl.classList.add('class', 'animate');
   getLoadingScreen();
   setTimeout(() => {
      inputListingEl.remove();
   }, 2000);
   // make POST request
   const url = '/api/data';
   try {
      const res = await fetch(url, {
         method: 'POST',
         body: formData,
         redirect: 'follow',
      });
      const data = await res.json();
      handleData(data);
   } catch (error) {
      console.error(error);
      alert(error);
   }
};

// anything here runs when webpage is opened
const initialization = () => {
   // event listener for input submit button
   submitBtnEl.addEventListener('click', submitListing);

   // event listener for landing sidebar
   sideBarLandingEl.addEventListener('transitionend', () => {
      // delete itself
      sideBarLandingEl.remove();
   });
};

initialization();
