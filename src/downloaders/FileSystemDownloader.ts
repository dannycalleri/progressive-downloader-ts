import uuidv1 from 'uuid/v1';
import { Downloader } from "./Downloader";

export default class FileSystemDownloader implements Downloader {
  download(src: string): Promise<string> {
    const that = this;
    return new Promise((resolve, reject) => {
      const errorHandler = (err: any) => {
        console.error(err);
        reject(err);
      };

      const requestFileSystem = (window as any).requestFileSystem ||
        (window as any).webkitRequestFileSystem;
      function onInitFs(fileSystem: any) {
        console.log('Opened file system: ' + fileSystem.name);
        fileSystem.root.getFile(`${uuidv1()}.pdf`, {create: true}, function(fileEntry: any) {
          fetch(src).then(response => {
            // response.body is a readable stream.
            // Calling getReader() gives us exclusive access to
            // the stream's content
            var reader = response.body!!.getReader();
            var bytesReceived = 0;

            // read() returns a promise that resolves
            // when a value has been received
            return reader.read().then(async function processResult(result): Promise<any> {
              // Result objects contain two properties:
              // done  - true if the stream has already given
              //         you all its data.
              // value - some data. Always undefined when
              //         done is true.
              if (result.done) {
                console.log("Fetch complete");
                resolve(fileEntry.toURL());
                return;
              }

              await that.writeOnFileEntry(fileEntry, result.value);
              bytesReceived += result.value.length;
              console.log(`Just received ${result.value.length} bytes`);
              console.log('Received', bytesReceived, 'bytes of data so far');

              // Read some more, and call this function again
              return reader.read().then(processResult);
            });
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

  private async writeOnFileEntry(fileEntry: any, data: Uint8Array) {
    return new Promise((resolve, reject) => {
      fileEntry.createWriter(function(fileWriter: any) {
        fileWriter.onwriteend = function(e: Event) {
          resolve();
          console.log('Write completed.');
        };

        fileWriter.onerror = function(e: Event) {
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