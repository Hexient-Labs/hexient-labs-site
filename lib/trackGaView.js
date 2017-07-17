import ReactGA from 'react-ga';

export default () => {
  // Google Analytics
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}
