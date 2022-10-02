import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import { AppContextProvider } from '$/context/AppContext';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const link = createHttpLink({
  uri: 'https://api-frontend-challenge.herokuapp.com/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppContextProvider>
    </ApolloProvider>
  );
}
