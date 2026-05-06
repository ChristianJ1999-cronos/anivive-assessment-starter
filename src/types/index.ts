export type ActivityItem = {
  id: string;
  petName: string;
  message: string;
  detail?: string;
  timestamp: string;
  type: "appointment" | "prescription" | "result" | "payment";
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
};
