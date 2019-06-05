export const capoeiraSongBot: string = `
# 🤖 CapoeiraSongBot
## https://www.capoeira.chat

The CapoeiraSongBot is a Telegram chatbot which enables users to access a total of 2166 capoeira songs through the interface of their Telegram application on mobile and/or desktop. It understands English and Portuguese language, supports a whole lot of different inputs (Do you know how many types of quotation marks are used in the world?) and returns lyrics, songs and helpful information based on a set of predefined calculations.

Under the hood lie two microservices - a web-scraper and a web-crawler which were configured to find either random or specific song lyrics based on the user's request. The bot parses all incoming messages and filters them for predefined keywords to provide answers as quick as possible. If it detects that any of the message's words are set within "quotation marks", it activates the web-scraper to find specific music with the queried keyword in the title. If no "quotation marks" are to be found, it checks for a list of predefined keywords, triggering the web-crawler which returns a random Capoeira song within miliseconds.

The bot was built in Typescript on a NodeJs/Express server and is publicly accessible via @CapoeiraSongBot in the Telegram app.
`

export const stockOverflow: string = `
# 🏦 Stock Overflow (lol)
## https://www.stockoverflow.app

Stockoverflow is an SPA web-application which provides information on global stock development and trending news. Users can define their portfolio and stocks they own, as well as create a watchlist to collect info on stocks they might want to purchase in the future. The application collects relevant news on market development and allows users to set email notifications for breaking news.

The frontend is built in ReactJs while the dedicated backend is build in NodeJs with a dedicated MongoDB. Both apps are written in Typescript and use the NewsAPI and Alphavantage stock API.
`

export const iaiaioio: string = `
# 🤸🏽 Iaia, Ioio
## https://www.iaiaio.io

Iaia, Ioio (portuguese abbreviation for "Senhora, Senhor") is a concept for an iOS application which serves as a diary and notebook for aspiring Capoeira practitioners. At the moment it is just a concept with a kickass domain namespace. In the future it will contain features like:
- User account
- Notebook
- Song book and song finder
- ...

It currently redirects to the Capoeira.chat website.
`