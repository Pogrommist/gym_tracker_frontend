export interface IHeadersStore {
  accessToken: string | null;
  client: string | null;
  expiry: string | null;
  uid: string | null;
}

export const loadHeadersFromLocalStorage = (): IHeadersStore => {
  const storedHeaders = localStorage.getItem("headersStore");
  return storedHeaders
    ? JSON.parse(storedHeaders)
    : {
        accessToken: null,
        client: null,
        expiry: null,
        uid: null,
      };
};

const saveHeadersToLocalStorage = (headers: IHeadersStore): void => {
  localStorage.setItem("headersStore", JSON.stringify(headers));
};

const headersStore: IHeadersStore = loadHeadersFromLocalStorage();

export const fetchWithAuthHeaders = async (
  url: string,
  options: RequestInit,
) => {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (headersStore.accessToken) {
    headers.set("access-token", headersStore.accessToken || "");
    headers.set("client", headersStore.client || "");
    headers.set("expiry", headersStore.expiry || "");
    headers.set("uid", headersStore.uid || "");
  }

  const response = await fetch(url, { ...options, headers });

  const responseHeaders = response.headers;
  headersStore.accessToken = responseHeaders.get("access-token") || null;
  headersStore.client = responseHeaders.get("client") || null;
  headersStore.expiry = responseHeaders.get("expiry") || null;
  headersStore.uid = responseHeaders.get("uid") || null;

  saveHeadersToLocalStorage(headersStore);
  return response;
};
