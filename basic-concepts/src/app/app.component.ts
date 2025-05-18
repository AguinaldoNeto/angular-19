import { Component } from "@angular/core";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { MyPageComponent } from "./my-page/my-page.component";


@Component({
  selector: 'app-root',
  imports: [MyPageComponent, HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Basic Concepts';
}
