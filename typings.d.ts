import sweetalert, { SweetAlertOptions } from "sweetalert2";

export = SwalWrapper;

declare namespace SwalWrapper {
  export function SwalError(error: any, args?: SweetAlertOptions);
  export function SwalSuccess(str: string, title: string = "Success!", args?: SweetAlertOptions);
  export function SwalWarn(str: string, title: string = "OOPSY!", args?: SweetAlertOptions);
}
