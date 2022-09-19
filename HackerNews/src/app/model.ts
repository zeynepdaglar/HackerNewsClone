import { ContentItem } from "./contentitem";

export class Model {
    hide = false;
    items: ContentItem[];
    menu;

    constructor() {
        this.items = [
            {head:"Lessons I Wish I Had Learned Before I Started Teaching Differential Equations pdf", url: "github.com", points: 20, by:"Linda", time:"12 minutes", comments:36},
            {head:"Google Cloud suspended our production projects at 1am on Saturday", url: "github.com", points: 20, by:"Linda", time:"12 hours", comments:36},
            {head:"a rule from Pixar with a camera from 1961", url: "github.com", points: 20, by:"Linda", time:"12 minutes", comments:36},
            {head:"Our long, vulnerable childhoods may be the key to our success", url: "github.com", points: 20, by:"Linda", time:"12 hours", comments:36},
            {head:"Lessons I Wish I Had Learned Before I Started Teaching Differential Equations pdf", url: "github.com", points: 20, by:"Linda", time:"12 hours", comments:36},
            {head:"Google Cloud suspended our production projects at 1am on Saturday", url: "github.com", points: 20, by:"Linda", time:"12 hours", comments:36},
            {head:"Google Cloud suspended our production projects at 1am on Saturday", url: "github.com", points: 20, by:"Linda", time:"12 minutes", comments:36},
            {head:"Lessons I Wish I Had Learned Before I Started Teaching Differential Equations pdf", url: "github.com", points: 20, by:"Linda", time:"12 hours", comments:36},
            {head:"a rule from Pixar with a camera from 1961", url: "github.com", points: 20, by:"Linda", time:"12 hours", comments:36},
            {head:"a rule from Pixar with a camera from 1961", url: "github.com", points: 20, by:"Linda", time:"12 minutes", comments:36},
        ];

     this.menu = [ "new", "threads", "past", "comments",  "ask", "show", "jobs"];
        
    }
}
