export type Extension = 'pdf' | 'csv';

export interface IReport {
    name: string;
    displayName: string;
    description: string;
    extensions: Extensions;
}

export interface ITab {
    name: string;
    displayName: string;
    reports: Reports;
}

export interface IData {
    version: string;
    description: string;
    tabs: Tabs;
}

export type Extensions = Array<Extension>;
export type Reports = Array<IReport>;
export type Tabs = Array<ITab>;
