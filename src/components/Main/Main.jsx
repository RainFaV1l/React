import Avatar from "../Avatar/Avatar";
import FIO from "../FIO/FIO";
import Skills from "../Skills/Skills";

function Main() {
    return (
        <main>
            <Avatar path="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"/>
            <FIO surname="Назмиев" name="Азат" patronymic="Рамилевич"/>
            <Skills/>
        </main>
    );
}

export default Main;