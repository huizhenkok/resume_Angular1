import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',  // 你的文件叫 app.html
  styleUrl: './app.css'       // 你的文件叫 app.css
})
export class AppComponent {
  title = 'my-resume-angular';
}
