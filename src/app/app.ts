import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummarizerComponent } from './summarizer/summarizer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SummarizerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ai-summarizer-app');
}
