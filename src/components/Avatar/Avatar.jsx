const Avatar = (props) => {
    const onClickHandle = () => {
        console.log("Вы кликнули по картинке");
        alert('Уведомление');
    }
    return (
        props.hidden === true ? <h1>Картинка скрыта</h1> : <img src={props.path} alt="" width = {500} height = {600} 
        onClick={onClickHandle} />
    );
}

export default Avatar;