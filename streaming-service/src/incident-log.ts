interface msg {
  "battery_temperature": number;
  "timestamp": number;
}

const timeLog: msg[] = [];
let incidentCount: number = 0;

export function print(msg: msg) {
  console.log(msg);
}
