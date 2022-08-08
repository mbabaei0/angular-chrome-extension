import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color = 'red';
  title = 'persianGrammarly';

  public colorize() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id! },
        func: updateBackgroundColor,
        args: [this.color]
      });
    });
  }
}

const updateBackgroundColor = (color: string) => document.body.style.backgroundColor = color;
