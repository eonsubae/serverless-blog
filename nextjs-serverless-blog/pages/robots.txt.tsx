const getRobots = () => `
  User-agent: *
  Disallow: /_next/static/
`;

const Robots = () => null;

Robots.getInitialProps = ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write(getRobots());
  res.end();
};

export default Robots;
