Installing 

If you want nightwatch globally:

npm install -g nightwatch

For this repo:

Clone this mofo down
npm install
To run the sample test for chrome:

./node_modules/.bin/nightwatch/ tests/hometosponsors.js -c "config/live.json" -e chrome

To run the sample test for phantomjs:

./node_modules/.bin/nightwatch/ tests/hometosponsors.js -c "config/live.json" -e phantomjs
