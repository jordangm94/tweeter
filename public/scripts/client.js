/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}



$(document).ready(function() {
const $tweet = createTweetElement(data);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-timeline').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});

const createTweetElement = function(tweetdata) {
const element = `
<article class="tweet-box">
<header class="tweet-header">
  <div class="tweet-userphoto-username">
    <div>
      <img src=${tweetdata.user.avatars}>
      <label>${tweetdata.user.name}</label>
    </div>
    <label>${tweetdata.user.handle}</label>
  </div>
  <div class="tweet-container">
    <p class="tweet-user-text">
    ${tweetdata.content.text}
    </p>
  </div>
  <footer class="tweet-footer">
    <div class="day-counter">${tweetdata.created_at}</div>
    <div class="social-icons">
      <i class="fa-solid fa-flag">  </i>
      <i class="fa-solid fa-heart">  </i>
      <i class="fa-solid fa-retweet">  </i>
    </div>
    </footer>
</header>
</article>
`;
return element;
}