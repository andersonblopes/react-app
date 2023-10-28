import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({children, color = 'primary', onClick}: ButtonProps) => {
    return <button
        className={'mt-2 btn btn-' + color}
        onClick={onClick}>
        {children}
    </button>
}

export default Button;
