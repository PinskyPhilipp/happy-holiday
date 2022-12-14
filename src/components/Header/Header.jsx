import Container from '../Container/Container';
import style from './Header.module.css';
import Choises from './Choises/Choises';

const Header = () => (
    <header className={style.header}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.buttons}>
                    <button className={style.button}>Поменять поздравление</button>
                    <button className={style.button}>Поменять фон</button>
                </div>

                <Choises/>
            </div>
        </Container>
    </header>
);

export default Header;