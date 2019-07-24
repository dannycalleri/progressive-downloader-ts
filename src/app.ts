import createDownloader from './downloaderFactory';

// this would be normally available as metadata of the file
const TOTAL_BYTES = 2074956491;

const root = document.getElementById('root');

const startApp = async () => {
  try {
    const anchor = document.querySelector('#root a');
    const loading = document.createElement('div');
    loading.className = 'loading';
    const loadingString = "Downloading:";
    loading.innerHTML = loadingString;
    root.replaceChild(loading, anchor);

    const downloader = createDownloader();
    downloader.addEventListener("progress", function(e: any) {
      const rate = Math.floor((e.detail.bytesReceived / TOTAL_BYTES) * 100);
      loading.innerHTML = `${loadingString} ${rate}%`;
    });
    const downloadURL = await downloader.download('files/package.zip');
    const button = document.createElement('a');
    button.href = downloadURL;
    button.download = "package.zip";
    button.innerHTML = "Save";

    root.replaceChild(button, loading);
  } catch(err) {
    console.error(err);
  }
}

startApp();
