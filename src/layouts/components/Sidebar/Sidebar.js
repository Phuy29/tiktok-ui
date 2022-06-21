import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  UserGroupActiveIcon,
  HomeActiveIcon,
  LiveActiveIcon,
} from '~/components/icons';

const cx = classnames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Sidebar;
