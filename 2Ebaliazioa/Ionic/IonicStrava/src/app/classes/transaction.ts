export class Transaction {
    id: number;
    endpoint: string;
    method: string;
    payload: string;
    timestamp: string;

    constructor(id: number, endpoint: string, method: string, payload: string, timestamp: string) {
        this.id = id;
        this.endpoint = endpoint;
        this.method = method;
        this.payload = payload;
        this.timestamp = timestamp;
    }
}
