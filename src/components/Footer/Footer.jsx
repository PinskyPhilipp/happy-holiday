import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as Telegram } from '../../img/tg.svg';
import { ReactComponent as Pinterest } from '../../img/pinterest.svg';
import { ReactComponent as Stumbleupon } from '../../img/stumbleupon.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href="https://ya.ru">Anastasia Ilina</a></p>
                    <p>Сoder: </p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="https://vk.com" className={style.link}>
                            <VKIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://t.me" className={style.link}>
                            <Telegram/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pinterest.com" className={style.link}>
                            <Pinterest/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://stumbleupon.com" className={style.link}>
                            <Stumbleupon/>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;