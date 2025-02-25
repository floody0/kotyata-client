'use client';

import { Provider } from 'react-redux';
import { AppStore, makeStore, store } from './store';
import { useRef } from 'react';

type Props = {
    children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
