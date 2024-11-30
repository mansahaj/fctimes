// pdfFiles.ts
export interface PdfFile {
    title: string;
    file: string;
    preview: string;
  }
  
  export const pdfFiles: PdfFile[] = [
    { title: 'October 2024', file: '/news/october_news.pdf', preview: '/previews/month1_preview.jpg' },
    { title: 'November 2024', file: '/news/october_news.pdf', preview: '/previews/november_preview.jpg' },
  ];