import MemoryDownloader from "./downloaders/MemoryDownloader";
import FileSystemDownloader from "./downloaders/FileSystemDownloader";
import SimpleDownloader from "./downloaders/SimpleDownloader";
import { Downloader } from "./downloaders/Downloader";

export default function createDownloader(): Downloader {
  /**
   * First of all checks if streams and fetch are available, then
   * checks for FileSystem APIs availability, falling back to
   * an in-memory implementation.
   * If streams and fetch are not available,
   * returns an "identity" implementation.
   *
   * FileSystemDownloader and Memory use CustomEvent as well, that is
   * supported by every browser supporting ReadableStreams,
   * that's why I'm not checking explicitly
   */
  const requestFileSystem = (window as any).requestFileSystem ||
    (window as any).webkitRequestFileSystem;
  const fetchAndStreamsExists = !!(window as any).fetch &&
    !!(window as any).ReadableStream;

  if(fetchAndStreamsExists) {
    if (requestFileSystem) {
      return new FileSystemDownloader();
    } else {
      return new MemoryDownloader();
    }
  } else {
    return new SimpleDownloader();
  }
};
