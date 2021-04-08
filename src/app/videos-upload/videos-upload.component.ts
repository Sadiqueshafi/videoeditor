import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-videos-upload',
  templateUrl: './videos-upload.component.html',
  styleUrls: ['./videos-upload.component.css']
})
export class VideosUploadComponent implements OnInit {
  @Input() videos:any;
  public editTitle:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.editTitle = false
  }
  onTitleClick(){
    this.editTitle =true
  }

}
