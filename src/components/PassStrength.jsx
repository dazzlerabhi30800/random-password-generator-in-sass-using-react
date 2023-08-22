export default function PassStrength({ password }) {
  const passStrengthText = () => {
    if (password.length <= 3) {
      return "Weak";
    } else if (password.length > 3 && password.length <= 8) {
      return "Medium";
    } else if (password.length > 8 && password.length <= 12) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passStrength = passStrengthText();
  if (password.length === 0) return;

  return (
    <div className="pass-strength">
      <h3>Password Strength</h3>
      <p>{passStrength}</p>
    </div>
  );
}
