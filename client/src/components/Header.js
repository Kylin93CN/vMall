import React from 'react';
import { Icon } from 'antd';
import styles from './Header.scss';

const Header = () => {
	const _addFavorite = () => {
		const url = window.location;
		const title = '家乐福超市';
		try
			{
					window.external.addFavorite(url, title);
			}
			catch (e)
			{
					try
					{
							window.sidebar.addPanel(url, title, "");
					}
					catch (e)
					{
							alert("加入收藏失败，请使用Ctrl+D进行添加");
					}
			}
	}
  return (
		<div>
			<ul className={styles.headerLeft}>
				<li>
					<Icon type="star" theme="filled" spin={false} style={{ color: "#cccccc", fontSize: '12px' }} />
					<span onClick={_addFavorite}>&nbsp;收藏本站</span>
				</li>
				<li>
					<Icon type="environment" theme="filled" style={{ color: "#cccccc", fontSize: '12px' }} />
					<span>&nbsp;西湖区&nbsp;</span><span>[更换]</span>
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
					<ins className={styles.verticalLine}/>
					<span>我的订单</span>
					<ins className={styles.downChoice}/>
				</li>
				<li>
					<ins className={styles.verticalLine}/>
					<span>我的家乐福</span>
				</li>
				<li>
					<ins className={styles.verticalLine}/>
					<span>移动端</span>
				</li>
				<li>
					<ins className={styles.verticalLine}/>
					<span>客户服务</span>
				</li>
				<li>
					<ins className={styles.verticalLine}/>
					<span>EnglishSite</span>
				</li>
			</ul>
		</div>
  );
};

Header.propTypes = {
};

export default Header;
