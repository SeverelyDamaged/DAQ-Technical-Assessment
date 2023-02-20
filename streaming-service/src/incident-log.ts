interface msg {
  "battery_temperature": number;
  "timestamp": number;
}

const timeLog: msg[] = [];
let incidentCount: number = 0;

// Takes the message and adds it to the timeLog array
export function addToLog(msg: msg) {
  if (timeLog.length !== 0 && msg.timestamp >= timeLog[0].timestamp + 5100){
    console.log(timeLog);
    checkTimeLog(msg);
    timeLog.length = 0; 
  } else {
    timeLog.push(msg);
  }
}

function checkTimeLog (msg: msg) {
  for (msg of timeLog) {
    if (msg.battery_temperature > 80) {
      incidentCount++;
    }
    if (incidentCount > 3) {
      console.log("Write to log here");
      incidentCount = 0;
      return;
    } 
  }
  console.log("Safe!");
  incidentCount = 0;
}
