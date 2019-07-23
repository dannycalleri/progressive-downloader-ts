export interface Downloader {
  download: (src: string) => Promise<string>;
}