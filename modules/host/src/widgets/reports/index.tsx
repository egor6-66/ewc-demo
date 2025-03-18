import React from 'react';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Reports = (props: IProps) => {
    const { reports } = props;

    return (
        <div className={styles.wrapper}>
            {reports?.map((report) => (
                <div key={report.name} className={styles.report}>
                    <div className={styles.name}>{report.displayName}</div>
                    <div className={styles.description}>{report.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Reports;
