import fs from "fs";

var alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

var nanoId = function (length) {
  if (length == null) {
    length = 10;
  }
  var result = '';
  for (var i = 0; i < length; ++i) {
    result += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
  }
  return result;
};

const chapters = [];

function addChapter(title, description) {
  const id = nanoId(); // Generate a unique ID
  chapters.push({ id, title, description });

}

function saveJSON(filename) {
  // Save chapters to a JSON file
  fs.writeFile(filename, JSON.stringify(chapters, null, 2), (err) => {
    if (err) {
      console.error('Error saving to file:', err);
    } else {
      console.log(`Chapters saved to ${filename}`);
    }
  });
}


export { addChapter, saveJSON, fs }