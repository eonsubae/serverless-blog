import { useState, useEffect } from 'react';
import axios from 'axios';
import { Heatmap, HeatmapData } from 'react-github-heatmap';
import '../../styles/components/about/about.scss';

const About = (data) => {
  const [contribs, setContribs] = useState<HeatmapData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setContribs(data);
    }
  }, []);

  useEffect(() => {
    if (contribs) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [contribs]);

  return (
    <>
      {isLoading && <span>Loading...</span>}
      <main className="about-main">
        <section>
          <h1>About Me</h1>
          {contribs && <Heatmap data={contribs} />}
        </section>
      </main>
    </>
  );
};

About.getInitialProps = async (res) => {
  const url = 'https://github-calendar.now.sh/v1/eonsubae';
  const response = await axios.get(url);

  return {
    years: response.data.years,
    contributions: response.data.contributions,
  };
};

export default About;
