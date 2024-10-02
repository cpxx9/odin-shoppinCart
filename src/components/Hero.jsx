import PropTypes from 'prop-types';

const Hero = ({ title, subtitle }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Your cool website title',
  subtitle: 'Your cool website tagline, make it unique',
};
export default Hero;
