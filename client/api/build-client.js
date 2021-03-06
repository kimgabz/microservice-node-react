import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    console.log('we are on the server');
    console.log(req.headers);
    // we are on the server
    // requests should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we must be on the browser
    console.log('we must be on the browser');
    return axios.create({
      baseURL: '/',
    });
  }
};
