# Tripple Tweet

Tripple Tweet is a simple nodejs app that displays tweets in 3 fluid layouts.

## Bootstrap app

	* Install back-end dependencies with '```npm install```
	* Install front-end packages with ```bower install```
	* Lunch server with ```node server/app.js``` command
	* Load app via http://localhost:8080/

<br/ >

## Features

	* Sortable columns buy drag-drop

<br/ >

## Main dependencies

	* Twitter API client for the Twitter REST and Streaming API's
	```https://www.npmjs.com/package/twitter```
	* Sortable a minimalist JS lib for reorder drag-and drop lists
	```https://github.com/RubaXa/Sortable```

<br/ >

## Configuration

	* For twitter authentication you will need to complete ```server/middlewares/auth.json``` file
```
	{
		"TWITTER_CONSUMER_KEY":"",
		"TWITTER_CONSUMER_SECRET":"",
		"TWITTER_ACCESS_TOKEN_KEY":"",
		"TWITTER_ACCESS_TOKEN_SECRET":""
	}
```
