import { Downloader } from "./Downloader";
import { DelegatedEventTarget } from "../DelegatedEventTarget";

export default class SimpleDownloader extends DelegatedEventTarget implements Downloader {
  download(src: string): Promise<string> {
    return Promise.resolve(src);
  }
}