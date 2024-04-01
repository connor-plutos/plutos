// data to be manipulated
let jsonData;

const setData = (data) => {
   jsonData = data;
   console.log(jsonData);
};

// image classification and naming
const setRoomClassification = (classification, index) => {
   jsonData['Image Verification'][index]['Room Classification'] =
      classification;
   console.log(jsonData);
   return;
};

const setRoomName = (name, index) => {
   jsonData['Image Verification'][index]['Room Name'] = name;
   console.log(jsonData);
   return;
};

export { setData, setRoomClassification, setRoomName };
