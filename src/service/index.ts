interface IRequestBaseOptions {
  baseUrl: string;
}

interface IMethod {
  method:
    | "OPTIONS"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";
}
interface IRequestOptions {
  url: string;
  data?: string | AnyObject | ArrayBuffer;
  header?: any;
  showLoading?: boolean;
  successTips?: string;
}
interface IUploadOptions {
  filePath: string;
  name?: string;
}
class RequestCtx {
  private baseUrl: string;
  constructor({ baseUrl }: IRequestBaseOptions) {
    this.baseUrl = baseUrl;
  }

  private request({
    url,
    method,
    data,
    header,
    showLoading,
    successTips,
  }: IMethod & IRequestOptions): Promise<UniApp.RequestSuccessCallbackResult> {
    return new Promise((resolve, reject) => {
      if (showLoading) uni.showLoading();
      console.log("showLoading", showLoading);

      uni.request({
        url: this.baseUrl + url,
        method,
        data,
        header,
        success(result) {
          if (result.statusCode != 200) {
            reject(result);
          }
          resolve(result);
          if (successTips) uni.showToast({ title: successTips });
        },
        fail(result) {
          reject(result);
        },
        complete(result) {
          if (showLoading) uni.hideLoading();
        },
      });
    });
  }
  async post<T>({
    url,
    data,
    showLoading = true,
    successTips,
  }: IRequestOptions): Promise<T> {
    const res = await this.request({
      url,
      method: "POST",
      data,
      showLoading,
      successTips,
    });
    console.log(res.data);
    return res.data as T;
  }
  async get<T>({
    url,
    data,
    showLoading = false,
    successTips,
  }: IRequestOptions): Promise<T> {
    const res = await this.request({
      url,
      method: "GET",
      data,
      showLoading,
      successTips,
    });
    return res.data as T;
  }

  upload({
    url,
    filePath,
    name = "files",
  }: IRequestOptions &
    IUploadOptions): Promise<UniApp.UploadFileSuccessCallbackResult> {
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: this.baseUrl + url,
        files: [
          {
            uri: filePath,
          },
        ],
        name: name,
        success(result) {
          resolve(result);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }
}

export const requestCtx = new RequestCtx({ baseUrl: "http://localhost:3000" });
