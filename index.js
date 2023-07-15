function joinValues() {
  setTimeout(function() {
    const numbers =[107599558,107599557,107599818,107599822,107599821,107599838,107599860,107820204,107815363,107599864,107599865,108070324,108070329,108070333,108070334,108070336,107600149,107768478,107796236,107600151,107796637,107769455,107599481,107599482,107599483,107599484,107599485,107599486,107599487,107599488,107599489,108071625,107599490,107599491,107599492,107599493,107599494,107599495,107599496,107600991,107601095,107601379,107601407,107601409,107768809,107796807,107820359,107796641,107599498,107599499,107599500,107599501,107600640,107600657,107768395,107600639,107600279,107599503,107599508,107599511,107599512,107599513,107599514,107599515,107599516,107768479,107768480,107768481,107768482,107768484,107599504,107599505,107599509,107599510,107835587,107816644,107816645,108040197,108040202,107816646,107816648,108040547,108040529,108040530,107816650,108039284,108039285,108040586,108040585,108040594,108040602,108040615,108040604,107817811,107816754,108040997,108040998,108041022,107816806,108041003,108041009,108041011,108222445,108041024,107816809,108041017,108041018,108041019,108041021,108041025,108041026,107599517,107599518,107599519,107599520,107599455,107599456,107599457,107599459,107599460,107599463,107599464,107599465,107819501,107599466,107599467,107599468,107599469,107599470,107599471,107599472,107599473,107599474,107599475,107599476,107599477,107599478,107599479,107599480,107819367,107930215,107601667,107601734,107768916]
  //function to iterate all rows and combine into single string

  let combinedString = rows.reduce((acc,num) => {

    // let { Label, Field_ID} = row
    // let DisplayLabel = row.Display_Label === 'Yes'
    //resString represents the eventual string for each row that will be added to the combinedString
    // let resString = '';
    // if (row["Display_in_note:"] === 'No') {
    //   return acc
    // }
    // if (DisplayLabel) {
    //   resString = Label + ' '
    // }

    //provided function to get the element based on the ID
    let consoleObj = {}

    let el = loader.engine.document.getElementById(num);
    if (el) {
      // console.log({[Field_ID]: el})
      let {value, label} = el.properties
      label = label.labelText
      consoleObj[num] = {value, label, el}
      //check to see if 'value.value' is available
      if (el.hasProperty('value.value')) {
        //if so we add it to the resstring
        let response = el.getProperty('value.value') ?? ''
        console.log(response)
        if (response === null) {
          resString = ''
        } else if (!Boolean(response)) {
          resString = ''
        }else if (response === '') {
          resString = ''
        } else {
          resString = resString + response + ' / '
        }

      } else {

        let response = Object.values(el.properties.value).filter(Boolean).join()
        console.log('arrayValues', response)
        if (response === null) {
          resString = ''
        } else {
          resString = resString + response + ' / '
        }
        //if its not there we are assuming it has more than 1 value, and we join the values into a string

      }
    }
    //console.log('testing resString: ', resString)
    return acc + resString

  }, '')
  console.log(consoleObj)
  loader.engine.document.getElementById(107797518).setValue(({"value":

  combinedString}));

}, 1000);
}

window.onchange = joinValues;