import ReactGA from 'react-ga';

export default () => {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('UA-102647962-1');
    window.GA_INITIALIZED = true
  }
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}
