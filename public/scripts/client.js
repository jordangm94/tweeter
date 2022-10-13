/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// This is practice data, but the information points in this object are what we will pass into our tweet template below.

// CRUCIAL Note: All functions and function call must be placed within document ready. Functions cannot work with DOM objects if page not loaded.
$(document).ready(function() {
  const renderTweets = function(tweets) {
    //Loops through array of tweet objects, each value will be an individual tweet object with user information.
    for (let value of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(value);
      // takes return value and appends it to the tweets container
      $('.tweets-timeline').append($tweet);
    }
  };
  //This function creates a new tweet element by taking the data passed to it from above and passing the data points into specific area of the tweet template, using template literals.
  //We took this HTML straight from our initial index.html file and put it here, that way we can pass any tweets information and they can be made to appear as the tweet template.
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
      <div class="day-counter">${timeago.format(tweetdata.created_at)}</div>
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
  };

  //The next line uses JQuery to target the tweet submit form, listen for submit event using .submit().
  $("#submit-tweet-form").submit(function(event) {
    //This next line prevents the submitting from making a post request to /tweets.
    event.preventDefault();
    //Next we are going to seralize the data so that it is "encoded" into a string that the browser can understand.
    const formData = $(this).serialize();
    //Next we use AJAX, we pass it the method, form data and which URL we are making this post request to.
    $.ajax({
      method: "POST",
      data: formData,
      url: "/tweets"
      //Using Ajax allows us to send the tweet out asynchronously; hence, we do not need a page refresh!
    });
  });

  //With this function we are using AJAX to make a GET request to/tweets asynchronously so we will not need a page refresh.
  //Once we get the /tweets page, we will receive the tweets in an array, we pass those tweets(response) into our renderTweet function. 
  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      dataType: "json",
      url: "/tweets",
      success: function(response) {
        renderTweets(response);
      }
    });
  };
  loadTweets();
});
