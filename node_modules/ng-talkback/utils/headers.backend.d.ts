export default class Headers {
    static read(headers: any, headerName: string): any;
    static write(headers: any, headerName: string, value: string, type: "req" | "res"): void;
}
