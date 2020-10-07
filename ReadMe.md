![Pull-Req](https://raw.githubusercontent.com/TheWebDevsBerlin/pull-req/c680fa59263aa2f8dfecf3f1f8185baff2550210/client/src/images/PullReqIcon.svg)

 <hr>
Pull-request is a collaboration platform that allows users to browse GitHub repositories and connect with the owner to offer assistance on their project.
 <br>

>"Pull-request is like a dating app-except you end up working with your matches instead of sleeping with them." - User
 
 
The app only displays projects labeled as <strong>'Help Wanted'</strong> to encourage this collaboration.
<hr>

## How it works 
The UI is similar to dating app designs in that the homepage is populated with potential matches that the user can interact with via a swipe interface. Once the user finds a project they would like to collaborate on they send a message, or "Pull-request", to the owner. This message arrives as a comment on the GitHub repo issue page and contains a custom URL that directs the repo owner to a chat session with our original user in the Pull-request app.  
 
Once the project owner accepts the pull-request, the two users are merged and the journey can begin ❣️
 
## Dependencies and tools 🛠️
 
Pull-request utilizes the GitHub API and the ocktokit/rest api client for data. Socket.io is used to create chat sessions and Material-ui is used for design elements. 
 
### List of Pull-request's dependencies include:
* @octokit/rest
* @material-ui/core
* @material-ui/icons
* github
* express
* express-session
* mongoose
* node-sass-middleware
* passport
* passport-github
* socket.io
* react-tinder-card
* react-dom

## Interface
The app is optimized for mobile and desktop devices and is fully responsive in all formats. The interface is designed to be clean and accessible to give users an intuitive experience.

## ToDos

* Message lazy loading
* User type - Looking for help 
* Light and Dark theme settings
* Allow code snippets in chat
* Filter options for language, tools and labels

## Installation


```npm
npm install 
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
[Gilad Tsabar](https://github.com/giladt) 
& [Daniel Parry](https://github.com/DanP20) 


## License
[MIT](https://choosealicense.com/licenses/mit/)