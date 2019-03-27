import { Component, AfterViewInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  
  readonly MODAL_ID = 'fooModal';
  name = 'Angular';
  htmlText = `
  <h3 class=\"fooClass\" >TITLE<\/h3>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  <h4 class=\"fooClass\"> Lorem Ipsum is simply dummy text \"foooooobar\".<\/h4>`;

  constructor(
    private _modalSrv: NgxSmartModalService
  )
  {}

  ngAfterViewInit(){
    const data = {htmlText:this.htmlText};
    this._modalSrv.setModalData(data, this.MODAL_ID);
  }

  openModal(){
    this._modalSrv.open(this.MODAL_ID);
  }

  closeModal(){
    this._modalSrv.close(this.MODAL_ID);
  }
}
