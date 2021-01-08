import PropTypes from 'prop-types';
import errorImage from './error.jpg';
import s from './ErrorView.module.css';

function ErrorView({ texterror }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImage} width="650" alt="sadcat" />
      <p text={texterror} className={s.text}>
        {texterror}
      </p>
    </div>
  );
}

ErrorView.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorView;