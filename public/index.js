function joinValues() {
  setTimeout(function() {
    let val = 'xxyyzz'; let val12 = 'xxyyzz'; let val13 = 'xxyyzz';
    let labels=[`Call Type : ${val}`,`Call Reason : ${val}`,`Speaking To : ${val}`,`Patient First Name : ${val}`,`Patient Last Name : ${val}`,`Authorized Person Name : ${val}`,`Advised Caller: : ${val}`,`Patient added authorized user : ${val}`,`Authorized Representative Name : ${val}`,`What is your relationship with this person? : ${val}`,`Other (relationship) : ${val}`,`Preferred phone number is: ${val12}  ${val13}`,"Is this phone number a mobile number or landline phone? : null","Is the phone number we have on file the best phone number to reach you : null",`Added addtl number ${val} Mobile`,`Added addtl number ${val} Landline`,`Verify/Obtain Correct Email address (if not email address - don't confirm ask for email) : ${val}`,`Confirmed email address: ${val}`,`Email address : ${val}`,`I want to confirm we are shipping your supplies to: : ${val}`,`City : ${val}`,`State : ${val}`,`Zip : ${val}`,`Is this address correct? : ${val}`,`Please provide us with your updated shipping address. : ${val}`,`Current Healthcare Provider First Name : ${val}`,`Current Healthcare Provider Last Name : ${val}`,`Current Healthcare Provider Address : ${val}`,`New Healthcare Provider First\xa0Name : ${val}`,`New Healthcare Provider Last Name : ${val}`,`New Healthcare Provider Address : ${val}`,`New Healthcare Provider Phone number : ${val}`,`Primary Insurance Policy/ID Number : ${val}`,`Insurance Company Name (as listed on your insurance card) : ${val}`,`Policy/ID Number : ${val}`,`Group Number : ${val}`,`Relationship to Policyholder : ${val}`,`Policyholder Name : ${val}`,`Policyholder Date of Birth : ${val}`,`Secondary Insurance Policy/ID Number : ${val}`,`Secondary Insurance Company Name (as listed on your insurance card) : ${val}`,`Secondary Policy/ID Number : ${val}`,`Group Number : ${val}`,`Relationship to Policyholder : ${val}`,`Policyholder Name : ${val}`,`Policyholder Date of Birth : ${val}`,`Patient is: ${val}`,`Patient is: ${val}`,`and testing frequency is ${val}; `,`injection frequency is  ${val}; `,`Injecting  ${val} units of insulin each day;`,`injecting 3+ times per day since  ${val}`,`Current Pump Model:  ${val}`,`Serial #:  ${val}`,`Insurance that paid: ${val}`,`Date of Purchase: ${val}`,`Experienced Malfunctions: ${val}`,`Other Malfunctions:  ${val}`,"Patient is electing to get a replacement pump",`Patient is currently on a pump and has used it continuously since receiving it on this date: ${val}`,`Site Change Frequency: ${val}`,`Days on Hand:  ${val}`,`Are you currently using a Medtronic Insulin Pump? : ${val}`,`What brand of Medtronic Isulin Pump are you using? : ${val}`,`Do you want your Medtronic CGM to work with your Medtronic Insulin Pump? : ${val}`,`Do you want your Medtronic CGM to work with your cell phone? : ${val}`,`Are you currently using a Dexcom CGM with your insulin pump or insulin pen? : ${val}`,`Dexcom G7 CGM will not pair with your pump/pen.\xa0 Do you want to continue with Dexcom G6 CGM at this time, you can do software upgrade when G7 integration is available. : ${val}`,`Current Brand/Model : ${val}`,`Serial Number (Reader/Reciever) : ${val}`,`Insurance that paid : ${val}`,`Date of Purchase : ${val}`,`Days on Hand : ${val}`,`Are you administering insulin? : ${val}`,`Do you have frequent, recurring hypoglycemic episodes? : ${val}`,`CGM90 Day Program Requirements : ${val}`,`Patient Opted in to CGM90 : ${val}`,`Advised Patient their pump supplies will ship every: : ${val}`,`Advised Patient their CGMS supplies will ship every: : ${val}`,`Advised Benefits/Out-of-pocket (Advised Medicare 13-month rental payment method). : ${val}`,`Is this an exchange plan? : ${val}`,`Advised Benefits/OOP : ${val}`,`Informed Patient: : ${val}`,`Is patient covered at 100%? : ${val}`,`Medtronic Trade-In Pump Credit : ${val}`,`Based on insurance and products, the patients Expected patient responsibility is: : ${val}`,`Preferred Insulin Pump Brand : ${val}`,`Preferred Beta Bionics Model : ${val}`,`Preferred Medtronic Model : ${val}`,`Preferred Tandem Model : ${val}`,`Quantity : ${val}`,`Preferred Reservoir Brand : ${val}`,`Preferred Beta Bionics Reservoir Model : ${val}`,`Preferred Medtronic Reservoir Model : ${val}`,`Preferred Tandem Reservoir Model : ${val}`,`Quantity : ${val}`,`Preferred Infusion Set Brand : ${val}`,`Preferred Beta Bionics Infusion Set Model : ${val}`,`Preferred Medtronic Infusion Set\xa0Model : ${val}`,`Preferred Tandem Infusion Set\xa0Model : ${val}`,`Quantity : ${val}`,`Other Supplies: Brand : ${val}`,`Other: 3M Model : ${val}`,`Other: Energizer Model : ${val}`,`Other: Ferndale Lab Model : ${val}`,`Other: Medtronic Model : ${val}`,`Other: Smith & Nephew Model : ${val}`,`Other: Smith's Medical : ${val}`,`Other: Torbot Group Inc. : ${val}`,`Quantity : ${val}`,`Preferred CGM Product : ${val}`,`Preferred Dexcom Transmitter Model : ${val}`,`Preferred Medtronic Transmitter Model : ${val}`,`Quantity : ${val}`,`Preferred Receiver (optional) Brand : ${val}`,`Preferred Abbott Receiver Model : ${val}`,`Preferred Dexcom Receiver Model : ${val}`,`Preferred Medtronic Receiver Model : ${val}`,`Preferred Tandem Receiver Model : ${val}`,`Quantity : ${val}`,`Preferred Sensor Brand : ${val}`,`Preferred Abbott Sensor Model : ${val}`,`Preferred Dexcom Sensor Model : ${val}`,`Preferred Medtronic Sensor Model : ${val}`,`Quantity : ${val}`,`Medtronic Quickserter : ${val}`,`Quantity : ${val}`,`Advise Patient: : ${val}`,`Reviewed 90 Day physician visits with patient: : ${val}`,`Estimated Cost Statement - if 100% does this have to be read? : ${val}`,`Advised Patient of Next Steps : ${val}`,`Patient advised of re-order proces : ${val}`];
    const numbers =[{"id":"107599818","num":"1"},{"id":"107599822","num":"2"},{"id":"107599821","num":"3"},{"id":"107599864","num":"4"},{"id":"107599865","num":"5"},{"id":"107599838","num":"6"},{"id":"107599860","num":"7"},{"id":"107599517","num":"8"},{"id":"107599518","num":"9"},{"id":"107599519","num":"10"},{"id":"107599520","num":"11"},{"id":"107599455","num":"12"},{"id":"107599456","num":"13"},{"id":"107599457","num":"14"},{"id":"107599459","num":"15"},{"id":"107599460","num":"16"},{"id":"107599463","num":"17"},{"id":"107599464","num":"18"},{"id":"107599465","num":"19"},{"id":"107599466","num":"20"},{"id":"107599467","num":"21"},{"id":"107599468","num":"22"},{"id":"107599469","num":"23"},{"id":"107599470","num":"24"},{"id":"107599471","num":"25"},{"id":"107599472","num":"26"},{"id":"107599473","num":"27"},{"id":"107599474","num":"28"},{"id":"107599477","num":"29"},{"id":"107599478","num":"30"},{"id":"107599479","num":"31"},{"id":"107599480","num":"32"},{"id":"107599481","num":"33"},{"id":"107599483","num":"34"},{"id":"107599484","num":"35"},{"id":"107599485","num":"36"},{"id":"107599486","num":"37"},{"id":"107599487","num":"39"},{"id":"107599488","num":"40"},{"id":"108071625","num":"41"},{"id":"107599491","num":"42"},{"id":"107599492","num":"43"},{"id":"107599493","num":"44"},{"id":"107599494","num":"45"},{"id":"107599495","num":"46"},{"id":"107599496","num":"47"},{"id":"107600149","num":"48"},{"id":"107768478","num":"49"},{"id":"107600151","num":"50"},{"id":"107796637","num":"51"},{"id":"107820359","num":"52"},{"id":"107796641","num":"53"},{"id":"107599498","num":"54"},{"id":"107599499","num":"55"},{"id":"107599500","num":"56"},{"id":"107599501","num":"57"},{"id":"107600640","num":"58"},{"id":"107600657","num":"59"},{"id":"107768395","num":"60"},{"id":"107600639","num":"61"},{"id":"107600279","num":"62"},{"id":"107599503","num":"63"},{"id":"107599511","num":"64"},{"id":"107599512","num":"65"},{"id":"107599513","num":"66"},{"id":"107599514","num":"67"},{"id":"107599515","num":"68"},{"id":"107599516","num":"69"},{"id":"107768479","num":"70"},{"id":"107768480","num":"71"},{"id":"107768481","num":"72"},{"id":"107768482","num":"73"},{"id":"107768484","num":"74"},{"id":"107599504","num":"75"},{"id":"107599505","num":"76"},{"id":"107599509","num":"77"},{"id":"107599510","num":"78"},{"id":"107599508","num":"79"},{"id":"107835587","num":"80"},{"id":"107600991","num":"81"},{"id":"107601095","num":"82"},{"id":"107601379","num":"83"},{"id":"107601407","num":"84"},{"id":"107601409","num":"85"},{"id":"107768809","num":"86"},{"id":"107796807","num":"87"},{"id":"108070324","num":"88"},{"id":"108070329","num":"89"},{"id":"108070333","num":"89"},{"id":"108070334","num":"89"},{"id":"108070336","num":"90"},{"id":"107816644","num":"91"},{"id":"107816645","num":"91"},{"id":"108040197","num":"91"},{"id":"108040202","num":"91"},{"id":"107816646","num":"92"},{"id":"107816648","num":"93"},{"id":"108040547","num":"93"},{"id":"108040529","num":"93"},{"id":"108040530","num":"93"},{"id":"107816650","num":"94"},{"id":"108039284","num":"95"},{"id":"108039285","num":"96"},{"id":"108040586","num":"97"},{"id":"108040585","num":"98"},{"id":"108040594","num":"99"},{"id":"108040602","num":"100"},{"id":"108040615","num":"101"},{"id":"108040604","num":"102"},{"id":"107817811","num":"103"},{"id":"107796236","num":"104"},{"id":"108040997","num":"104"},{"id":"108040998","num":"104"},{"id":"108041022","num":"105"},{"id":"107816806","num":"106"},{"id":"108041003","num":"106"},{"id":"108041009","num":"106"},{"id":"108041011","num":"106"},{"id":"108222445","num":"106"},{"id":"108041024","num":"107"},{"id":"107816809","num":"108"},{"id":"108041017","num":"108"},{"id":"108041018","num":"108"},{"id":"108041019","num":"108"},{"id":"108041021","num":"109"},{"id":"108041025","num":"110"},{"id":"108041026","num":"111"},{"id":"107819367","num":"112"},{"id":"107930215","num":"113"},{"id":"107601667","num":"114"},{"id":"107601734","num":"115"},{"id":"107768916","num":"116"}]

  //eventual result value after a join
  let combinedString = []
  //returns value of value property, not value attribute
  const getVal = (n) => {
    n = parseInt(n)
    let el = loader.engine.document.getElementById(n)
    return el.properties ? el.properties.value : null
  }
  //need to clean up this mess
  let callType = getVal(107599818).value
  let string2;
  let speaker;
  let personSpeaking = getVal(107599821).value
  let patientSpeaking =  personSpeaking === 'Patient'
  let patientName = [getVal(107599864).value, getVal(107599865).value]
  if (!patientSpeaking) {
    let authorizedPersonName = getVal(107599838)
    let authFirst = authorizedPersonName.firstName
    let authLast = authorizedPersonName.lastName
    speaker = authFirst + authLast
    string2 = `Patient Name : ${patientName[0] + ' ' + patientName[1]}`
  } else {
    speaker = patientName[0] + ' ' + patientName[1]
  }
  let string1 = `${callType} call for patient consent, spoke to ${personSpeaking} ${speaker}`
  combinedString.push(string1)
  string2 ? combinedString.push(string2) : null
  if (patientSpeaking && callType === 'Outbound') {
    combinedString.push('ADVISED CALLER: ')
  }

  //function to replace the 'xxyyzz' placeholders in the string values with form input
  const func = (str, replacement) => {
    return str.replace('xxyyzz', replacement)
  }
 //function for related rows 12-16
  const phoneNumber = (num) => {
    let array = numbers.slice(11,16)
    let inputs = array.map((obj) => getVal(parseInt(obj.id)))
    if (inputs[0].value) {
      let resStr = `Preferred phone number is: ${inputs[0].value}`
      inputs[1].value ? resStr = `${resStr}-${inputs[1].value}` : null
      combinedString.push(resStr)
    }
    inputs[3].value ? combinedString.push(`added addtl number" ${inputs[3].value}; mobile`) : null
    inputs[4].value? combinedString.push(`added addtl number" ${inputs[4].value}; landline`) : null
  }

  //loops through every question after the first few dealing with names
  numbers.slice(7).forEach((obj, i) => {
    let int = parseInt(obj.id)
    let num = parseInt(obj.num)
    if (num === 11) {
      phoneNumber()
      return
    }
    if ([14,15,13, 12].includes(num)) {
      return;
    }
    const element = loader.engine.document.getElementById(int)
    let input
    if (element.hasProperty('value.value')) {
      input = (element.getProperty('value.value'))
      if (input !== null && input !== '') {
        let output = func(labels[num-1], input)
        combinedString.push(output)
      }
    } else if (Object.values(element.properties.value)) {
      let inputString = Object.values(element.properties.value).filter(Boolean).join()
      let answerString = func(labels[num-1], inputString)
      combinedString.push(answerString)
    }
  })
  //splitting by row for clarity
  let joinedArr = combinedString.join("\r\n")

  loader.engine.document.getElementById(107797518).setValue(({"value":
  joinedArr}));

}, 1000);
}

window.onchange = joinValues;

