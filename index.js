  var prompt = require('prompt');
  var request = require('request');
  var cheerio = require('cheerio');
  var colors = require('colors');
function run(){
  prompt.start();
  prompt.get(['How much ?', 'What do you want to convert from?', 'What do you want to convert to?'], function (err, result) {
    // var much = result[Object.keys(result)[0]];
    var one = result[Object.keys(result)[1]].toUpperCase(); // || are for tests
    var two = result[Object.keys(result)[2]].toUpperCase();
    if (!isNaN(parseFloat(result[Object.keys(result)[0]]))) {
      console.log('Thank you for using this , Plase wait a moment...');
      request({
        method: 'GET',
        url: 'http://www.xe.com/currencyconverter/convert/?Amount=' + result[Object.keys(result)[0]] + '&From=' + one + '&To=' + two,
      }, function (err, response, body) {
        var test_if_title = false;
        if (err) return console.error(err);
        // Tell Cherrio to load the HTML
        $ = cheerio.load(body);
        var title = $('.wrapper .bodyContent .quickFixesTopModule .uccResultContainer #ucc-container .uccResultAmount').eq(0).text();
        if (title == 0.00) {
          console.log(colors.red('⊙﹏⊙  Something went wrong, maybe you put wrong data  ⊙﹏⊙'));
          return null;
        } else {
          console.log("\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n•_•)        ( ﾟoﾟ)        (•_•  \n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n \n" + colors.yellow(result[Object.keys(result)[0]]) + ' ' + one.bgMagenta + ' is equal to '.white + '('.green + title.green + ') '.green + two.bgMagenta + "\n \n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n•_•)        ( ﾟoﾟ)        (•_•\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  \n");
          return title;
      }
      });

    } else {
      console.log(colors.red('⊙﹏⊙   Type error , one the arguments was wrong , try again'));
      return null;
    }
  });
}
function toTest(){
    var much = result[Object.keys(result)[0]]  || 100;
    var one = result[Object.keys(result)[1]].toUpperCase() || "USD"; // || are for tests
    var two = result[Object.keys(result)[2]].toUpperCase() || "BAM";
    if (!isNaN(parseFloat(result[Object.keys(result)[0]]))) {
      console.log('Thank you for using this , Plase wait a moment...');
      request({
        method: 'GET',
        url: 'http://www.xe.com/currencyconverter/convert/?Amount=' + much + '&From=' + one + '&To=' + two,
      }, function (err, response, body) {
        var test_if_title = false;
        if (err) return console.error(err);
        // Tell Cherrio to load the HTML
        $ = cheerio.load(body);
        var title = $('.wrapper .bodyContent .quickFixesTopModule .uccResultContainer #ucc-container .uccResultAmount').eq(0).text();
        if (title == 0.00) {
          console.log(colors.red('⊙﹏⊙  Something went wrong, maybe you put wrong data  ⊙﹏⊙'));
          return null;
        } else {
          console.log("\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n•_•)        ( ﾟoﾟ)        (•_•  \n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n \n" + colors.yellow(result[Object.keys(result)[0]]) + ' ' + one.bgMagenta + ' is equal to '.white + '('.green + title.green + ') '.green + two.bgMagenta + "\n \n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n•_•)        ( ﾟoﾟ)        (•_•\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  \n");
          return title;
      }
      });

    } else {
      console.log(colors.red('⊙﹏⊙   Type error , one the arguments was wrong , try again'));
      return null;
    }

}
module.exports = toTest;
run();
