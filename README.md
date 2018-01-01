# Giphy-API-Project

## Technologies used to create site

<li>HTML5</li>
<li>CSS</li>
<li>Bootstrap 4.0.0-beta</li>
<li>Javascript</li>
<li>JQuery</li>
<li>Giphy API</li>

## How to use the Giphy API
<p>To learn about the Giphy API and the various API parameters, read the <a href="https://developers.giphy.com/docs/" target="_blank">Giphy API documentation</a>.</p>
<p>GIPHY requires developers to use a key to access API data. To use the GIPHY API, you'll need a (free) Giphy account. Then, you can obtain a key by creating an app.</p>
<p>Ensure that you switch the protocol in the query URL from http to https, or the app might not work properly when it is deployed.</p>

## How to use site

### Selecting an existing athlete
<ol>
	<li>Click a button in the <b>Select an athlete</b> section.</li>
	<li>When you click a button, 10 static, non-animated gif images related to the athlete you chose are retrieved from the Giphy API and placed in the <b>Gif search results</b> section.</li>
</ol>

### Adding your own athlete
<ol>
	<li>In the <b>Add your favorite athlete</b> section, enter the first <b>and</b> last name of the athlete you want to add. For example, Kobe Bryant.</li>
	<li>Click the + icon.</li>
		<info>A button is created for the athlete you entered and added to the <b>Select an athlete</b> section.</info>
	</li>Click the button for your athlete</li>
	<li>When you click a button, 10 static, non-animated gif images related to the athlete you chose are retrieved from the Giphy API and placed in the <b>Gif search results</b> section.</li>
</ol>

### Playing and pausing gifs
<p>Click a gif image to play or animate the gif. Click the image again to pause.</p>

### Gif rating
<info>The gif rating (for example, G or PG) is displayed under each gif. This data is retrieved from the Giphy API.</info>
