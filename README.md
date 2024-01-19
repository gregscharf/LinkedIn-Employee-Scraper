# LinkedIn-Employee-Scraper
Scrape employees from the People section of a company's LinkedIn profile using the Web Developer Tools Console... because none of the remote tools work anymore afaict. 

## Issues
The copy() function does not currently work when called from setTimer, so either manually copy/paste all the users from the console output or run the body of the scrape function by itself after lazy loading of the entire page has finished.

## Usage
    - Navigate to a company's LinkedIn page and click on People.
    - Open the Browser's Web Developer Tools, paste the javascript into the console and click Run.
    
![firefox example](./scrape.png)
