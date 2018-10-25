import React from 'react';
import { Icon } from 'antd';
import styles from './Header.scss';

const Header = () => {
  return (
		<div>
			<ul className={styles.headerLeft}>
				<li>
					<Icon type="star" theme="filled" spin={false} style={{ color: "#cccccc", fontSize: '12px' }} />
					<span>收藏本站</span>
				</li>
				<li>
					<Icon type="environment" theme="filled" style={{ color: "#cccccc", fontSize: '12px' }} />
					<span>西湖区</span><span>[更换]</span>
				</li>
			</ul>
			<ul className={styles.headerRight}>
				<li>
					<span>[登录]</span>
				</li>
				<li>
					<span>[注册]</span>
				</li>
				<li>
					<span className={styles.headerMenu}>我的订单</span>
				</li>
				<li>
					<span className={styles.headerMenu}>我的家乐福</span>
				</li>
				<li>
					<span className={styles.headerMenu}>移动端</span>
				</li>
				<li>
					<span className={styles.headerMenu}>客户服务</span>
				</li>
				<li>
					<span className={styles.headerMenu}>EnglishSite</span>
				</li>
			</ul>
		</div>
  );
};

Header.propTypes = {
};

export default Header;
