import PropTypes from 'prop-types';

const Hero = ({ title, subtitle }) => {
  return <div>{title}</div>;
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaulProps = {
  title: "Custom Built PC's",
  subtitle: 'Find the perfect computer, no matter your needs',
};
export default Hero;
