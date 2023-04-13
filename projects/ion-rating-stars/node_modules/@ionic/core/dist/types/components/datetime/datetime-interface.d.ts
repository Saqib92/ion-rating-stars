export interface DatetimeOptions {
  tmp?: string;
}
export interface DatetimeChangeEventDetail {
  value?: string | string[] | null;
}
export interface DatetimeCustomEvent extends CustomEvent {
  detail: DatetimeChangeEventDetail;
  target: HTMLIonDatetimeElement;
}
export interface DatetimeParts {
  month: number;
  day: number | null;
  year: number;
  dayOfWeek?: number | null;
  hour?: number;
  minute?: number;
  ampm?: 'am' | 'pm';
  tzOffset?: number;
}
export declare type DatetimePresentation = 'date-time' | 'time-date' | 'date' | 'time' | 'month' | 'year' | 'month-year';
export declare type TitleSelectedDatesFormatter = (selectedDates: string[]) => string;
export declare type DatetimeHighlightStyle = {
  textColor: string;
  backgroundColor?: string;
} | {
  textColor?: string;
  backgroundColor: string;
};
export declare type DatetimeHighlight = {
  date: string;
} & DatetimeHighlightStyle;
export declare type DatetimeHighlightCallback = (dateIsoString: string) => DatetimeHighlightStyle | undefined;
