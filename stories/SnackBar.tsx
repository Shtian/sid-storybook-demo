import { AlertTriangle, Check, Info } from "react-feather";
import "./snackbar.css";
interface SnackbarProps {
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "neutral" | "success" | "error";
  children: React.ReactNode;
}

const ICONS_BY_VARIANT = {
  neutral: Info,
  success: Check,
  error: AlertTriangle,
};

export const Snackbar = ({ variant, onClose, children }: SnackbarProps) => {
  const IconTag = ICONS_BY_VARIANT[variant];
  return (
    <div className={`snackbar snackbar--${variant}`}>
      <div className="snackbar__icon">
        <IconTag size={24} />
      </div>
      <p className="snackbar__content">
        <span className="sr-only">{variant} -</span>
        {children}
      </p>
      <button
        className="snackbar__close-btn"
        onClick={(e) => {
          onClose(e);
        }}
        aria-label="Lukk melding"
        aria-live="off"
      >
        Lukk
      </button>
    </div>
  );
};
