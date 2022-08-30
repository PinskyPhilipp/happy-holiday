import Container from '../Container/Container';
import style from './Card.module.css';
import Img from './Img/Img';
import Text from './Text/Text';

const Card = () => (
    <div className={style.card}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <Img/>
                    <Text/>
                </div>
            </div>
        </Container>
    </div>
);

export default Card;