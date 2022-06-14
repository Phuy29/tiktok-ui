import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classnames from 'classnames/bind';
import Header from '../components/Header';

const cx = classnames.bind(styles);

function DeafaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

DeafaultLayout.propsTypes = {
  children: PropTypes.node.isRequired,
};

export default DeafaultLayout;
