import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn18-1.fna.fbcdn.net/v/t39.30808-1/425454982_2146502805724426_3213295022834966388_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=qsh1i2zbhlEQ7kNvgFvfWe2&_nc_ht=scontent.fsgn18-1.fna&oh=00_AYBGzhlyxCRaFG7OIJKiwpmOBLI1-8hLQKsj_R6WaF1wnA&oe=66B3C8D9"
                alt="Boi"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trần Hoàng Minh Thư</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>boimint</span>
            </div>
        </div>
    );
}

export default AccountItem;
