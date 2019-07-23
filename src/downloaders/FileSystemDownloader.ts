import uuidv1 from 'uuid/v1';
import { Downloader } from "./Downloader";

export default class FileSystemDownloader implements Downloader {
  download(src: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // util handler used below
      const errorHandler = (err: any) => {
        console.error(err);
        reject(err);
      };

      // accessing FileSystem APIs
      const requestFileSystem = (window as any).requestFileSystem ||
        (window as any).webkitRequestFileSystem;

      const onInitFs = (fileSystem: any) => {
        console.log('Opened file system: ' + fileSystem.name);
        // secure access to file before downloading data
        fileSystem.root.getFile(`${uuidv1()}.pdf`, {create: true}, (fileEntry: any) => {
          fetch(src).then(response => {
            // response.body is a readable stream.
            // Calling getReader() gives us exclusive access to
            // the stream's content
            var reader = response.body!!.getReader();
            var bytesReceived = 0;

            const processResult = async (result: any): Promise<any> => {
              if (result.done) {
                console.log("Fetch complete");
                // resolving with download link once all data has been downloaded
                resolve(fileEntry.toURL());
                return;
              }

              await this.writeChunkOnFile(fileEntry, result.value);
              bytesReceived += result.value.length;
              console.log(`Just received ${result.value.length} bytes`);
              console.log('Received', bytesReceived, 'bytes of data so far');

              return reader.read().then(processResult);
            }

            return reader.read().then(processResult);
          });
        }, errorHandler);
      }

      requestFileSystem(
        (window as any).TEMPORARY,
        5*300*1024*1024 /*300MB*/,
        onInitFs,
        errorHandler
      );
    });
  }

  private async writeChunkOnFile(fileEntry: any, data: Uint8Array) {
    return new Promise((resolve, reject) => {
      fileEntry.createWriter((fileWriter: any) => {
        fileWriter.onwriteend = (e: Event) => {
          resolve();
          console.log('Write completed.');
        };

        fileWriter.onerror = (e: Event) => {
          reject();
          console.log('Write failed: ' + e.toString());
        };
        console.log(`written so far = ${fileWriter.length}`);
        fileWriter.seek(fileWriter.length);

        // Create a new Blob and write it.
        const blob = new Blob([data], {type: 'application/octet-stream'});

        fileWriter.write(blob);
      }, (err: any) => {
        console.error(err);
        throw new Error(err);
      });
    });
  }
}