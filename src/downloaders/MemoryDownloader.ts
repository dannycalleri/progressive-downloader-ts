import { Downloader } from "./Downloader";
import { DelegatedEventTarget } from "../DelegatedEventTarget";

function concatenate(resultConstructor: any, ...arrays: any) {
  let totalLength = 0;
  for (let arr of arrays) {
      totalLength += arr.length;
  }
  let result = new resultConstructor(totalLength);
  let offset = 0;
  for (let arr of arrays) {
      result.set(arr, offset);
      offset += arr.length;
  }
  return result;
}

export default class MemoryDownloader extends DelegatedEventTarget implements Downloader {
  download(src: string): Promise<string> {
    return new Promise((resolve) => {
      fetch(src).then(response => {
        // response.body is a readable stream.
        // Calling getReader() gives us exclusive access to
        // the stream's content
        var reader = response.body!!.getReader();
        var bytesReceived = 0;
        let content: any = [];

        const processResult = (result: any): any => {
          // Result objects contain two properties:
          // done  - true if the stream has already given
          //         you all its data.
          // value - some data. Always undefined when
          //         done is true.
          if (result.done) {
            console.log("Fetch complete");
            const typedArray = concatenate(Uint8Array, ...content);
            const objectURL = URL.createObjectURL(
              new Blob([typedArray.buffer], {type: 'application/octet-stream'})
            );
            resolve(objectURL);
            return;
          }

          content.push(result.value);
          // result.value for fetch streams is a Uint8Array
          bytesReceived += result.value.length;
          const event = new CustomEvent("progress", {
            detail: {
              bytesReceived,
            }
          });
          this.dispatchEvent(event);
          console.log('Received', bytesReceived, 'bytes of data so far');

          // Read some more, and call this function again
          return reader.read().then(processResult);
        }

        // read() returns a promise that resolves
        // when a value has been received
        return reader.read().then(processResult);
      });
    });
  }
}