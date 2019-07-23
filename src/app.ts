import createDownloader from './downloaderFactory';

const root = document.getElementById('root');

const startApp = async () => {
  try {
    const anchor = document.querySelector('#root a');
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = "Loading...";
    root.replaceChild(loading, anchor);

    const downloader = createDownloader();
    const downloadURL = await downloader.download('files/book.pdf');
    const button = document.createElement('a');
    button.href = downloadURL;
    button.download = "book.pdf";
    button.innerHTML = "Download";

    root.replaceChild(button, loading);
  } catch(err) {
    console.error(err);
  }
}

startApp();
