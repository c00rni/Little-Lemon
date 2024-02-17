function Button({children}) {
    return (
        <div className="button">
            <a href="#b" alt="">
                {children}
            </a>
        </div>

    );
}

export default Button;