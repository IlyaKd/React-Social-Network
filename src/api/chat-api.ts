let subcribers = [] as SubcriberType[];

let ws: WebSocket | null;

const closeHandler = () => {
  console.log("CLOSE WS");
  setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subcribers.forEach((s) => s(newMessages));
};

function createChannel() {
  ws?.removeEventListener("close", closeHandler);
  ws?.close();

  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", messageHandler);
}

export const chatAPI = {
  start() {
    createChannel();
  },

  stop() {
    subcribers = [];
    ws?.removeEventListener("close", closeHandler);
    ws?.removeEventListener("message", messageHandler);
    ws?.close();
  },

  subscribe(callback: SubcriberType) {
    subcribers.push(callback);
    return () => {
      subcribers = subcribers.filter((s) => s !== callback);
    };
  },

  unsubscribe(callback: SubcriberType) {
    subcribers = subcribers.filter((s) => s !== callback);
  },

  sendMessage(message: string) {
    ws?.send(message);
  },
};

type SubcriberType = (messages: ChatMessageType[]) => void;

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};