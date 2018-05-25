import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import printjs from 'print-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  iframe: HTMLElement = undefined;
  document = undefined;

  ngOnInit(): void {

    this.document = window.document;
  }

  print() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:3000', false);
    req.send(null);
    if (req.status === 200) {


      this.invokePrint({
        data: req.responseText
      });
      // this.invokeDownload({
      //   data: req.responseText
      // });
    }

  }
  invokeDownload(response) {
    const blob = new Blob([response.data], {
      type: 'application/pdf'
    });

    // const blob = new Blob(['1,2,3,Something Test'], { type: 'text/csv' });
    // console.log('blob', blob);
    const link = this.document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'file.pdf';
    link.click();
  }




  invokePrint(response) {
    const blob = new Blob([response.data], {
      type: 'application/pdf'
    });
    // const blob = new Blob(['1,2,3,Something Test'], { type: 'text/csv' });

    const url = window.URL.createObjectURL(blob);

    if (this.iframe) {
      this.iframe.remove();
    }

    this.iframe = this.document.createElement('iframe');
    this.iframe.style.display = 'none';

    this.iframe.onload = () => {
      setTimeout(() => {
        this.iframe.focus();
        this.iframe['contentWindow'].print();
      });
    };

    this.document.body.appendChild(this.iframe);
    this.iframe['src'] = url;
  }


}
