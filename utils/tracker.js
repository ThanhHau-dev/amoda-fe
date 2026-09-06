const STORAGE_KEY = "amoda_web_stats";
const MAX_RECORDS = 40000;

const readRaw = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const pushRecord = (record) => {
  if (typeof window === "undefined") return;
  try {
    const list = readRaw();
    list.push(record);
    while (list.length > MAX_RECORDS) list.shift();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // Quota exceeded / private mode: bỏ qua, không làm hỏng luồng web
  }
};

export const recordPageView = (path) => {
  pushRecord({ type: "view", t: Date.now(), p: path });
};

export const recordAction = (path) => {
  pushRecord({ type: "action", t: Date.now(), p: path });
};

export const readStats = () => readRaw();

export const clearStats = () => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // noop
  }
};