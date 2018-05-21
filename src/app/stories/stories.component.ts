import { Component, OnInit } from '@angular/core';

import {Story} from '../story';
import { StoryService } from '../story.service';



@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})



export class StoriesComponent implements OnInit {
 
  
  stories: Story[];
  // Storyt = object
  
    ngOnInit() {
    this.getStories();
  }
  selectedStory: Story;

onSelect(story: Story): void {
  this.selectedStory = story;
  console.log(story.name);
}

getStories(): void {
  console.log('here');
  this.storyService.getStories()
  .subscribe(stories => this.stories = stories);
}

  
 
  constructor(private storyService: StoryService) { }
  



}
