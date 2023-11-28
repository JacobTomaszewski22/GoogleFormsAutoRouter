/* Created by Jacob Tomaszewski for Ottilie Tattoo Studio on 25/11/2023. A auto email router based on a google forms submission 
PERSONAL INFORMATION (emails) REMOVED!*/

function FormSubmissionRoute(e){
  //Pulling the named values from the submit event
  var named_values = e.namedValues

  //Console logging
  console.log("Form Responses: " + JSON.stringify(named_values));

  //making the client object
  var client =
  {
    artist: named_values["In consideration of receiving a tattoo from _____ (the artist) at Ottilie Group Limited. "].toString(),
    name: named_values["Full name"],
    email: named_values["Email"],
    pronouns: named_values["Pronouns"],
    date: named_values["Appointment Date"],
    dob: named_values["Birth Date"],
    number: named_values["Phone Number"],
    desc: named_values["Tattoo Description/Placement"],
    allergens: named_values["I have read, understood, and agree to be bound by the following:"],
    harmless: named_values["I hereby hold harmless Ottilie Group Limited, the Tattooist and all affiliates, Owners, Managers, and Employees from any and all claims, damages, or legal actions arising from or connected in any way with my tattoo, or the procedure and conduct used in my performing my tattoo, to the fullest extent allowed by the law. "],
    agreement: named_values["By clicking below, I agree that I have read the Tattoo release form provided and agree to its terms."],
    address: named_values["Address"]
  };

  //switch statement to route email to relevant email
  //*----REMEMBER TO CHANGE EMAILS----*/
  var home_artist = true;
  var recipiant_mail;

  switch(client.artist)
  {
    case "Alizé":
      recipiant_mail = "";
      break;
    case "Diogo":
      recipiant_mail = "";
      break;
    case "Riccardo":
      recipiant_mail = "";
      break;
    case "Izzy":
      recipiant_mail = "";
      break;
    case "JP":
      recipiant_mail = "";
      break;
    case "Vitor":
      recipiant_mail = "";
      break;
    case "Liam":
      recipiant_mail = "";
      break;
    case "Mónica":
      recipiant_mail = "";
      break;
    case "Suki":
      recipiant_mail = "";
      break;
    case "Moon":
      recipiant_mail = "";
      break;
    default:
      //non-resident artist, therefore there is no email registered with them
      home_artist = false;
      break;

  }

  //creates the template from the appointmenttemplate.html file
  var template = HtmlService.createTemplateFromFile('AppointmentTemplate.html')

  //assigns the template variables
  template.client = client

  //create the message from the populated template
  var message = template.evaluate().getContent()

  //check if the the artist is a resident
  if (home_artist == true)
  {
    //if it is, then
    //send the email to the artist
    MailApp.sendEmail({
    to: recipiant_mail,
    subject: "You Have Recieved a New Consent Form Response",
    htmlBody: message
    });
    console.log("Sent email to: " + JSON.stringify(client.artist))
  }

  //Console logging
  var emails_remaining = MailApp.getRemainingDailyQuota();
  console.log("Emails Left Today: " + emails_remaining);

}
