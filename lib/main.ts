interface block {
  hash: string;
  timeStamp: string;
  data: any;
  text: string | null;
}

export class Block {
  address: string;
  blocks: block[];
  constructor(data: any = []) {
    this.address = `0x${Math.floor(Math.random() * 999999999999)}`;

    if (data.length === undefined) {
      const arrData = [data];
      const nd: block[] = [];
      arrData?.flatMap((d: any, i: number) => {
        const obj: block = {
          hash: `${Math.floor(Math.random() * 999999999999)}`,
          timeStamp: new Date().toDateString(),
          data: d,
          text: i === 0 ? "first block" : null,
        };
        nd.push(obj);
      });
      this.blocks = nd;
    } else if (typeof data.length === "number") {
      if (typeof data === "string") {
        const arrData = [data];
        const nd: block[] = [];
        arrData?.flatMap((d: any, i: number) => {
          const obj: block = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text: i === 0 ? "first block" : null,
          };
          nd.push(obj);
        });

        this.blocks = nd;
      } else if (typeof data === "object") {
        const nd: block[] = [];
        data?.flatMap((d: any, i: number) => {
          const obj: block = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text: i === 0 ? "first block" : null,
          };
          nd.push(obj);
        });

        this.blocks = nd;
      } else if (data === "" || data === undefined) {
        this.blocks = [];
      } else {
        this.blocks = [];
      }
    } else {
      this.blocks = []
    }

    return this;
  }

  add(data: any, text: string | null = null) {
    if (data.length === undefined) {
      const arrData = [data];
      const nd: block[] = [];
      arrData?.flatMap((d: any) => {
        const obj: block = {
          hash: `${Math.floor(Math.random() * 999999999999)}`,
          timeStamp: new Date().toDateString(),
          data: d,
          text,
        };
        nd.push(obj);
      });
      this.blocks = [...this.blocks, ...nd];
    } else if (typeof data.length === "number") {
      if (typeof data === "string") {
        const arrData = [data];
        const nd: block[] = [];
        arrData?.flatMap((d: any, i: number) => {
          const obj: block = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text,
          };
          nd.push(obj);
        });

        this.blocks = [...this.blocks, ...nd];
      } else if (typeof data === "object") {
        const nd: block[] = [];
        data?.flatMap((d: any, i: number) => {
          const obj: block = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text,
          };
          nd.push(obj);
        });

        this.blocks = [...this.blocks, ...nd];
      }
    }
  }
}
