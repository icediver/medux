'use client';
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';

import { PropsWithChildren, ReactChild, ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import AuthProvider from './auth/auth-provider/AuthProvider';
import { persistor, store } from '@/store/store';
import { toast } from 'react-toastify';

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			toast(`Something went wrong: ${error.message}`);
		},
	}),
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function Providers({ children }: PropsWithChildren<unknown>) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider>{children} </AuthProvider>
				</PersistGate>
			</ReduxProvider>
		</QueryClientProvider>
	);
}
