interface Downloadable {
  download: (src: string) => Promise<string>;
}

export type Downloader = Downloadable & EventTarget;
