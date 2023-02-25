import fs from 'fs';

interface msg {
  "battery_temperature": number;
  "timestamp": number;
}

const timeLog: msg[] = [];
let incidentCount: number = 0;

// Takes the message and adds it to the timeLog array, also checks if temperatures exceed 80 more than three times 
export function addToLog(msg: msg) {
  if (timeLog.length !== 0 && msg.timestamp >= timeLog[0].timestamp + 5100){
    // console.log(timeLog);
    checkTimeLog(msg);
    timeLog.length = 0; 
  } else {
    timeLog.push(msg);
  }
}

// Checks if temperatures exceed more than 80 three times, then write to incidents.log
function checkTimeLog (msg: msg) {
  for (msg of timeLog) {
    if (msg.battery_temperature > 80 || msg.battery_temperature < 20) {
      incidentCount++;
      // console.log(incidentCount);
    }
    if (incidentCount > 3) {
      const incident: string = `Log: Timestamp of Incident: ${timeLog.pop()?.timestamp}`;
      fs.writeFileSync('./incidents.log', incident);
      break;
    } 
  }
  incidentCount = 0;
}
