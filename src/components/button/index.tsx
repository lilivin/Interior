import styles from "./index.module.scss";

export const enum ButtonStyles {
  Primary = "primary",
  Secendary = "secendary",
}

export const enum ButtonSize {
  Default = "default",
  Large = "large",
}

function Button({
  children,
  href,
  onClick,
  style = ButtonStyles["Primary"],
  size = ButtonSize["Default"],
}: {
  children: string;
  href?: string;
  onClick?: () => void;
  style?: ButtonStyles;
  size?: ButtonSize;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={`${styles.button} ${styles[style]} ${styles[size]}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${styles.button} ${styles[style]} ${styles[size]}`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
