import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Wrapper } from '../../shared/ui';
import Footer from '../../widgets/footer';
import Header from '../../widgets/header';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const navigate = useNavigate();

    const changeTabs = (path: string) => {
        navigate(path);
    };

    const tabs = [
        { id: 0, title: 'incidents', path: 'incidents' },
        { id: 1, title: 'reports', path: 'reports' },
    ];

    return (
        <Wrapper animationKey={'workspacePage'} className={styles.wrapper}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.tabs}>
                {tabs.map((i) => (
                    <button key={i.id} onClick={() => changeTabs(i.path)}>
                        {i.title}
                    </button>
                ))}
            </div>
            <Outlet />
            <div className={styles.footer}>
                <Footer />
            </div>
        </Wrapper>
    );
};

export default WorkspacePage;
