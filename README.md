# Replace Bitcoins with Tulips
A Chrome extension that replaces all references to Bitcoin on Twitter with tulip emojis.

### Credits: 
Created by [Izzy Piyale-Sheard](http://twitter.com/izzydoesizzy)
Project Forked and modified from [GeneticJen's Twitter-word-replace](https://github.com/GeneticJen/Twitter-word-replace)



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

![Screenshot](tulip3.png)
![Screenshot](tulip2.png)
