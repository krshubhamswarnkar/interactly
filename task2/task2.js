const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page);
  console.log("creating folder");
  await recorder.start('./report/video/simple.mp4'); // supports extension - mp4, avi, webm and mov
  console.log("opening website");
  await page.goto('https://interactly.video');
  // Scroll down to capture the entire page
  await page.setViewport({
    width: 1200,
    height: 800
});

await autoScroll(page);


  // Wait for a short time to ensure content loads after scrolling
 
   console.log("opened address");
  await recorder.stop();
  await browser.close();
})();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}