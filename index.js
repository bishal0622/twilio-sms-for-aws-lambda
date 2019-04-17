const request = require('request-promise-native');

const TWILIO_ACCOUNT = "ACb56a9338a7464bdf71e114ff7d4af184";
const SEND_SMS_TO = "+9779849125901";

const handler = (event, context, callback) => {
  return request.post({
    url: `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT}/Messages.json`,
    json: true,
    auth: {
      user: "ACb56a9338a7464bdf71e114ff7d4af184",
      pass: "fd38940dbe38e767efe16d1418c369ba"
    },
    form: {
      From: "+18045771110",
      To: `${SEND_SMS_TO}`,
      Body: `Hello From Ontarget.`
    }
  }).then((data) => {
    console.log(`Successfully sent through SMS to ${SEND_SMS_TO}`)
    return callback(null, true)
  }).catch((err) => {
    console.error(err)
    return callback(err)
  });
}

module.exports = { handler }
