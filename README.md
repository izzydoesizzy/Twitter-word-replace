# Twitter-word-replace
A Chrome extension for replacing words on Twitter exclusively.

### Files
* [manifest.json](manifest.json) is necessary for Chrome and tells the extension to use Twitter exclusively, so the words won't be replaced on other websites. Edit this file to add your extension's title, description, and version number etc. Don't rename this file.
* [replaceWord.js](replaceWord.js) is a script that takes the content from tweets and replaces the words if it finds them.

### Customise
Edit [manifest.json](manifest.json) to give your extension a title and description.

To choose the words to be replaced, edit line 6 in [replaceWord.js](replaceWord.js):

```javascript
var newContent = el.innerHTML.replace(/OLD_WORD_NO_QUOTATION_MARKS/g,"NEW_WORD_IN_QUOTATION MARKS");
```
Here's an example to replace the word "beauty" with "chickens":

```javascript
var newContent = el.innerHTML.replace(/beauty/g,"chickens");
```

## Installing the extension
This Chome extension requires the manifest.json and replaceWord.js files to be zipped into one file and added to the browser (or uploaded to the [Chrome Web Store](https://developer.chrome.com/webstore/publish)).

A friend used this extension to replace "beauty" with "chickens". Here's a screenshot they sent me.

![Screenshot](https://cloud.githubusercontent.com/assets/19414098/17837379/b4e2c734-67a9-11e6-8168-3dccb30792fc.jpg)
