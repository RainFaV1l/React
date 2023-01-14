import Avatar from "./Avatar/Avatar";

const MENU = [

    {
        name: "Home",
        path: "/home"
    },

    {
        name: "About",
        path: "/about"
    },

    {
        name: "Donate",
        path: "/donate"
    },

];

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    {
                        MENU.map((item) => {
                            return (
                                <li key={item.name}>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            );
                        })
                    }

                </ul>
            </nav>
            <Avatar path="https://linchakin.com/files/word/1000/212/1.jpg"/>
        </header>
    );
}

export default Header;