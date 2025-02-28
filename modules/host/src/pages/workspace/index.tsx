import React, { ReactNode } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import { Wrapper } from '../../shared/ui';
import Footer from '../../widgets/footer';
import Header from '../../widgets/header';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const changeTabs = (path: string) => {
        navigate(path);
    };

    const tabs = [
        { id: 0, title: 'incidents', path: 'incidents' },
        { id: 1, title: 'reports', path: 'reports' },
    ];

    const animation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    console.log(location.pathname.split('/')[2]);

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
            {/*<AnimatePresence mode={'wait'}>*/}
            <Outlet />
            {/*</AnimatePresence>*/}
            <div className={styles.footer}>
                <Footer />
            </div>
        </Wrapper>
    );
};

export default WorkspacePage;
