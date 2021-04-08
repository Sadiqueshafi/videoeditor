import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
  // inputs:['videos']
})
export class VideoListComponent implements OnInit {
  @Input() videos:any;
  @Output() selectedVideos = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(Video:Video){

    this.selectedVideos.emit(Video)
  }

}
