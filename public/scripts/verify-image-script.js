import { removeLoadingScreen } from './script.js';
import { getVerifyInfoContainerEl } from './verify-info-script.js';
import { setData, setRoomName, setRoomClassification } from './data-script.js';

let verifyImageEl;

const verifyImageDataObj = {
   barInterval: 0,
   barLevel: 0,
   globalIndex: 0,
   imgData: [],
};

// initially create verify image card element
const getVerifyImageEl = () => {
   verifyImageEl = document.createElement('div');
   verifyImageEl.setAttribute('class', 'verify-image-container row mx-0 px-0');
   verifyImageEl.setAttribute('id', 'verifyImageEl');
   verifyImageEl.innerHTML = `
   <!-- verify image side container -->
   <div class="verify-image-container-side col-2 d-flex flex-column">
      <!-- back button -->
      <div class="back-btn-container">
         <button class="btn d-flex align-items-center mt-3 ms-3">
            <span
               ><img src="./assets/images/back-arrow.png" alt="" /></span
            >BACK
         </button>
      </div>
      <!-- title -->
      <div class="verify-image-title container w-auto">
         <div class="row">
            <p>Verify</p>
         </div>
         <div class="row">
            <p>Listing</p>
         </div>
         <div class="row">
            <p>Images</p>
         </div>
      </div>
   </div>
   <!-- image card container -->
   <div class="col-8">
      <!-- image card -->
      <div class="verify-image-card card">
         <div class="card-body">
            <!-- photos title container -->
            <div class="verify-image-card-title row mb-0">
               <div>
                  <p>Photos</p>
               </div>
            </div>
            <!-- progress bar container -->
            <div class="verify-image-card-progress-bar row g-0">
               <div
                  class="col progress mb-3"
                  style="border: solid #392b78"
               >
                  <div
                     class="progress-bar"
                     id="progressBar"
                     style="width: 0%; background-color: #9494c8"
                  ></div>
               </div>
            </div>
            <!-- image container -->
            <div class="verify-image-card-img row mb-3">
               <div class="col card mx-3">
                  <img
                     id="verifyImageCardImgEl"
                     class="img-fluid card-img"
                     src="${
                        verifyImageDataObj.imgData[
                           verifyImageDataObj.globalIndex
                        ].URL
                     }"
                     alt=""
                  />
                  <!-- image overlay buttons -->
                        <div class="card-img-overlay hide">
                           <div class="d-flex justify-content-end">
                              <div class="d-flex flex-column">
                                 <button class="room-class-option-btn btn btn-primary mb-3" value="Kitchen">
                                    Kitchen
                                 </button>
                                 <button class="room-class-option-btn btn btn-primary mb-3" value="Bathroom">
                                    Bathroom
                                 </button>
                                 <button class="room-class-option-btn btn btn-primary mb-3" value="Bedroom">
                                    Bedroom
                                 </button>
                                 <button class="room-class-option-btn btn btn-primary mb-3" value="Living Room">
                                    Living Room
                                 </button>
                                 <button class="room-class-option-btn btn btn-primary mb-3" value="Dining Room">
                                    Dining Room
                                 </button>
                                 <button class="room-class-option-btn btn btn-primary mb-3" value="Other">
                                    Other
                                 </button>
                              </div>
                           </div>
                        </div>
               </div>
            </div>
            <!-- user yes no container -->
            <div class="row confirm-image">
               <div class="verify-image-card-user-input">
                  <div>
                     <p>
                        This is the
                        <span class="verify-image-card-span">${
                           verifyImageDataObj.imgData[
                              verifyImageDataObj.globalIndex
                           ]['Room Classification']
                        }</span>
                     </p>
                  </div>
                  <div class="btn-container">
                     <a
                     id="verifyImageYesBtn"
                        ><img
                           src="./assets/images/verify-images/VerifyImages_True.png"
                           alt=""
                     /></a>
                     <a
                     id="verifyImageNoBtn"
                        ><img
                           
                           src="./assets/images/verify-images/VerifyImages_False.png"
                           alt=""
                     /></a>
                  </div>
               </div>
            </div>
            <!-- user input container room -->
            <div class="row name-image hide">
               <div class="verify-image-card-user-input">
                  <div class="px-0 col-3">
                     <p>
                        Name this
                        <span class="verify-image-card-span"></span>
                     </p>
                  </div>
                  <div class="verify-image-input-container col">
                     <input
                        id="inputRoomNameEl"
                        class="form-control"
                        type="text"
                        placeholder="John's Bedroom"
                     />
                     <a
                     id="confirmNameBtn"
                        ><img
                           src="./assets/images/verify-images/VerifyImages_True.png"
                           alt=""
                     /></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>`;
   const navBar = document.querySelector('nav.navbar');
   if (navBar) {
      navBar.insertAdjacentElement('afterend', verifyImageEl);
      setTimeout(removeLoadingScreen, 800);
   }

   const yesBtn = document.getElementById('verifyImageYesBtn');
   yesBtn.addEventListener('click', () => {
      confirmRoomClass();
   });

   const noBtn = document.getElementById('verifyImageNoBtn');
   noBtn.addEventListener('click', () => {
      reclassifyRoom();
   });

   const confirmNameBtn = document.getElementById('confirmNameBtn');
   confirmNameBtn.addEventListener('click', () => {
      confirmRoomName();
   });

   const roomClassOptionBtns = document.querySelectorAll(
      '.room-class-option-btn'
   );
   roomClassOptionBtns.forEach((button) => {
      button.addEventListener('click', () => {
         //classify room as this button name

         //set classification to jsonData
         setRoomClassification(button.value, verifyImageDataObj.globalIndex);

         //change spans to new classification
         const verifyImageCardSpanEl = document.querySelectorAll(
            '.verify-image-card-span'
         );
         verifyImageCardSpanEl.forEach((element) => {
            let name = button.value;
            element.innerHTML = name;
         });

         // hide buttons
         const cardImgOverlayEl = document.querySelector('.card-img-overlay');
         cardImgOverlayEl.classList.toggle('hide');
      });
   });
};

const updateVerifyImageCard = () => {
   const verifyImageCardSpanEl = document.querySelectorAll(
      '.verify-image-card-span'
   );
   const img = document.getElementById('verifyImageCardImgEl');
   const progressBar = document.getElementById('progressBar');
   img.src = verifyImageDataObj.imgData[verifyImageDataObj.globalIndex].URL;
   verifyImageCardSpanEl.forEach((element) => {
      let name =
         verifyImageDataObj.imgData[verifyImageDataObj.globalIndex][
            'Room Classification'
         ];
      element.innerHTML = name ? name : 'unknown';
   });
   progressBar.style.width = `${verifyImageDataObj.barLevel}%`;
   const confirmDiv = document.querySelector('.confirm-image');
   const nameImageDiv = document.querySelector('.name-image');
   confirmDiv.classList.remove('hide');
   nameImageDiv.classList.add('hide');
};

// handle data once POST request gets response
export const handleData = (data) => {
   //console.log(data);
   setData(data);
   const imageCount = data['Image Verification'].length;
   const interval = Math.round((100 / imageCount) * 100) / 100;
   verifyImageDataObj.imgData = data['Image Verification'];
   verifyImageDataObj.barInterval = interval;
   verifyImageDataObj.barLevel = interval;
   getVerifyImageEl();
};

const cycleImage = () => {
   if (
      verifyImageDataObj.globalIndex + 1 ==
      verifyImageDataObj.imgData.length
   ) {
      // set level to 100 then update
      verifyImageDataObj.barLevel = 100;
      updateVerifyImageCard();

      // get card then animate it
      verifyImageEl.classList.add('animate-leave');
      setTimeout(() => {
         verifyImageEl.remove();
      }, 1000);

      // go to next step here
      getVerifyInfoContainerEl();
   } else {
      verifyImageDataObj.globalIndex++;
      verifyImageDataObj.barLevel =
         verifyImageDataObj.barLevel + verifyImageDataObj.barInterval;
      verifyImageDataObj.barLevel =
         verifyImageDataObj.barLevel > 100 ? 100 : verifyImageDataObj.barLevel;
      updateVerifyImageCard();
   }
};

// confirm room
const confirmRoomClass = () => {
   //change bottom div
   const confirmDiv = document.querySelector('.confirm-image');
   const nameImageDiv = document.querySelector('.name-image');
   confirmDiv.classList.add('hide');
   nameImageDiv.classList.remove('hide');
};

// confirm name
const confirmRoomName = () => {
   const inputRoomNameEl = document.getElementById('inputRoomNameEl');
   const nameInput = inputRoomNameEl.value;
   console.log(nameInput);
   inputRoomNameEl.value = '';
   // send nameInput to data-script to set name at that current index
   setRoomName(nameInput, verifyImageDataObj.globalIndex);
   cycleImage();
};

// reclassify room
const reclassifyRoom = () => {
   // show options on screen
   const cardImgOverlayEl = document.querySelector('.card-img-overlay');
   cardImgOverlayEl.classList.toggle('hide');
};
