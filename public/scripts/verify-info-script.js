let state = 0;

export const getVerifyInfoContainerEl = () => {
   /*

   cards to make:
   Overview
   Unit Space
   Monthly Costs
   Amenities (not editbale)
   Costs
   Location
   The Building
   
   */
   const verifyInfoContainerEl = document.createElement('div');
   verifyInfoContainerEl.setAttribute('class', 'mx-0 px-0 row');
   verifyInfoContainerEl.setAttribute('id', 'verifyInfoContainer');
   verifyInfoContainerEl.innerHTML = `
   <!-- verify-info-title-submit-column -->
   <div
      class="verify-info-title-col col-2 d-flex flex-column"
      style="background-color: #392b78; color: #ffffff"
   >
      <!-- back button -->
      <div class="back-btn-container">
         <button class="btn d-flex align-items-center mt-3 ms-3">
            <span
               ><img src="./assets/images/back-arrow.png" alt="" /></span
            >BACK
         </button>
      </div>
      <!-- title -->
      <div
         class="verify-info-title container w-auto"
         style="margin-bottom: 475px"
      >
         <div class="row">
            <p>Verify</p>
         </div>
         <div class="row">
            <p>Listing</p>
         </div>
         <div class="row">
            <p>Info</p>
         </div>
      </div>
      <!-- submit button -->
      <div
         class="d-flex justify-content-center mb-5"
         style="height: 120px"
      >
         <button
            class="btn"
            style="
               height: 80%;
               width: 90%;
               background-color: #ffffff;
               border-radius: 100pt;
               font-family: 'Roboto', sans-serif;
               font-weight: bold;
               font-size: 25pt;
               color: #433082;
            "
         >
            SUBMIT
         </button>
      </div>
   </div>
   <!-- card column -->
   <div class="col verify-info-card-col">
      <!-- first row -->
      <div class="row mb-2">
         <!-- overview card -->
         <div class="col-4 overview-card">
            <div class="card">
               <div class="card-body">
                  <p class="title">OVERVIEW</p>
                  <div class="details">
                     <p class="address-1">252 West 30th St</p>
                     <p class="address-2">APT 6B</p>
                     <p class="address-2">New York, NY 10001</p>
                  </div>
               </div>
            </div>
         </div>
         <!-- unit space card -->
         <div class="col-8 unitspace-card">
            <div class="card">
               <div class="card-body">
                  <p class="title">UNIT SPACE</p>
                  <!-- unit space details -->
                  <div class="container row">
                     <div class="col">
                        <p class="details-value">3</p>
                        <p class="details-label">BD</p>
                     </div>
                     <div class="col">
                        <p class="details-value">1</p>
                        <p class="details-label">BA</p>
                     </div>
                     <div class="col">
                        <p class="details-value">7</p>
                        <p class="details-label">ROOMS</p>
                     </div>
                     <div class="col">
                        <p class="details-value">1,711</p>
                        <p class="details-label">SQ FT</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- materials and finishes title -->
      <div class="row mb-1 materials-finishes-title">
         <p class="mb-1 ms-1">MATERIALS AND FINISHES</p>
      </div>
      <!-- scrollable row of material cards -->
      <div class="scrollable-row mb-3">
         <div class="materials-row mb-3">
            <!-- first card -->
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/kitchen.png"
                           />
                        </span>
                        KITCHEN
                     </p>
                     <ul class="details">
                        <li><p>White Quartz Countertops</p></li>
                        <li><p>White Cabinetry</p></li>
                        <li><p>Stainless Steel Appliances</p></li>
                        <li><p>Refrigerator, Dishwasher</p></li>
                        <li><p>Gas Range with Red Accent</p></li>
                        <li><p>Subway Tile Backsplash</p></li>
                        <li><p>White Cabinetry</p></li>
                        <li><p>Breakfast Bar with Stool Seating</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/bathroom.png"
                           />
                        </span>
                        BATHROOM
                     </p>
                     <ul class="details">
                        <li><p>White Subway Tile Walls</p></li>
                        <li><p>Hexagonal Tile Flooring</p></li>
                        <li><p>Traditional Tub with Shower</p></li>
                        <li><p>Pedestal Sink</p></li>
                        <li><p>Black Radiator</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/bedroom.png"
                           />
                        </span>
                        BEDROOMS
                     </p>
                     <ul class="details">
                        <li><p>White Painted Walls</p></li>
                        <li><p>Hardwood Flooring</p></li>
                        <li><p>Large Windows with Ample Light</p></li>
                        <li><p>Built-in White Storage Closets</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/living-room.png"
                           />
                        </span>
                        LIVING/DINING AREA
                     </p>
                     <ul class="details">
                        <li><p>White Painted Walls</p></li>
                        <li><p>Large Windows with Street View</p></li>
                        <li><p>Recessed Ceiling Lights</p></li>
                        <li><p>Pendant Light in Dining Area</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/office.png"
                           />
                        </span>
                        HOME OFFICE
                     </p>
                     <ul class="details">
                        <li><p>White Painted Walls</p></li>
                        <li><p>Hardwood Flooring</p></li>
                        <li><p>Large Windows with Natural Light</p></li>
                        <li><p>Minimalistic Desk and Chair</p></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- bottom cards -->
      <div class="row" style="margin-bottom: 100px">
         <!-- left column -->
         <div class="col-7 d-flex flex-column">
            <!-- monthly costs card -->
            <div class="row d-flex mb-3">
               <div class="monthlycost-card card">
                  <div class="card-body">
                     <p class="title">MONTHLY COSTS</p>
                     <!-- costs in each card -->
                     <div class="monthlycost-row-card-container">
                        <div class="card">
                           <div class="card-body">
                              <p class="value">$14,615</p>
                              <p class="label">ESTIMATED PAYMENT</p>
                           </div>
                        </div>

                        <div class="card">
                           <div class="card-body">
                              <p class="value">$2,113</p>
                              <p class="label">MONTHLY TAXES</p>
                           </div>
                        </div>

                        <div class="card">
                           <div class="card-body">
                              <p class="value">$1,948</p>
                              <p class="label">COMMONS CHARGES</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- location card -->
            <div class="row mb-3">
               <div class="location-card card">
                  <div class="card-body">
                     <p class="title">LOCATION</p>
                     <div class="row row-cols-2 details">
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/location/neighborhood.png" /></span
                           >Chelsea
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/location/subways.png"
                                 alt="" /></span
                           >Bus Stop
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/location/schoolDistrict.png"
                                 alt="" /></span
                           >School District
                        </p>
                        <div class="col">
                           <div class="row">
                              <div class="col-1 mt-2">
                                 <img
                                    src="./assets/images/verify-info/location/zoning.png"
                                    alt=""
                                 />
                              </div>
                              <div class="col">
                                 <p class="mb-0">Zoning Indicator: N</p>
                                 <p>Zoning: M1-6D</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- building card -->
            <div class="row mb-3">
               <div class="building-card card">
                  <div class="card-body">
                     <p class="title">THE BUILDING</p>
                     <div class="row row-cols-2 details">
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/building/units.png"
                                 alt="" /></span
                           >24 Units
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/building/stories.png"
                                 alt="" /></span
                           >15 Stories
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/building/built.png"
                                 alt="" /></span
                           >Built in 1927
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- right column -->
         <div class="col-5 d-flex flex-column">
            <!-- amenities card -->
            <div class="amenities-card card mb-3">
               <div class="card-body">
                  <p class="title">AMENITIES</p>
                  <div class="details">
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/elevator.png"
                              alt="" /></span
                        >Elevator
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/petsAllowed.png"
                              alt="" /></span
                        >Dogs & Cats Allowed
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/washer.png"
                              alt="" /></span
                        >Washer / Dryer in Unit
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/dishwasher.png"
                              alt="" /></span
                        >Dishwasher
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/hardwood.png"
                              alt="" /></span
                        >Hardwood Floors
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/skylineView.png"
                              alt="" /></span
                        >Skyline View
                     </p>
                  </div>
               </div>
            </div>
            <!-- costs card -->
            <div class="costs-card card mb-3">
               <div class="card-body">
                  <p class="title">COSTS</p>
                  <div class="details">
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/price/price.png"
                              alt="" /></span
                        >$1,995,000
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/price/sqft.png"
                              alt="" /></span
                        >$1,110 per ft
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/price/priceChange-down.png"
                              alt="" /></span
                        >-$255,000 (11.3%)
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- empty col with edit button -->
   <div class="col-1 edit-col d-flex justify-content-center">
      <!-- edit btn -->
      <div class="edit-btn" id="editBtn">
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/edit-btn.gif"
            style="display: block"
         />
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/edit-btn-pencil2check.gif"
            style="display: none"
         />
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/confirm-edit-btn.gif"
            style="display: none"
         />
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/edit-btn-check2pencil.gif"
            style="display: none"
         />
      </div>
   </div>
   `;

   document.body.append(verifyInfoContainerEl);
   const editBtn = document.getElementById('editBtn');
   editBtn.addEventListener('click', toggleEditBtn);
};

const toggleEditBtn = () => {
   const images = document.querySelectorAll('.edit-btn-img');
   images.forEach((img) => (img.style.display = 'none'));

   if (state === 0) {
      // Change to the first GIF
      images[1].style.display = 'block';
      setTimeout(() => {
         // Change to the second image after the GIF animation duration
         images[1].style.display = 'none';
         images[2].style.display = 'block';
         state = 1; // Update state
      }, 800); // Assuming the GIF takes 2 seconds to play, adjust accordingly
   } else {
      // Change to the second GIF
      images[3].style.display = 'block';
      setTimeout(() => {
         // Change back to the first image after the GIF animation duration
         images[3].style.display = 'none';
         images[0].style.display = 'block';
         state = 0; // Update state
      }, 800); // Adjust based on the second GIF's duration
   }
};

/*

entirety of verify info container

<!-- verify info container -->
<div class="mx-0 px-0 row" id="verifyInfoContainer">
   <!-- verify-info-title-submit-column -->
   <div
      class="col-2 d-flex flex-column"
      style="background-color: #392b78; color: #ffffff"
   >
      <!-- back button -->
      <div class="back-btn-container">
         <button class="btn d-flex align-items-center mt-3 ms-3">
            <span
               ><img src="./assets/images/back-arrow.png" alt="" /></span
            >BACK
         </button>
      </div>
      <!-- title -->
      <div
         class="verify-info-title container w-auto"
         style="margin-bottom: 475px"
      >
         <div class="row">
            <p>Verify</p>
         </div>
         <div class="row">
            <p>Listing</p>
         </div>
         <div class="row">
            <p>Info</p>
         </div>
      </div>
      <!-- submit button -->
      <div
         class="d-flex justify-content-center mb-5"
         style="height: 120px"
      >
         <button
            class="btn"
            style="
               height: 80%;
               width: 90%;
               background-color: #ffffff;
               border-radius: 100pt;
               font-family: 'Roboto', sans-serif;
               font-weight: bold;
               font-size: 25pt;
               color: #433082;
            "
         >
            SUBMIT
         </button>
      </div>
   </div>
   <!-- card column -->
   <div class="col card-col">
      <!-- first row -->
      <div class="row mb-2">
         <!-- overview card -->
         <div class="col-4 overview-card">
            <div class="card">
               <div class="card-body">
                  <p class="title">OVERVIEW</p>
                  <div class="details">
                     <p class="address-1">252 West 30th St</p>
                     <p class="address-2">APT 6B</p>
                     <p class="address-2">New York, NY 10001</p>
                  </div>
               </div>
            </div>
         </div>
         <!-- unit space card -->
         <div class="col-8 unitspace-card">
            <div class="card">
               <div class="card-body">
                  <p class="title">UNIT SPACE</p>
                  <!-- unit space details -->
                  <div class="container row">
                     <div class="col">
                        <p class="details-value">3</p>
                        <p class="details-label">BD</p>
                     </div>
                     <div class="col">
                        <p class="details-value">1</p>
                        <p class="details-label">BA</p>
                     </div>
                     <div class="col">
                        <p class="details-value">7</p>
                        <p class="details-label">ROOMS</p>
                     </div>
                     <div class="col">
                        <p class="details-value">1,711</p>
                        <p class="details-label">SQ FT</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- materials and finishes title -->
      <div class="row mb-1 materials-finishes-title">
         <p class="mb-1 ms-1">MATERIALS AND FINISHES</p>
      </div>
      <!-- scrollable row of material cards -->
      <div class="scrollable-row mb-3">
         <div class="materials-row mb-3">
            <!-- first card -->
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/kitchen.png"
                           />
                        </span>
                        KITCHEN
                     </p>
                     <ul class="details">
                        <li><p>White Quartz Countertops</p></li>
                        <li><p>White Cabinetry</p></li>
                        <li><p>Stainless Steel Appliances</p></li>
                        <li><p>Refrigerator, Dishwasher</p></li>
                        <li><p>Gas Range with Red Accent</p></li>
                        <li><p>Subway Tile Backsplash</p></li>
                        <li><p>White Cabinetry</p></li>
                        <li><p>Breakfast Bar with Stool Seating</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/bathroom.png"
                           />
                        </span>
                        BATHROOM
                     </p>
                     <ul class="details">
                        <li><p>White Subway Tile Walls</p></li>
                        <li><p>Hexagonal Tile Flooring</p></li>
                        <li><p>Traditional Tub with Shower</p></li>
                        <li><p>Pedestal Sink</p></li>
                        <li><p>Black Radiator</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/bedroom.png"
                           />
                        </span>
                        BEDROOMS
                     </p>
                     <ul class="details">
                        <li><p>White Painted Walls</p></li>
                        <li><p>Hardwood Flooring</p></li>
                        <li><p>Large Windows with Ample Light</p></li>
                        <li><p>Built-in White Storage Closets</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/living-room.png"
                           />
                        </span>
                        LIVING/DINING AREA
                     </p>
                     <ul class="details">
                        <li><p>White Painted Walls</p></li>
                        <li><p>Large Windows with Street View</p></li>
                        <li><p>Recessed Ceiling Lights</p></li>
                        <li><p>Pendant Light in Dining Area</p></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-3 materials-card">
               <div class="card">
                  <div class="card-body">
                     <p class="title">
                        <span>
                           <img
                              src="./assets/images/verify-info/rooms/office.png"
                           />
                        </span>
                        HOME OFFICE
                     </p>
                     <ul class="details">
                        <li><p>White Painted Walls</p></li>
                        <li><p>Hardwood Flooring</p></li>
                        <li><p>Large Windows with Natural Light</p></li>
                        <li><p>Minimalistic Desk and Chair</p></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- bottom cards -->
      <div class="row" style="margin-bottom: 100px">
         <!-- left column -->
         <div class="col-7 d-flex flex-column">
            <!-- monthly costs card -->
            <div class="row d-flex mb-3">
               <div class="monthlycost-card card">
                  <div class="card-body">
                     <p class="title">MONTHLY COSTS</p>
                     <!-- costs in each card -->
                     <div class="monthlycost-row-card-container">
                        <div class="card">
                           <div class="card-body">
                              <p class="value">$14,615</p>
                              <p class="label">ESTIMATED PAYMENT</p>
                           </div>
                        </div>

                        <div class="card">
                           <div class="card-body">
                              <p class="value">$2,113</p>
                              <p class="label">MONTHLY TAXES</p>
                           </div>
                        </div>

                        <div class="card">
                           <div class="card-body">
                              <p class="value">$1,948</p>
                              <p class="label">COMMON CHARGES</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- location card -->
            <div class="row mb-3">
               <div class="location-card card">
                  <div class="card-body">
                     <p class="title">LOCATION</p>
                     <div class="row row-cols-2 details">
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/location/neighborhood.png" /></span
                           >Chelsea
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/location/subways.png"
                                 alt="" /></span
                           >Bus Stop
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/location/schoolDistrict.png"
                                 alt="" /></span
                           >School District
                        </p>
                        <div class="col">
                           <div class="row">
                              <div class="col-1 mt-2">
                                 <img
                                    src="./assets/images/verify-info/location/zoning.png"
                                    alt=""
                                 />
                              </div>
                              <div class="col">
                                 <p class="mb-0">Zoning Indicator: N</p>
                                 <p>Zoning: M1-6D</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- building card -->
            <div class="row mb-3">
               <div class="building-card card">
                  <div class="card-body">
                     <p class="title">THE BUILDING</p>
                     <div class="row row-cols-2 details">
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/building/units.png"
                                 alt="" /></span
                           >24 Units
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/building/stories.png"
                                 alt="" /></span
                           >15 Stories
                        </p>
                        <p class="col">
                           <span
                              ><img
                                 src="./assets/images/verify-info/building/built.png"
                                 alt="" /></span
                           >Built in 1927
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- right column -->
         <div class="col-5 d-flex flex-column">
            <!-- amenities card -->
            <div class="amenities-card card mb-3">
               <div class="card-body">
                  <p class="title">AMENITIES</p>
                  <div class="details">
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/elevator.png"
                              alt="" /></span
                        >Elevator
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/petsAllowed.png"
                              alt="" /></span
                        >Dogs & Cats Allowed
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/washer.png"
                              alt="" /></span
                        >Washer / Dryer in Unit
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/dishwasher.png"
                              alt="" /></span
                        >Dishwasher
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/hardwood.png"
                              alt="" /></span
                        >Hardwood Floors
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/amenities/skylineView.png"
                              alt="" /></span
                        >Skyline View
                     </p>
                  </div>
               </div>
            </div>
            <!-- costs card -->
            <div class="costs-card card mb-3">
               <div class="card-body">
                  <p class="title">COSTS</p>
                  <div class="details">
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/price/price.png"
                              alt="" /></span
                        >$1,995,000
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/price/sqft.png"
                              alt="" /></span
                        >$1,110 per ft
                     </p>
                     <p>
                        <span
                           ><img
                              src="./assets/images/verify-info/price/priceChange-down.png"
                              alt="" /></span
                        >-$255,000 (11.3%)
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- empty col with edit button -->
   <div class="col-1 edit-col d-flex justify-content-center">
      <!-- edit btn -->
      <div class="edit-btn" id="editBtn">
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/edit-btn.gif"
            style="display: block"
         />
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/edit-btn-pencil2check.gif"
            style="display: none"
         />
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/confirm-edit-btn.gif"
            style="display: none"
         />
         <img
            class="edit-btn-img"
            src="./assets/images/verify-info/edit-btn/edit-btn-check2pencil.gif"
            style="display: none"
         />
      </div>
   </div>
</div>

*/
