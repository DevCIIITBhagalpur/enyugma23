const assetsFolder = "./src/assets/events";
const assetsnewFolder = "./src/assets/events";
import * as fs from "node:fs";
const events = fs.readdirSync(assetsFolder);
import sharp from "sharp";

for(let i = 0; i < events.length; i++) {
  const event = events[i];
  const eventPath = `${assetsFolder}/${event}`;
 
  if(event.endsWith(".png")) {
    const newPath = `${assetsnewFolder}/${event.replace(".png", ".webp")}`;
    sharp(eventPath).webp().toFile(newPath);
    // fs.rmSync(eventPath);
  }
    // fs.rmSync(eventPath);
}
