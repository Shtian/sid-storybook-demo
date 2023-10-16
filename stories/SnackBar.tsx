import { AlertTriangle, Check, Info } from "react-feather";
import "./snackbar.css";
interface SnackBarProps {
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "notice" | "success" | "error";
  children: React.ReactNode;
}
const ICONS_BY_VARIANT = {
  notice: Info,
  success: Check,
  error: AlertTriangle,
};
export const SnackBar = ({ variant, onClose, children }: SnackBarProps) => {
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
