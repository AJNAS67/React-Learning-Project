const dummyApiResponse = {
//   showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showImageSlider: true,
  ShowSearchAutoCompleate: true,
};
function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else {
      reject("Some error occured  ! please try again");
    }
  });
}
export default featureFlagsDataServiceCall;
