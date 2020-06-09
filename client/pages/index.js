import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);

  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>you are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context /*{ req }*/);
  const { data } = await client.get('/api/users/currentuser');
  return data;

  // if (typeof window === 'undefined') {
  //   console.log('we are on server');
  //   const { data } = await axios.get(
  //     'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
  //     {
  //       headers: req.headers,
  //       // {
  //       //   Host: 'ticketing.dev',
  //       // },
  //     }
  //   );
  //   // console.log('errors');
  //   // console.log(data.errors);
  //   return data;
  // } else {
  //   console.log('we are on bowser');
  //   const { data } = await axios.get('/api/users/currentuser');
  //   return data;
  // }
  // return {}; // response.data;
};

export default LandingPage;
