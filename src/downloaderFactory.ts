import MemoryDownloader from "./downloaders/MemoryDownloader";
import FileSystemDownloader from "./downloaders/FileSystemDownloader";
import { Downloader } from "./downloaders/Downloader";

export default function createDownloader(): Downloader {
  /**
   * Returns
   */
  const requestFileSystem = (window as any).requestFileSystem ||
    (window as any).webkitRequestFileSystem;
  if (requestFileSystem) {
    return new FileSystemDownloader();
  } else {
    return new MemoryDownloader();
  }
};
