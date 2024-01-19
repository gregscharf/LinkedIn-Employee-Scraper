# LinkedIn Employee Scraper
Scrape employees from the People section of a company's LinkedIn profile using the Web Developer Tools Console... because none of the remote tools work anymore afaict. 
Essentially this will perform an automated lazy loading of the page and when that's done pull all the username's from the DOM.  It then prints that list as console output.

## Issues
The copy() function meant to automatically copy the results to the clipboard does not currently work when called from setTimer, so either manually copy/paste all the users from the console output or run the body of the scrape() function by itself after lazy loading of the entire page has finished.

## Usage
    - Navigate to a company's LinkedIn page and click on People.
    - Open the Browser's Web Developer Tools, paste the javascript into the console and click Run.
    
![firefox example](./scrape.png)
