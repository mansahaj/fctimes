// pdfFiles.ts
export interface PdfFile {
    title: string;
    file: string;
    preview: string;
  }
  
  export const pdfFiles: PdfFile[] = [
    { title: 'Month 1 News', file: '/news/month1_news.pdf', preview: '/previews/month1_preview.jpg' },
    { title: 'Month 2 News', file: '/news/month2_news.pdf', preview: '/previews/month2_preview.jpg' },
    { title: 'Month 3 News', file: '/news/month3_news.pdf', preview: '/previews/month3_preview.jpg' },
    { title: 'Month 4 News', file: '/news/month4_news.pdf', preview: '/previews/month4_preview.jpg' },
  ];