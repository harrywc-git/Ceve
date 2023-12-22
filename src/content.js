// Plan is Simple:
// Inject JS code into current tab to scrape data. Send that data over to background service via chrome api

// The function to be injected
// TODO: Write different functions for different job board sites. AKA indeed scraper, linkedin scraper etc...
function scrapeData() {
    const paragraphs = document.querySelectorAll('p');
    const scrapedData = Array.from(paragraphs).map(paragraph => paragraph.textContent.trim());
    
    chrome.runtime.sendMessage({ data: scrapedData });
}

// Get current tab
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //TODO: Have a switch case for various job board sites to use different scraping code tailored to that site.
    if (tabs.length > 0) {
        const currentTabId = tabs[0].id;
        chrome.scripting.executeScript({
            target: { tabId: currentTabId },
            function: scrapeData,
        });
    }
});

  