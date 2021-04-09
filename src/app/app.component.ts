import { Component, OnInit } from '@angular/core';
import {Video} from './video'
import { VideoserviceService } from './videoservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'videosUpload';
  selectedvideo : Video[]=[]
  videos:Video[]=[];
  hiddnevideo:boolean =true
constructor(private service:VideoserviceService) {

}
ngOnInit(){
  this.service.getVideo("/api/videos", { query: { status: "Active" } }).subscribe(res =>
    {console.log(res);this.videos=res})
}
  onSelectedVideo(video:any){
    this.selectedvideo =video;
    console.log(this.selectedvideo)
    this.hiddnevideo= true
    }

    onSubmitAddVideo(video:Video){
      console.log(video)
      this.service.addvideo("/api/videos",video).subscribe(resnewvideos=>{
        this.videos.push(resnewvideos);
        this.selectedvideo =resnewvideos
      })
    }

    newVideo(){
      this.hiddnevideo =false
    }
}
