const assetsFolder = "./src/assets/gallery";
const assetsnewFolder = "./src/assets/gallery";
import * as fs from "node:fs";
const events = fs.readdirSync(assetsFolder);

for(let i = 0; i < events.length; i++) {
  const event = events[i];
  const eventPath = `${assetsFolder}/${event}`;
  if(event.toLowerCase() !== event) {
    fs.rmSync(eventPath);
  }
    // fs.rmSync(eventPath);
}
