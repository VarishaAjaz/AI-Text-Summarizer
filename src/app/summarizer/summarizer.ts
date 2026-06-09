import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'summarizer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './summarizer.html',
  styleUrl: './summarizer.css'
})
export class SummarizerComponent {
  inputText: string = '';
  result: string = '';
  loading: boolean = false;
  copied: boolean = false;

  // private backendUrl = 'http://localhost:3000/summarize';
  private backendUrl = 'http://ai-text-summarizer-production-49c4up.railway.app/summarize';

  constructor(private http: HttpClient) {}

  summarize() {
    if (!this.inputText.trim()) return;
    this.loading = true;
    this.result = '';

    this.http.post<any>(this.backendUrl, { text: this.inputText }).subscribe({
      next: (res) => {
        this.result = res.summary;
        this.loading = false;
      },
      error: (err) => {
        this.result = 'Error: ' + err.message;
        this.loading = false;
      }
    });
  }

  copyResult() {
    navigator.clipboard.writeText(this.result);
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }
}