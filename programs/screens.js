const puppeteer = require('puppeteer')
var fs = require('fs');

const websites = JSON.parse(fs.readFileSync('./src/data/projects.json', 'utf8'))

websites.map(website => {
    console.log(website.slug)
    if (!fs.existsSync(`./screenshots/${website.slug}`)) {
        fs.mkdirSync(`./screenshots/${website.slug}`)
    }
})

let browser
let page

(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
    page = await browser.newPage()


        console.log(websites[4].slug)

        for (i = 1; i < 31; i++) {
            console.log(i)

            await page.setViewport({
                width : 300 + (i * 50),
                height : 800
            })

            await page.goto(websites[4].link, { waitUntil: 'networkidle0', timeout: 100000 })

            await page.screenshot({
                path: `./screenshots/${websites[4].slug}/${websites[4].slug}_${i}.jpg`,
                fullPage: true 
            })
        }
    
})()
  .catch(err => console.error(err))
  .finally(async () => await browser.close())