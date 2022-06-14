import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} className={cx('avatar')} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
          )}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.prototype = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
