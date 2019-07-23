import { Downloader } from "./Downloader";

export default class SimpleDownloader implements Downloader {
  download(src: string): Promise<string> {
    return Promise.resolve(src);
  }
}