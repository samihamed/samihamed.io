export const capoeiraSongBot: string = `
### https://www.capoeira.chat

This Telegram chatbot enables its users to access a total of 2166 Capoeira songs through the interface of their Telegram application on mobile and/or desktop. It understands English and Portuguese input, supports a whole lot of different commands and returns lyrics, songs and helpful information based on a set of predefined calculations.

The bot was built in Typescript on a NodeJs/Express server and is publicly accessible via @CapoeiraSongBot in the Telegram app.
`;
// Under the hood lie two microservices - a web-scraper and a web-crawler which were configured to find either random or specific song lyrics based on the user's request. The bot parses all incoming messages and filters them for predefined keywords to provide answers as quick as possible. If it detects that any of the message's words are set within "quotation marks", it activates the web-scraper to find specific music with the queried keyword in the title. If no "quotation marks" are to be found, it checks for a list of predefined keywords, triggering the web-crawler which returns a random Capoeira song within miliseconds.

export const stockOverflow: string = `
### https://www.stockoverflow.app

Stockoverflow is an SPA web-application which provides information on global stock development and trending news. Users can define their portfolio and stocks they own, as well as create a watchlist to collect info on stocks they might want to purchase in the future. The application collects relevant news on market development and allows users to set email notifications for breaking news.

The frontend is built in ReactJs while the dedicated backend is build in NodeJs with a dedicated MongoDB. Both apps are written in Typescript and use the NewsAPI and Alphavantage stock API.
`;

export const gingaStore: string = `
### https://www.ginga.store

The Ginga Store is an online shop for premium organic Capoeira t-shirts which I created collaborating with designers of the Capoeira community.

With this project I tried fully automating the process of creating designs, an intuitive online-shop experience and producing organic t-shirts with recurring ad campaigns on Instagram and Facebook.

Check it out and buy a shirt if you like!

`;
