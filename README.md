# Spoofle
## This is a spoof of google, you can search for anything on the web just by typing in what you want to find. 

## System requirements
- [Latest LTS version of Node]("https://nodejs.org/en/download")
- [An api key from Metaphor]("https://dashboard.metaphor.systems/")
## Getting started
To download all packages needed, run the following command
```
npm install OR npm i
``` 
To run the server, cd to the server file and run the following in a terminal
```
npm start
```
To run the React client, open a new terminal, cd to the client folder, and run the following command
```
npm start
```

## Adding your own Metaphor API KEY to access the data
There are two ways to add your API KEY. The first method is as follows.
 Inside the server folder, create a .env file, then inside of your newly created .env file, add the following variable:
```
API_KEY={your_api_key}
```
You need to replace the values inside the braces, and remove the braces, with the string value of your API KEY.

The second way to add your API KEY would be to directly add it inside the options function, inside the headers under "x-api-key" which is in the api.meta.js file, which is inside the server folder, this is the file path:
```
api-project/server/routes/api.meta.js
```

now that your API KEY has been added you should have access to the data

## Future Development
This is by no means a completed project, rather a prototype of an idea. There is still much that can be done, and inproved upon. The UI doesn't look polished at all, I could have incorporated more of the built in methods from the Metaphor api, I could have used some version of a sorting algorithm(I'm a fan of merge sort, which has a time complexity of O(n log n)). 

## In Closing
I hope this project demonstrates my current skills, and future potential. I am a hard worker and willing learner. I welcome constructive criticism, as I know I still have much to learn. I know when given an opportunity to prove my worth, I would rise to the challenge. Thank you so much for your consideration!

## Created By:
Nick Adams

